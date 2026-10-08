import { effectsData, type Effect } from "../data/effectsData";

interface EffectsGridProps {
  activeCategory: string;
  searchTerm: string;
  onCopy: (effectName: string) => void;
}

export default function EffectsGrid({ activeCategory, searchTerm, onCopy }: EffectsGridProps) {
  const filteredCategories = Object.entries(effectsData).filter(([categoryKey]) => {
    if (activeCategory !== "all" && activeCategory !== categoryKey) return false;
    return true;
  });

  const getFilteredEffects = (effects: Effect[]): Effect[] => {
    if (!searchTerm) return effects;
    const term = searchTerm.toLowerCase();
    return effects.filter(
      (effect) =>
        effect.name.toLowerCase().includes(term) ||
        effect.desc.toLowerCase().includes(term)
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
      {filteredCategories.map(([categoryKey, data]) => {
        const filteredEffects = getFilteredEffects(data.effects);
        if (filteredEffects.length === 0) return null;

        return (
          <div
            key={categoryKey}
            className="bg-white/3 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 hover:border-[#667eea]/30 hover:-translate-y-1"
          >
            <h2 className="text-xl font-bold mb-5 flex items-center gap-2.5">
              <span className="text-2xl">{data.icon}</span>
              {data.title}
            </h2>

            <div className="space-y-3">
              {filteredEffects.map((effect) => (
                <EffectItem
                  key={effect.name}
                  effect={effect}
                  onCopy={onCopy}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function EffectItem({ effect, onCopy }: { effect: Effect; onCopy: (name: string) => void }) {
  return (
    <div
      onClick={() => onCopy(effect.name)}
      className="bg-black/30 rounded-lg p-4 border-l-[3px] border-l-[#667eea] transition-all duration-300 cursor-pointer hover:bg-[#667eea]/10 hover:translate-x-1"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold text-[#667eea]">{effect.name}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCopy(effect.name);
          }}
          className="bg-[#667eea]/20 border border-[#667eea] text-[#667eea] px-2.5 py-1 rounded text-xs transition-all duration-300 hover:bg-[#667eea] hover:text-white cursor-pointer"
        >
          Copiar
        </button>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{effect.desc}</p>
    </div>
  );
}
