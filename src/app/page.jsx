"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a78657] to-[#7e553a] flex items-center justify-center p-8">
      <div className="bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl flex flex-col items-center w-2xl h-110 border border-purple-200 transition-all hover:scale-105 hover:shadow-orange-300">
        <h3 className="font-extrabold text-amber-700 mb-4 text-center drop-shadow-lg">Seja muito bem-vindo(a) a coffee API ☕</h3>
        <div className="flex justify-center">
          <Image
            src="/image/profile.png"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="rounded-xl p-8 w-full flex flex-col align-center gap-4 shadow-inner">
          <div className="flex align-center flex-col gap-9">
          <p className="text-lg font-medium text-amber-900">
            <span className="font-bold text-orange-700">Nome:</span> Giovanna Alba
          </p>
          <p className="text-lg font-medium text-amber-900">
            <span className="font-bold text-orange-700">Idade:</span> 17 anos
          </p>
          <p className="text-base text-amber-800 mt-2">
            Atualmente está no 3º ano do Ensino Médio e cursando o Técnico em Desenvolvimento de Sistemas.
          </p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Link href="/apiinfo" className="text-orange-700">Conheça um pouco mais sobre a nossa API!</Link>
        </div>
      </div>
    </div>
  );
}