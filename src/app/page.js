"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-blue-300 flex items-center justify-center p-8">
      <div className="bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl flex flex-col items-center w-full max-w-xl border border-purple-200 transition-all hover:scale-105 hover:shadow-purple-300">
        <div className="relative mb-4">
          <Image
            src="/image/profile.png"
            alt="Profile Picture"
            width={180}
            height={180}
            className="rounded-full border-4 border-blue-300 shadow-lg ring-4 ring-purple-200"
          />
        </div>
        <h3 className="font-extrabold text-2xl text-purple-700 mb-2 text-center drop-shadow-lg">
          Seja muito bem-vindo(a) à API da nossa cafeteria <span className="animate-bounce">☕</span>
        </h3>
        <div className="rounded-xl p-6 w-full flex flex-col gap-2 shadow-inner">
          <p className="text-lg font-medium text-gray-800">
            <span className="font-bold text-purple-600">Nome:</span> Giovanna Alba
          </p>
          <p className="text-lg font-medium text-gray-800">
            <span className="font-bold text-purple-600">Idade:</span> 17 anos
          </p>
          <p className="text-base text-gray-700 mt-2">
            Atualmente está no 3º ano do Ensino Médio e cursando o Técnico em Desenvolvimento de Sistemas.
          </p>
        </div>
      </div>
    </div>
  );
}