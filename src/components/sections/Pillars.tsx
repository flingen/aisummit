import { GraduationCap, Rocket, Building, Shield, Server, HeartPulse } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const pillars = [
  {
    icon: GraduationCap,
    title: 'Talent, Skills & the Future of Work',
    description:
      'Building the workforce for an AI economy. Upskilling, new careers, and keeping African talent competitive globally.',
    color: 'from-volt to-purple-light',
  },
  {
    icon: Rocket,
    title: 'AI Products & Startups',
    description:
      'From idea to shipped product. How African startups are building, pricing and scaling AI products that solve real problems.',
    color: 'from-signal to-signal-deep',
  },
  {
    icon: Building,
    title: 'AI in Business & Enterprise',
    description:
      'How banks, telcos, retailers and SMEs are putting AI to work across operations, customer experience and growth.',
    color: 'from-royal-blue to-electric-blue',
  },
  {
    icon: Shield,
    title: 'Regulation, Policy & Responsible AI',
    description:
      'Writing the rules while the game is being played. Data protection, AI governance and innovation that earns trust.',
    color: 'from-volt-deep to-volt',
  },
  {
    icon: Server,
    title: 'Infrastructure, Data & Compute',
    description:
      'The rails AI runs on. Compute access, local datasets, connectivity and what it takes to build for African realities.',
    color: 'from-electric-blue to-signal',
  },
  {
    icon: HeartPulse,
    title: 'AI x Finance, Health & Agriculture',
    description:
      "Where AI meets Africa's biggest sectors, and the opportunities hiding inside each one.",
    color: 'from-purple-light to-signal',
  },
];

export function Pillars() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 section-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-volt/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-signal/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="scope_of_the_summit"
          title="The Conversations That Matter"
          subtitle="Build AI Summit 1.0 goes deep on six fronts shaping how AI gets built, deployed and governed across Nigeria and Africa."
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {pillars.map((pillar) => (
            <div key={pillar.title} className="pillar-card p-6 group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-satoshi font-bold text-lg text-white mb-3 group-hover:text-purple-light transition-colors">
                {pillar.title}
              </h3>
              <p className="text-mist text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
