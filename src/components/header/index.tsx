"use client";

import { useState } from "react";
import { Container } from "../container"
import Link from "next/link"
import Image from "next/image"

import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

import Logo from '../../../public/imgs/logos/vde-logo.png'

export function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    function handleOpenMenu(bool: boolean) {
        setIsOpenMenu(bool);
    }

    return(
        <header className="w-full shadow-md bg-white">
            <Container>
                <div className="h-16 sm:h-20 flex items-center justify-between">
                    <Link href="/">
                        <Image 
                            src={Logo} 
                            alt="Logo da Vício de uma Estudante"
                            width={100}
                            height={30}   
                            quality={100} 
                        />
                    </Link>

                    <nav className="items-center gap-4 hidden sm:flex">
                        <Link 
                            href="/"
                            className="font-semibold text-lg text-black hover:opacity-60 transition-all duration-300"
                        >
                            Home
                        </Link>
                        <Link 
                            href="/details"
                            className="font-semibold text-lg text-black hover:opacity-60 transition-all duration-300"
                        >
                            Detalhes
                        </Link>
                    </nav>

                    <button className="cursor-pointer flex sm:hidden" onClick={() => handleOpenMenu(true)}>
                        <RiMenu3Fill size={30} color="#000"/>
                    </button>

                    <nav 
                        className={`flex flex-col items-end gap-4 sm:hidden fixed top-0 z-20 bg-white shadow-md w-56 p-4 pb-8 rounded-bl-2xl transition-all duration-300 ${isOpenMenu? 'right-0' : '-right-56'}`}
                    >
                        <button type="button" className="cursor-pointer" onClick={() => handleOpenMenu(false)}>
                            <IoClose size={30} color="#000"/>
                        </button>
                        <Link 
                            href="/"
                            className="font-semibold text-lg text-black hover:opacity-60 transition-all duration-300"
                        >
                            Home
                        </Link>
                        <Link 
                            href="/details"
                            className="font-semibold text-lg text-black hover:opacity-60 transition-all duration-300"
                        >
                            Detalhes
                        </Link>
                    </nav>
                </div>
            </Container>
        </header>
    )
}