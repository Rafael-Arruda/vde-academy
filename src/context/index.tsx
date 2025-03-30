"use client"

import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext<any>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [isActive, setIsActive] = useState(false)
    const [isRunning, setIsRunning] = useState(false)
    const [time, setTime] = useState(0)

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
            startTimer,
            stopTimer,
            resetTimer,
            formatTime
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}