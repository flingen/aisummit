import { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Ticket } from 'lucide-react';

const TICKET_URL = 'https://tix.africa/discover/nigeria-ai-summit';
const SPONSORSHIP_DECK_URL =
  'https://drive.google.com/drive/folders/1piAb3McIIhbNl3cmNMs-CDDWDxQ4lDAy?usp=sharing';
const BOOK_A_CALL_URL = 'https://calendly.com/nigeriastablecoinsummit/nss';

// Each slide ships in two WebP widths (800w mobile, 1600w desktop) plus a JPG fallback.
// Photos are from previous Africa Stablecoin Network events (same family of events).
const SLIDES = [
  { base: '/nss1-01', alt: 'Africa Stablecoin Network event main stage' },
  { base: '/nss1-02', alt: 'Africa Stablecoin Network event audience' },
  { base: '/nss1-03', alt: 'Africa Stablecoin Network event panel discussion' },
  { base: '/nss1-04', alt: 'Africa Stablecoin Network event networking' },
  { base: '/nss1-05', alt: 'Africa Stablecoin Network event exhibition floor' },
];

const SLIDE_INTERVAL_MS = 5000;

// Typed words cycling after "BUILD" — the page's signature moment.
const TYPED_WORDS = ['INTELLIGENCE', 'PRODUCTS', 'CAREERS', 'COMPANIES', 'AFRICA'];

function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let delay = deleting ? 45 : 95;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === '') delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadRest, setLoadRest] = useState(false);
  const typed = useTypewriter(TYPED_WORDS);

  useEffect(() => {
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    if (idle) {
      idle(() => setLoadRest(true));
      return;
    }
    const t = setTimeout(() => setLoadRest(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loadRest) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [loadRest]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-void"
    >
      {/* Slideshow background */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, index) => {
          const isFirst = index === 0;
          if (!isFirst && !loadRest) return null;

          return (
            <picture
              key={slide.base}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: index === currentSlide ? 1 : 0 }}
            >
              <source type="image/webp" media="(max-width: 768px)" srcSet={`${slide.base}-800.webp`} />
              <source type="image/webp" srcSet={`${slide.base}-1600.webp`} />
              <img
                src={`${slide.base}-1600.jpg`}
                alt={slide.alt}
                width={1600}
                height={900}
                fetchPriority={isFirst ? 'high' : 'low'}
                loading={isFirst ? 'eager' : 'lazy'}
                decoding={isFirst ? 'sync' : 'async'}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </picture>
          );
        })}
      </div>

      {/* Violet/cyan wash + grid over the photos */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-void/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-44 sm:pb-40">
        <p className="font-mono-label text-signal text-xs sm:text-sm mb-6">
          [ lagos · one day · one room · the future of ai in africa ]
        </p>

        <h1 className="font-satoshi font-bold text-white leading-none">
          <span className="block text-5xl sm:text-7xl lg:text-8xl tracking-tight">
            BUILD <span className="gradient-text-green">AI</span> SUMMIT
          </span>
          <span className="mt-4 block font-mono-label text-lg sm:text-2xl lg:text-3xl text-text-light font-normal">
            <span className="text-volt">&gt;</span> build_
            <span className="text-signal">{typed}</span>
            <span className="inline-block w-[0.6em] h-[1.1em] align-middle bg-signal animate-blink ml-1" aria-hidden />
          </span>
        </h1>

        <p className="mt-8 text-text-light text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          Africa's builders, founders, regulators and researchers in one room, shaping what AI
          becomes on this continent. Not another talk shop. A build day.
        </p>

        {/* Event details */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          <div className="glass-card flex items-center gap-3 px-5 py-3 rounded-xl">
            <Calendar className="w-5 h-5 text-volt" />
            <div className="text-left">
              <span className="block text-white font-bold text-sm sm:text-base">Thursday, 10th September</span>
              <span className="text-mist text-xs sm:text-sm font-mono-label">2026</span>
            </div>
          </div>
          <div className="glass-card flex items-center gap-3 px-5 py-3 rounded-xl">
            <Clock className="w-5 h-5 text-signal" />
            <div className="text-left">
              <span className="block text-white font-bold text-sm sm:text-base">8:00 AM</span>
              <span className="text-mist text-xs sm:text-sm font-mono-label">WAT</span>
            </div>
          </div>
          <div className="glass-card flex items-center gap-3 px-5 py-3 rounded-xl">
            <MapPin className="w-5 h-5 text-volt" />
            <div className="text-left">
              <span className="block text-white font-bold text-sm sm:text-base">The Zone, Gbagada</span>
              <span className="text-mist text-xs sm:text-sm font-mono-label">Lagos</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-lg inline-flex items-center justify-center gap-2"
          >
            <Ticket className="w-5 h-5" />
            Get Your Ticket
          </a>
          <a
            href={SPONSORSHIP_DECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-10 py-4 text-lg inline-flex items-center justify-center gap-2 font-bold"
          >
            Sponsorship Deck
          </a>
          <a
            href={BOOK_A_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card text-white px-10 py-4 text-lg inline-flex items-center justify-center gap-2 font-bold rounded-[10px] transition-all hover:border-volt/60 hover:shadow-glow-volt"
          >
            Book a Call
          </a>
        </div>
      </div>

      {/* Caption + powered-by strip pinned under the photo slider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 glass-card-strong border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-center text-mist text-xs sm:text-sm font-mono-label mb-2">
            [ photos: africa stablecoin network events ] · Build AI Summit is the newest stage in the family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5">
            <span className="text-text-light text-sm sm:text-base tracking-wide font-semibold">Powered by</span>
            <div className="flex items-center gap-4">
              <a
                href="https://afristablecoin.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src="/asn_1-removebg-preview-256.webp"
                  alt="Africa Stablecoin Network"
                  width={256}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="h-10 sm:h-12 w-auto"
                />
              </a>
              <span className="text-faint text-2xl font-light">×</span>
              <a
                href="https://www.linkedin.com/in/nathanielluz"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src="/nl_wordmark-05-256.webp"
                  alt="Nathaniel Luz"
                  width={256}
                  height={72}
                  loading="lazy"
                  decoding="async"
                  className="h-8 sm:h-9 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
