import { categories } from "../data/effectsData";

interface CategoriesNavProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoriesNav({ activeCategory, onCategoryChange }: CategoriesNavProps) {
  return (
    <nav className="flex flex-wrap gap-2.5 justify-center mb-10 max-md:justify-start max-md:overflow-x-auto max-md:flex-nowrap max-md:pb-2.5">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer
            ${activeCategory === cat.id
              ? "bg-gradient-to-r from-[#667eea] to-[#764ba2] border border-transparent text-white"
              : "bg-white/5 border border-white/10 text-gray-200 hover:bg-[#667eea]/20 hover:border-[#667eea] hover:-translate-y-0.5"
            }`}
        >
          {cat.icon && <span className="mr-1">{cat.icon}</span>}
          {cat.label}
        </button>
      ))}
    </nav>
  );
}
