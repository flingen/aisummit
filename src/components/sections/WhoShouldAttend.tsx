import { Users, Rocket, Code, Building2, Scale, TrendingUp } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const audiences = [
  {
    icon: Users,
    title: 'AI Talents & Workforce',
    description:
      'Engineers, data scientists, designers and career switchers building the skills the AI economy is hiring for.',
    color: 'from-volt to-purple-light',
  },
  {
    icon: Rocket,
    title: 'Founders & Startups',
    description: 'Meet investors, partners and early customers. Show what you are building.',
    color: 'from-signal to-signal-deep',
  },
  {
    icon: Code,
    title: 'Engineers & Builders',
    description: 'The people writing the code, training the models and shipping the products.',
    color: 'from-royal-blue to-electric-blue',
  },
  {
    icon: Building2,
    title: 'Companies & Enterprise Teams',
    description: 'Leaders figuring out how AI fits their business before competitors do.',
    color: 'from-volt-deep to-volt',
  },
  {
    icon: Scale,
    title: 'Regulators & Policymakers',
    description:
      'The people shaping the rules of the AI economy, in the room with the people living them.',
    color: 'from-electric-blue to-signal',
  },
  {
    icon: TrendingUp,
    title: 'Investors',
    description:
      "A front row view of Africa's AI pipeline before the rest of the market catches on.",
    color: 'from-purple-light to-signal',
  },
];

export function WhoShouldAttend() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 section-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-volt/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-signal/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="who_is_this_for"
          title="This Summit Was Built For You"
          subtitle="Whether you ship models for a living or you are AI-curious and ambitious, there is a seat with your name on it."
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {audiences.map((audience) => (
            <div key={audience.title} className="glass-card rounded-2xl p-6 group card-glow">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${audience.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <audience.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-satoshi font-bold text-lg text-white mb-3 group-hover:text-purple-light transition-colors">
                {audience.title}
              </h3>
              <p className="text-mist text-sm leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
