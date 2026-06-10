import { Mic, Store, ArrowRight, Sparkles } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SPONSORSHIP_DECK_URL =
  'https://drive.google.com/drive/folders/1piAb3McIIhbNl3cmNMs-CDDWDxQ4lDAy?usp=sharing';

const opportunities = [
  {
    icon: Mic,
    title: 'Spotlight Sessions',
    description:
      'Own the stage. Present your product, insight or vision directly to the most relevant audience of builders, decision makers and policymakers you will find anywhere in Africa this year.',
    highlight: 'Own a keynote or panel. Shape the narrative.',
    color: 'from-signal to-signal-deep',
  },
  {
    icon: Store,
    title: 'Exhibitions',
    description:
      'A booth on the floor where the entire ecosystem walks past, stops and talks. Put your product in people\u2019s hands; demos convert better than ads.',
    highlight: 'Physical booths in front of 750+ attendees.',
    color: 'from-volt to-purple-light',
  },
];

export function Sponsorship() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sponsors" className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-signal/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-volt/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="sponsorship_opportunities"
          title="Put Your Brand in Front of Africa's AI Ecosystem"
          subtitle="750+ decision makers, builders and investors in one room for one day. Spotlight sessions, exhibition booths and brand placements designed to get you noticed, remembered and contacted."
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {opportunities.map((opportunity) => (
            <div key={opportunity.title} className="pillar-card p-8 group flex flex-col">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${opportunity.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <opportunity.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-satoshi font-bold text-xl text-white mb-3">
                {opportunity.title}
              </h3>

              <p className="text-mist text-sm leading-relaxed mb-5 flex-grow">
                {opportunity.description}
              </p>

              <div className="flex items-center gap-2 text-signal">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <p className="text-sm font-semibold italic">{opportunity.highlight}</p>
              </div>
            </div>
          ))}

          {/* CTA card as the third column */}
          <div className="glass-card-white rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-volt to-signal flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-satoshi font-bold text-xl text-white mb-2">
              Slots Are Limited!
            </h3>
            <p className="text-mist text-sm mb-6">
              Talk to the team about partnership packages tailored to your brand's goals, or go
              straight to the deck.
            </p>
            <a
              href={SPONSORSHIP_DECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3 text-sm inline-flex items-center gap-2"
            >
              View the Sponsorship Deck <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
