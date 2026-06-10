import { Mic2, ArrowRight, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const APPLY_TO_SPEAK_URL = 'https://forms.gle/ANkQJexAc7Bx3wWB7';

export function SpeakersHighlight() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="speakers-highlight" className="py-20 lg:py-28 bg-void relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-volt/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-signal/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center">
          <span className="eyebrow-mono mb-6 block">speakers</span>
          <h2 className="font-satoshi font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Speakers <span className="gradient-text-green">Coming Soon</span>
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto mb-10">
            The lineup is being assembled and it will be worth the wait. Think you belong on this
            stage? Apply below.
          </p>

          <div className="glass-card rounded-2xl p-8 sm:p-10 max-w-xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-volt to-signal flex items-center justify-center shadow-glow-volt">
              <Mic2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-satoshi font-bold text-xl text-white mb-2">
              Got something the ecosystem needs to hear?
            </h3>
            <p className="text-mist text-sm mb-6">
              Founders, engineers, researchers and operators building with AI in Africa: the stage
              is open for applications.
            </p>
            <a
              href={APPLY_TO_SPEAK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-base group"
            >
              <Sparkles className="w-5 h-5" />
              Apply to Speak
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
