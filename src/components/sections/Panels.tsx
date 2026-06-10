import { Rocket, Briefcase, Scale, Cpu } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const panels = [
  {
    icon: Rocket,
    title: 'Shipping AI Products in Africa',
    description:
      'Founders and product leads on what it actually takes to build, launch and scale AI products for African markets.',
    color: 'from-volt to-purple-light',
  },
  {
    icon: Briefcase,
    title: 'AI at Work: Enterprise Adoption',
    description:
      'How serious companies are rolling out AI across operations, and what separates wins from wasted budgets.',
    color: 'from-signal to-signal-deep',
  },
  {
    icon: Scale,
    title: 'Governing the Machines',
    description:
      'Regulators and builders in one conversation on policy, data protection and responsible AI that does not kill innovation.',
    color: 'from-royal-blue to-electric-blue',
  },
  {
    icon: Cpu,
    title: 'Compute, Data & African Infrastructure',
    description:
      'The unglamorous foundation: compute access, local datasets and the infrastructure Africa needs to build at scale.',
    color: 'from-volt-deep to-signal',
  },
];

export function Panels() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="agenda" className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-volt/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-signal/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="panel_discussions"
          title="Deep Dive Sessions"
          subtitle="No fluff panels. Each session pulls apart a real question facing builders, businesses and policymakers in the AI era. Full agenda coming soon."
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {panels.map((panel) => (
            <div
              key={panel.title}
              className="glass-card-white rounded-2xl p-8 group hover:shadow-glow-volt transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${panel.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <panel.icon className="w-8 h-8 text-white" />
                </div>

                <div>
                  <h3 className="font-satoshi font-bold text-xl text-white mb-3 group-hover:text-purple-light transition-colors">
                    {panel.title}
                  </h3>
                  <p className="text-mist leading-relaxed">{panel.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
