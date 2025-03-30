"use client"

import { v4 as uuidv4 } from "uuid";
import { createContext, useContext, useState, useEffect } from 'react'
import { SubjectProps } from "@/utils/types";

const AppContext = createContext<any>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
    // Estados do cronômetro
    const [isActive, setIsActive] = useState(false)
    const [isRunning, setIsRunning] = useState(false)
    const [time, setTime] = useState(0)
    
    const [currentDiscipline, setCurrentDiscipline] = useState<string>("");
    const [currentDisciplineImage, setCurrentDisciplineImage] = useState<string>("");
    const [currentSubject, setCurrentSubject] = useState<string>("");

    const [subjects, setSubjects] = useState<SubjectProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const res = localStorage.getItem('subjects');

        if (res) {
            setSubjects(JSON.parse(res));
        }

        setLoading(false);
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null; // Inicializa como null
    
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
    
        return () => {
            if (interval) clearInterval(interval); // Garante que só será limpo se existir
        };
    }, [isRunning]); 

    const startTimer = () => {
        setIsActive(true);
        setIsRunning(true);
    };
    const stopTimer = () => {
        setIsRunning(false);
    };
    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    };
    const finishTimer = () => {
        setIsActive(false);
        setIsRunning(false);
        setTime(0);
    }

    function handleFinishTimer() {
        const date = new Date();

        const data: SubjectProps = {
            id: uuidv4(),
            name: currentDiscipline,
            theme: currentSubject,
            studyTime: time,
            lastViewed: formatDate(date),
            image: currentDisciplineImage,
        }

        handleStorageData(data);

        finishTimer()
    }

    function handleStorageData(data: SubjectProps) {
        let list: SubjectProps[] = []

        const resData = localStorage.getItem('subjects');

        if (resData) {
            list = [...JSON.parse(resData), data]
        } else {
            list = [data]
        }

        setSubjects(list);
        localStorage.setItem("subjects", JSON.stringify(list))
    }

    const formatDate = (date: Date) => {
        const formattedDate = date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
        });
        return formattedDate;
    }

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hrs).padStart(2, "0")}h : ${String(mins).padStart(2, "0")}m : ${String(secs).padStart(2, "0")}s`;
    };

    return (
        <AppContext.Provider value={{
            time,
            isActive,
            isRunning,
            subjects,
            loading,
            startTimer,
            stopTimer,
            resetTimer,
            formatTime,
            handleFinishTimer,
            setCurrentDiscipline,
            setCurrentSubject,
            setCurrentDisciplineImage,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}