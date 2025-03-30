import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { ToastContainer } from 'react-toastify';

import { Header } from "@/components/header";
import { Stopwatch } from "@/components/stopwatch";

import { AppProvider } from "@/context";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Vde Academy | Plataforma de Estudos",
  description: "Aqui na Vde Academy você organiza seus estudos, além de ter acesso a um dashboard completo com informações sobre o seu progresso.",
  keywords: "Vde Academy, Vício de uma Estudante, Plataforma de Estudos, OAB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <AppProvider>
          <Header />
          <Stopwatch />
          {children}

          <ToastContainer/>
        </AppProvider>
      </body>
    </html>
  );
}
