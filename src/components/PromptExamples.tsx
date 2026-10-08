export default function PromptExamples() {
  return (
    <div className="bg-white/3 border border-white/10 rounded-2xl p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-[#667eea]">
        🚀 Ejemplos de Prompts con Efectos
      </h2>

      <div className="space-y-5">
        <ExampleCard
          title="Estilo Redes Sociales / Storytelling"
          prompt={`A person looking shocked at their smartphone, <strong>on-screen iOS push notification pop-up</strong> appears from the top with a glowing effect, saying 'You won!', <strong>dynamic subtitles</strong> at the bottom center with yellow highlighted words, <strong>animated red arrow</strong> pointing to the phone screen, cinematic lighting, 4k.`}
        />
        <ExampleCard
          title="Estilo Tutorial / Tech"
          prompt={`Screen recording style overlay, <strong>mouse cursor clicking</strong> on a button with a ripple effect, <strong>green checkmark pop-up</strong> animation, <strong>loading progress bar</strong> at the bottom, clean modern UI, flat design.`}
        />
        <ExampleCard
          title="Estilo Cinematográfico"
          prompt={`A samurai walking in the rain on a futuristic Tokyo street, <strong>handheld camera movement</strong>, <strong>speed ramping</strong> as he draws his sword, <strong>volumetric lighting</strong> with <strong>neon glow</strong> reflections on puddles, <strong>teal and magenta color grading</strong>, subtle <strong>film grain</strong>, 4k resolution, photorealistic.`}
        />
      </div>
    </div>
  );
}

function ExampleCard({ title, prompt }: { title: string; prompt: string }) {
  return (
    <div className="bg-black/40 rounded-xl p-5 border-l-4 border-l-[#764ba2]">
      <div className="font-semibold text-[#764ba2] mb-2">{title}</div>
      <div className="relative mt-3">
        <span className="absolute -top-2.5 left-2.5 bg-[#764ba2] px-2.5 py-0.5 rounded text-[0.65rem] text-white font-bold tracking-wider">
          PROMPT
        </span>
        <div
          className="bg-black/50 p-4 rounded-lg font-mono text-sm leading-relaxed text-green-300"
          dangerouslySetInnerHTML={{ __html: prompt }}
        />
      </div>
    </div>
  );
}
