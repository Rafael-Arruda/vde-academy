"use client"

import { SubjectProps } from "@/utils/types";
import { Card } from "../card"
import { SkeletonCardImage } from "../skeleton-card-image";

import { useAppContext } from "@/context"

export function Board() {

    const { subjects, loading } = useAppContext();

    return(
        <div className='flex items-center gap-y-6 gap-x-5 flex-wrap mt-5'>
            {subjects.length > 0 ? subjects.map((subject: SubjectProps) => (
                <Card key={subject.id} data={subject}/>
            )) : (
                loading? (
                    <>
                        <SkeletonCardImage/>
                        <SkeletonCardImage/>
                        <SkeletonCardImage/>
                        <SkeletonCardImage/>
                        <SkeletonCardImage/>
                        <SkeletonCardImage/>
                        <SkeletonCardImage/>
                        <SkeletonCardImage/>
                    </>
                ) : (
                    <p className="text-gray-600 text-sm">Que pena, parece que você não possui dados salvos ainda :(</p>
                )
            )}
        </div>
    )
}