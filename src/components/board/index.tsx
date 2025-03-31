"use client"

import { SubjectProps } from "@/utils/types";
import { Card } from "../card"

import { useAppContext } from "@/context"

export function Board() {

    const { subjects, loading } = useAppContext();

    return(
        <div className='flex items-center gap-y-6 gap-x-5 flex-wrap mt-5 mb-12'>
            {subjects.length > 0 ? subjects.map((subject: SubjectProps) => (
                <Card key={subject.id} data={subject}/>
            )) : (
                loading? (
                    <p className="text-gray-600 text-sm">Carregando...</p>
                ) : (
                    <p className="text-gray-600 text-sm">Que pena, parece que você não possui dados salvos ainda :(</p>
                )
            )}
        </div>
    )
}