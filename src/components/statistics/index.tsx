"use client"

import { useEffect, useState } from "react";
import { FaClock, FaBookReader } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { useAppContext } from "@/context";
import { SubjectProps } from "@/utils/types";

import { SkeletonCard } from "../skeleton-card";

interface RankingProps {
    name: string,
    studyTime: number
}

export function Statistics() {
    const { subjects }: { subjects: SubjectProps[] } = useAppContext()

    const [disciplines, setDisciplines] = useState<number>();
    const [totalTime, setTotalTime] = useState<number>();
    const [ranking, setRanking] = useState<RankingProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mapa para somar as horas por disciplina
        const studyMap = subjects.reduce((acc, { name, studyTime }) => {
            acc[name] = (acc[name] || 0) + studyTime;
            return acc;
        }, {} as Record<string, number>);

        // Número de disciplinas únicas
        const totalDisciplines = Object.keys(studyMap).length;

        // Total de horas estudadas
        const totalStudyTime = Object.values(studyMap).reduce((sum, time) => sum + time, 0);

        // Três disciplinas mais estudadas
        const topSubjects = Object.entries(studyMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([name, studyTime]) => ({ name, studyTime }));

        setDisciplines(totalDisciplines)
        setTotalTime(totalStudyTime)
        setRanking(topSubjects)
        setLoading(false)

    }, [subjects])

    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        const parts = [];

        if (hours > 0) parts.push(`${hours}hr`);
        if (minutes > 0) parts.push(`${minutes}min`);
        if (remainingSeconds > 0 && hours === 0) parts.push(`${remainingSeconds}seg`);

        return parts.join(" ") || "0seg";
    };

    return (
        <div className="h-full flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row items-center gap-4">
                {loading ? (
                    <>
                        <SkeletonCard />
                        <SkeletonCard />
                    </>
                ) : (
                    !loading && !disciplines ? (
                        <p className="text-gray-600 text-sm">Que pena, parece que você não possui dados salvos ainda :(</p>
                    ) : (
                        <>
                            <div className="w-full flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 bg-[#8216c6] rounded-xl dark:bg-gray-800">
                                        <FaClock size={18} color="#fff" />
                                    </div>
                                    <h2 className="font-bold text-xl">Tempo</h2>
                                </div>
                                <div className="flex items-end justify-between mt-5">
                                    <div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Você estudou um total de</span>
                                        <h3 className="mt-1 h-8 text-2xl font-bold text-gray-800 text-title-sm dark:text-white/90">
                                            {totalTime ? formatTime(totalTime) : ""}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 bg-[#8216c6] rounded-xl dark:bg-gray-800">
                                        <FaBookReader size={18} color="#fff" />
                                    </div>
                                    <h2 className="font-bold text-xl">Disciplinas</h2>
                                </div>
                                <div className="flex items-end justify-between mt-5">
                                    <div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Ao todo foram estudadas</span>
                                        <h3 className="mt-1 h-8 text-2xl font-bold text-gray-800 text-title-sm dark:text-white/90">
                                            {disciplines ? disciplines : ""}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                )}


            </div>

            {
                loading ? (
                    <SkeletonCard />
                ) : (
                    !loading && ranking.length === 0 ? "" : (
                        <div className="h-full flex-1 flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-10 h-10 bg-[#8216c6] rounded-xl dark:bg-gray-800">
                                    <MdFavorite size={18} color="#fff" />
                                </div>
                                <h2 className="font-bold text-xl">Mais estudadas</h2>
                            </div>
                            <div className="flex items-end justify-between mt-5">
                                <div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Estas são suas disciplinas favoritas</span>
                                    <ul className="mt-1 flex flex-col gap-1">
                                        {ranking.map((item, index) => (
                                            <li key={index} className="font-medium">{`${index + 1}º ${item.name}`}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}