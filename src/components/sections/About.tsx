import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-12 lg:py-16 section-dark relative overflow-hidden">
      <div className="absolute inset-0 network-bg" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-volt/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-signal/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/x8DxbBTnbgs?autoplay=1&mute=1&loop=1&playlist=x8DxbBTnbgs&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1"
              title="Africa Stablecoin Network Event Highlights"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>

          <div>
            <span className="eyebrow-mono mb-6 block">about_the_summit</span>

            <h2 className="font-satoshi font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
              BEYOND THE HYPE.
              <br />
              <span className="gradient-text-green">BEYOND THE DEMOS.</span>
              <br />
              AFRICA BUILDS WITH AI.
            </h2>

            <div className="space-y-2.5 text-text-light text-sm md:text-base lg:text-lg leading-relaxed mb-5">
              <p>
                AI is the biggest platform shift since the internet, and Africa will not watch it
                happen from the sidelines.
              </p>
              <p>
                Build AI Summit brings together the people actually doing the work: startups
                shipping AI products, engineers training and deploying models, companies rolling
                out AI across their operations, regulators writing the rules, investors backing
                the bets, and the curious minds who want in. One room. One day. Real
                conversations, real connections, real deals.
              </p>
              <p>
                If you are building with AI, deploying AI, funding AI, regulating AI, or simply
                refuse to be left behind by AI, this is your room.
              </p>
              <p className="text-white font-semibold text-lg md:text-xl">
                This is not just an event; it is an experience!
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 gold-border-left relative">
              <Quote className="absolute -top-3 -left-3 w-7 h-7 text-signal" />
              <blockquote className="text-white italic text-sm md:text-base lg:text-lg leading-relaxed">
                "Africa will be blitzscaled on three foundational pillars: Faith, Technology and
                Leadership. And chiefly in the tech segment is AI!"
              </blockquote>
              <div className="mt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-volt to-signal flex items-center justify-center">
                  <span className="font-bold text-void font-satoshi">NL</span>
                </div>
                <div>
                  <cite className="text-signal font-bold not-italic block">Nathaniel Luz</cite>
                  <span className="text-mist text-sm">Convener, Build AI Summit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
