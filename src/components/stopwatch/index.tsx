"use client"

import { BsFillStopwatchFill } from "react-icons/bs";
import { FaPlay, FaPause } from "react-icons/fa6";
import { RiResetLeftFill } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import { useAppContext } from "@/context";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function Stopwatch() {
    const {
        isActive,
        isRunning,
        time,
        formatTime,
        startTimer,
        stopTimer,
        resetTimer,
        handleFinishTimer,
    } = useAppContext();

    return (
        <div className={`absolute top-28 right-0 z-10 ${isActive ? "block" : "hidden"}`}>
            <div className="flex justify-start items-center gap-3 py-2 px-3 rounded-bl-full rounded-tl-full bg-[#8216c6] shadow-lg shadow-[#8216c6]/30 overflow-hidden w-52 hover:w-52 transition-all duration-200">
                <BsFillStopwatchFill size={28} color="#fff" className="min-w-7" />
                <div className="min-w-[140px] max-w-[140px]">
                    <span className="text-white text-lg font-semibold gap-2 whitespace-nowrap select-none">
                        {time > 0 ? formatTime(time) : "00h : 00m : 00s"}
                    </span>
                    <div className="flex items-center justify-center gap-3">
                        <button className="cursor-pointer" title="Resetar" onClick={resetTimer}>
                            <RiResetLeftFill size={16} color="#fff" className="min-w-4" />
                        </button>
                        {isRunning ? (
                            <button className="cursor-pointer" title="Pausar" onClick={stopTimer}>
                                <FaPause size={16} color="#fff" className="min-w-4" />
                            </button>
                        ) : (
                            <button className="cursor-pointer" title="Continuar" onClick={startTimer}>
                                <FaPlay size={16} color="#fff" className="min-w-4" />
                            </button>
                        )}
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button className="cursor-pointer" title="Finalizar" onClick={stopTimer}>
                                    <IoMdCheckmark size={16} color="#fff" className="min-w-4" />
                                </button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Tem certeza que deseja finalizar?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Está ação irá encerrar o cronômetro e salvar os dados da disciplina e matéria que você estudou.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel className="cursor-pointer" onClick={startTimer}>Cancelar</AlertDialogCancel>
                                    <AlertDialogAction className="bg-[#8216c6] hover:bg-[#8216c6]/80 cursor-pointer" onClick={handleFinishTimer}>Finalizar</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            </div>
        </div>
    )
}