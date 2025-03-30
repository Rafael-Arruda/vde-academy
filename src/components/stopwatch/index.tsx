"use client"

import { BsFillStopwatchFill } from "react-icons/bs";
import { FaPlay, FaPause } from "react-icons/fa6";
import { RiResetLeftFill } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";

import { useAppContext } from "@/context";

export function Stopwatch() {
    const { 
        isActive, 
        isRunning, 
        time, 
        formatTime, 
        startTimer,
        stopTimer,
        resetTimer,
    } = useAppContext();

    return(
        <div className={`absolute top-28 right-0 z-10 ${isActive? "block" : "hidden"}`}>
            <div className="flex items-center gap-3 py-1 px-3 rounded-bl-full rounded-tl-full bg-[#8216c6] shadow-lg shadow-[#8216c6]/30 overflow-hidden w-10 hover:w-48 transition-all duration-200">
                <BsFillStopwatchFill size={24} color="#fff" className="min-w-6"/>
                <div className="min-w-[140px] max-w-[140px]">
                    <span className="text-white text-lg font-semibold gap-2 whitespace-nowrap select-none">
                        {time > 0? formatTime(time) : "00h : 00m : 00s"}
                    </span>
                    <div className="flex items-center justify-center gap-3">
                        <button className="cursor-pointer" title="Resetar" onClick={resetTimer}>
                            <RiResetLeftFill size={14} color="#fff" className="min-w-4"/>
                        </button>
                        {isRunning ? (
                        <button className="cursor-pointer" title="Pausar" onClick={stopTimer}>
                            <FaPause size={14} color="#fff" className="min-w-4"/>
                        </button>
                        ) : (
                        <button className="cursor-pointer" title="Continuar" onClick={startTimer}>
                            <FaPlay size={14} color="#fff" className="min-w-4"/>
                        </button>
                        )}
                        <button className="cursor-pointer" title="Finalizar"> 
                            <IoMdCheckmark size={14} color="#fff" className="min-w-4"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}