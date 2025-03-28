"use client"

import { useEffect, useState } from "react"
import { Card } from "../card"

import { SubjectProps } from "@/utils/types";

export function Board() {
    const [subjects, setSubjects] = useState<SubjectProps[]>([]);

    useEffect(() => {
        function getSubjects() {
            const res = localStorage.getItem('subjects');
            if (res) {
                setSubjects(JSON.parse(res));
            }
        }

        getSubjects();
    }, [subjects]);

    return(
        <div className='flex items-center gap-y-6 gap-x-5 flex-wrap mt-5'>
            {subjects.length > 0 ? subjects.map((subject) => (
                <Card />
            )) : (
                <p className="text-gray-600 text-sm">Não possui dados salvos ainda :(</p>
            )}
        </div>
    )
}