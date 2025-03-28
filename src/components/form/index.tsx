"use client"

import * as React from "react"
import { useState, FormEvent } from "react"

import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { toast } from 'react-toastify';

import { disciplinesData, subjectsData } from '@/data'

export function Form() {
    const [selectedDiscipline, setSelectedDiscipline] = useState<string>("");
    const [selectedSubject, setSelectedSubject] = useState<string>("");

    // Lista de temas da disciplina selecionada
    const [subjects, setSubjects] = useState<string[]>([]);

    function handleDisciplineChange(value: string) {
        const id = disciplinesData.find((discipline) => discipline.name === value)?.id
        const subjectsList = subjectsData.find((item) => item.disciplineId === id)?.items

        setSelectedDiscipline(value);
        setSelectedSubject("");
        setSubjects(subjectsList || []);
    }

    function handleSubjectChange(value: string) {
        setSelectedSubject(value);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (selectedDiscipline === "" || selectedSubject === "") {
            toast.warning("Preencha todos os campos para iniciar o cronômetro.", {
                autoClose: 3000,
                closeOnClick: true,
            });
            return;
        }

        // Iniciar cronômetro

        // Limpar campos
        setSelectedDiscipline("");
        setSelectedSubject("");
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="flex items-center gap-5 mt-5 flex-col sm:flex-row">
                <Select onValueChange={handleDisciplineChange} value={selectedDiscipline}>
                    <SelectTrigger className="w-full sm:w-[250px] cursor-pointer">
                        <div className="truncate w-full text-left">
                            <SelectValue placeholder="Selecione uma disciplina"/>
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Disciplina</SelectLabel>
                            {disciplinesData.map((item) => (
                                <SelectItem key={item.id} value={item.name} className="cursor-pointer">{item.name}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select onValueChange={handleSubjectChange} value={selectedSubject}>
                    <SelectTrigger className="w-full sm:w-[250px] cursor-pointer">
                        <div className="truncate w-full text-left">
                            <SelectValue placeholder="Selecione um tema" />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>{selectedDiscipline === ""? "Selecione uma disciplina" : "Tema"}</SelectLabel>
                            {subjects.map((item) => (
                                <SelectItem key={item} value={item} className="cursor-pointer">{item}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Button 
                    type="submit" 
                    className="bg-[#8216c6] hover:bg-[#8216c6]/80 cursor-pointer w-full sm:w-fit"
                >
                    Iniciar
                </Button>
            </div>
        </form>
    )
}