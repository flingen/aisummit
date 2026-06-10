import { ArrowRight, Ticket, Handshake } from 'lucide-react';

const TICKET_URL = 'https://tix.africa/discover/nigeria-ai-summit';
const SPONSORSHIP_DECK_URL =
  'https://drive.google.com/drive/folders/1piAb3McIIhbNl3cmNMs-CDDWDxQ4lDAy?usp=sharing';

export function CTA() {
  return (
    <section className="py-20 lg:py-28 section-gradient-blue-light relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-volt/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-signal/15 rounded-full blur-[120px]" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
          <div className="w-2 h-2 bg-signal rounded-full animate-pulse" />
          <span className="text-text-light text-sm font-mono-label">registration_is_open</span>
        </div>

        <h2 className="font-satoshi font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
          Be in the Room Where Africa's{' '}
          <span className="gradient-text-green">AI Future Gets Built</span>
        </h2>

        <p className="text-text-light text-lg mb-10 max-w-2xl mx-auto">
          Tickets are limited and this room will fill up. Join the founders, engineers, regulators
          and investors writing the next chapter of African tech.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-lg inline-flex items-center justify-center gap-2"
          >
            <Ticket className="w-5 h-5" />
            Get Your Ticket
            <ArrowRight size={18} />
          </a>
          <a
            href={SPONSORSHIP_DECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-10 py-4 text-lg inline-flex items-center justify-center gap-2"
          >
            <Handshake className="w-5 h-5" />
            Sponsorship Deck
          </a>
        </div>
      </div>
    </section>
  );
}
