import { useState } from "react";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function Header({ searchTerm, onSearchChange }: HeaderProps) {
  const [focused, setFocused] = useState(false);

  return (
    <header className="text-center py-10 px-5 mb-10">
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-3">
        🎬 Guía Completa de Efectos de Video
      </h1>
      <p className="text-gray-400 text-base md:text-lg">
        Referencia de palabras clave para prompts de IA generativa de video
      </p>

      <div className="w-full max-w-xl mx-auto mt-8 relative">
        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl pointer-events-none">
          🔍
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Buscar efectos... (ej: zoom, glitch, notificación)"
          className={`w-full py-4 pl-14 pr-5 rounded-full text-white text-base transition-all duration-300 placeholder-gray-500
            ${focused
              ? "border-2 border-[#667eea] bg-white/10"
              : "border-2 border-[#667eea]/30 bg-white/5"
            }
            focus:outline-none`}
        />
      </div>
    </header>
  );
}
