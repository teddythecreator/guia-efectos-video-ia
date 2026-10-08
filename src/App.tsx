import { useState, useCallback } from "react";
import Header from "./components/Header";
import CategoriesNav from "./components/CategoriesNav";
import EffectsGrid from "./components/EffectsGrid";
import PromptExamples from "./components/PromptExamples";
import Toast from "./components/Toast";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = useCallback((effectName: string) => {
    navigator.clipboard.writeText(effectName).then(() => {
      setToastMessage(`✅ "${effectName}" copiado al portapapeles`);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2500);
    }).catch((err) => {
      console.error("Error al copiar:", err);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] to-[#1a1a2e] text-gray-200 p-5">
      <div className="max-w-[1400px] mx-auto">
        <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <CategoriesNav
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <EffectsGrid
          activeCategory={activeCategory}
          searchTerm={searchTerm}
          onCopy={handleCopy}
        />

        <PromptExamples />
      </div>

      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
}
