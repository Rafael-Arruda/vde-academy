import Image from "next/image"

import etica from '../../../public/imgs/disciplines/etica-oab.jpg'

export function Card() {
    return (
        <div className="rounded-lg overflow-hidden border">
            <div className="relative">
                <Image 
                    src={etica} 
                    alt="Imagem"
                    width={288}
                    height={162}
                    quality={100}
                    className="object-cover aspect-video"
                />
                <h3 className="absolute top-0 right-0 bg-black text-white px-2 py-1 rounded-bl-lg text-sm">Ética e Estatuto da OAB</h3>
            </div>

            <div className="p-2 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="text-[12px] text-gray-600">Tema:</span>
                    <span className="font-bold text-sm">Prerrogativas do Advogado</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[12px] text-gray-600">Tempo de estudo:</span>
                    <span className="font-bold text-sm">1h 30min</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[12px] text-gray-600">Visto por último:</span>
                    <span className="font-bold text-sm">12/08/2021</span>
                </div>
            </div>
        </div>
    )
}