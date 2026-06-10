interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean; // kept for API compatibility; the whole site is dark now
}

export function SectionHeading({ eyebrow, title, subtitle, centered = true }: SectionHeadingProps) {
  const alignment = centered ? 'text-center' : 'text-left';

  return (
    <div className={`mb-12 ${alignment}`}>
      {eyebrow && <span className="eyebrow-mono mb-4 block">{eyebrow}</span>}
      <h2 className="font-satoshi font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-mist max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
