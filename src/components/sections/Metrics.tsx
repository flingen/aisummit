import { Users, Building2, Mic2, Store } from 'lucide-react';
import { useCountUp } from '../../hooks/useCountUp';

const metrics = [
  { value: 750, suffix: '+', label: 'Attendees', icon: Users, color: 'from-volt to-purple-light' },
  { value: 150, suffix: '+', label: 'Companies', icon: Building2, color: 'from-royal-blue to-electric-blue' },
  { value: 25, suffix: '+', label: 'Speakers', icon: Mic2, color: 'from-signal to-signal-deep' },
  { value: 40, suffix: '+', label: 'Exhibitions', icon: Store, color: 'from-volt-deep to-volt' },
];

function MetricCard({ value, suffix, label, icon: Icon, color }: typeof metrics[0]) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="metric-card p-6 text-center group">
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="font-satoshi font-extrabold text-4xl md:text-5xl text-white mb-2">
        {count}
        <span className="gradient-text-green">{suffix}</span>
      </div>
      <div className="text-mist text-sm font-mono-label">{label}</div>
    </div>
  );
}

export function Metrics() {
  return (
    <section className="py-20 lg:py-28 section-light-gradient relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-volt/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-signal/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="eyebrow-mono mb-6 block">the_numbers_for_build_ai_summit_1.0</span>
          <h2 className="font-satoshi font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            What Happens When You Put an{' '}
            <span className="gradient-text-green">Ecosystem in One Room</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
