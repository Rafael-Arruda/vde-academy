import Image from "next/image"

import { SubjectProps } from "@/utils/types"

interface CardProps {
    data: SubjectProps
}

export function Card({ data }: CardProps) {

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
        <div className="rounded-lg overflow-hidden border max-w-[288px]">
            <div className="relative">
                <Image 
                    src={data.image} 
                    alt={data.name}
                    width={288}
                    height={162}
                    quality={100}
                    className="object-cover aspect-video"
                />
                <h3 className="absolute top-0 right-0 bg-black text-white px-2 py-1 rounded-bl-lg text-sm">{data.name}</h3>
            </div>

            <div className="p-2 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="text-[12px] text-gray-600">Tema:</span>
                    <span className="font-bold text-sm truncate" title={data.theme}>{data.theme}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[12px] text-gray-600">Tempo de estudo:</span>
                    <span className="font-bold text-sm">{formatTime(data.studyTime)}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[12px] text-gray-600">Visto por último:</span>
                    <span className="font-bold text-sm">{data.lastViewed}</span>
                </div>
            </div>
        </div>
    )
}