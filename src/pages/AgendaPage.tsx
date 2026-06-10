import { useEffect } from 'react';
import { CalendarClock, Ticket, ArrowRight } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const TICKET_URL = 'https://tix.africa/discover/nigeria-ai-summit';

export function AgendaPage() {
  useEffect(() => {
    document.title = 'Agenda | Build AI Summit 1.0';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-void">
      <Header />
      <main className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-volt/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-signal/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow-mono mb-6 block">agenda</span>
          <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Agenda <span className="gradient-text-green">Coming Soon</span>
          </h1>
          <p className="text-text-light text-lg mb-12">
            One day, multiple stages, zero filler. The full schedule drops shortly. Grab your
            ticket now so you are not scrambling later.
          </p>

          <div className="glass-card rounded-2xl p-8 sm:p-10">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-signal to-signal-deep flex items-center justify-center shadow-glow-signal">
              <CalendarClock className="w-8 h-8 text-void" />
            </div>
            <p className="font-mono-label text-mist text-sm mb-8">
              thursday, 10th september 2026 · 8:00 am wat · the zone, gbagada, lagos
            </p>
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base group"
            >
              <Ticket className="w-5 h-5" />
              Get Your Ticket
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
