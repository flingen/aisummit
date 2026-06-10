import { Store, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const SPONSORSHIP_DECK_URL =
  'https://drive.google.com/drive/folders/1piAb3McIIhbNl3cmNMs-CDDWDxQ4lDAy?usp=sharing';

export function Exhibitors() {
  return (
    <section id="exhibitors" className="py-20 md:py-24 section-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-signal/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-volt/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="on_the_show_floor"
          title="Exhibitors Coming Soon"
          subtitle="The exhibition floor is being curated: AI products, platforms and infrastructure you can get hands-on with. Want your booth on this floor?"
        />

        <div className="text-center">
          <div className="glass-card rounded-2xl p-8 sm:p-10 max-w-xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-signal to-signal-deep flex items-center justify-center shadow-glow-signal">
              <Store className="w-8 h-8 text-void" />
            </div>
            <h3 className="font-satoshi font-bold text-xl text-white mb-2">
              Exhibit at Build AI Summit 1.0
            </h3>
            <p className="text-mist text-sm mb-6">
              Demos convert better than ads. Put your product in front of 750+ builders,
              decision makers and investors. Slots are limited.
            </p>
            <a
              href={SPONSORSHIP_DECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-base group"
            >
              View the Sponsorship Deck
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
