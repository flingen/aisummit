import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const VENUE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=The+Zone+Gbagada+Lagos';

const faqs = [
  {
    question: 'Who should attend Build AI Summit 1.0?',
    answer:
      'Founders, engineers, product people, company leaders, regulators, investors, students and anyone serious about AI in Africa. If you are building with AI or planning to, you belong here.',
  },
  {
    question: 'Do I need a technical background?',
    answer:
      'No. Sessions are designed for both deep technical minds and people just getting started. You will leave smarter either way.',
  },
  {
    question: 'Where is the venue?',
    answer: 'The Zone, Gbagada, Lagos. Tap the question to open it on the map.',
    link: { href: VENUE_MAPS_URL, label: 'Open The Zone, Gbagada on Google Maps' },
  },
  {
    question: 'How do I register?',
    answer:
      'Grab your ticket via the Get Your Ticket button anywhere on this site. Seats are limited, do not wait for the last week.',
  },
  {
    question: 'Will there be opportunities for networking and partnerships?',
    answer:
      'That is half the point. Structured networking, an exhibition floor and a room full of people worth meeting.',
  },
  {
    question: 'How do I sponsor, exhibit or speak?',
    answer:
      'Check the Sponsorship Deck or book a call with the team. You can also email ai@afristablecoin.org and we will take it from there. Speakers can apply through the Apply to Speak form.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-volt/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-signal/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-volt to-signal mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <SectionHeading title="Frequently Asked Questions" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card-white rounded-2xl overflow-hidden hover:shadow-glow-volt transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-satoshi font-semibold text-white pr-4">{faq.question}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-volt' : 'bg-white/10'}`}>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180 text-white' : 'text-purple-light'
                    }`}
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-4 text-mist leading-relaxed">{faq.answer}</p>
                {faq.link && (
                  <a
                    href={faq.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link px-6 pb-6 inline-block text-sm"
                  >
                    {faq.link.label} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
