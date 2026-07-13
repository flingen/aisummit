import { useEffect } from 'react';
import { Mic2, ArrowRight, Sparkles } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

import { RegisterButton } from '../components/ui/RegisterButton';
import { APPLY_TO_SPEAK_URL } from '../lib/event';

export function SpeakersPage() {
  useEffect(() => {
    document.title = 'Speakers | Build AI Summit 1.0';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-void">
      <Header />
      <main className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-volt/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-signal/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow-mono mb-6 block">speakers</span>
          <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Speakers <span className="gradient-text-green">Coming Soon</span>
          </h1>
          <p className="text-text-light text-lg mb-12">
            The lineup is being assembled and it will be worth the wait. Founders, engineers,
            regulators and researchers shaping AI in Africa will take this stage on July 30.
          </p>

          <div className="glass-card rounded-2xl p-8 sm:p-10">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-volt to-signal flex items-center justify-center shadow-glow-volt">
              <Mic2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-satoshi font-bold text-2xl text-white mb-2">
              Think you belong on this stage?
            </h2>
            <p className="text-mist text-sm mb-8 max-w-md mx-auto">
              The stage is open for applications from founders, engineers, researchers and
              operators building with AI in Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={APPLY_TO_SPEAK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base group"
              >
                <Sparkles className="w-5 h-5" />
                Apply to Speak
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <RegisterButton className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base">
                Register for Event
              </RegisterButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
