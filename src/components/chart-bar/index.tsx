"use client"

import { useEffect, useState } from 'react'
import { useAppContext } from "@/context"
import { SubjectProps } from '@/utils/types'
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { SkeletonChart } from '../skeleton-chart'

const chartConfig = {
    percentage: {
        label: "Percentual",
        color: "rgba(130, 22, 198, .9)",
    },
} satisfies ChartConfig

interface ChartBarProps {
    name: string,
    percentage: number,
}

export function ChartBar() {
    const { subjects }: { subjects: SubjectProps[] } = useAppContext()
    const [chartData, setChartData] = useState<ChartBarProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Agrupa os tempos de estudo por disciplina
        const studyMap = subjects.reduce((acc, subject) => {
            acc[subject.name] = (acc[subject.name] || 0) + subject.studyTime;
            return acc;
        }, {} as Record<string, number>);

        // Calcula o tempo total de estudo
        const totalTime = Object.values(studyMap).reduce((sum, time) => sum + time, 0);

        // Retorna um array com a porcentagem de cada disciplina
        const data = Object.entries(studyMap).map(([name, studyTime]) => ({
            name,
            percentage: totalTime > 0 ? Number(((studyTime / totalTime) * 100).toFixed(2)) : 0, // Mantendo como número
        }));

        setChartData(data)
        setLoading(false)
    }, [subjects])

    return (
        <>
            {loading ? (
                <SkeletonChart />
            ) : (
                !loading && chartData.length === 0? "" : (
                <Card>
                    <CardHeader>
                        <CardTitle>Gráfico de Barras</CardTitle>
                        <CardDescription>Confira seu desempenho em cada disciplina</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart accessibilityLayer data={chartData}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dot" />}
                                />
                                <Bar dataKey="percentage" fill="var(--color-percentage)" radius={8} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-center gap-2 text-sm">
                        <div className="flex gap-2 font-medium leading-none">
                            % de estudo por disciplina <TrendingUp className="h-4 w-4" />
                        </div>
                    </CardFooter>
                </Card>
                ) 
            )}
        </>
    )
}