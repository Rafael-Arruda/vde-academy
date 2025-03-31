import { Container } from "@/components/container"
import { ChartBar } from "@/components/chart-bar"
import { Statistics } from "@/components/statistics"

export default function Detalhes() {
    return (
        <main>
            <Container>
                <section className="mt-12 mb-12">
                    <h1 className="font-bold text-2xl">Bem vindo ao painel do estudante</h1>
                    
                    <div className="flex flex-col xl:flex-row gap-5 mt-5">
                        <div className="flex-1/2">
                            <Statistics />
                        </div>
                        <div className="flex-1/3">
                            <ChartBar />
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    )
}