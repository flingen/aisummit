import { ReactNode, useEffect } from 'react';
import {
  LUMA_EVENT_ID,
  LUMA_EVENT_URL,
  LUMA_CHECKOUT_SCRIPT_ID,
  LUMA_CHECKOUT_SCRIPT_SRC,
} from '../../lib/event';

// Injects the Luma checkout script exactly once, no matter how many
// RegisterButtons are on the page. Luma's script uses delegated click
// handling, so buttons rendered by React after the script loads still work.
function ensureLumaScript() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(LUMA_CHECKOUT_SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = LUMA_CHECKOUT_SCRIPT_ID;
  script.src = LUMA_CHECKOUT_SCRIPT_SRC;
  script.async = true;
  document.body.appendChild(script);
}

interface RegisterButtonProps {
  className?: string;
  children: ReactNode;
}

/**
 * Luma "Embed as Button" registration link.
 *
 * The checkout overlay is driven by the data-luma-action and
 * data-luma-event-id attributes plus the embed script. We deliberately
 * leave off Luma's `luma-checkout--button` class: that class only
 * applies Luma's pink default styling, which would fight the site's
 * own button design. The overlay behaviour is identical without it.
 *
 * If the script is blocked or fails to load, the anchor still works
 * as a normal link straight to the Luma event page — nobody ever
 * hits a dead button.
 */
export function RegisterButton({ className, children }: RegisterButtonProps) {
  useEffect(() => {
    ensureLumaScript();
  }, []);

  return (
    <a
      href={LUMA_EVENT_URL}
      className={className}
      data-luma-action="checkout"
      data-luma-event-id={LUMA_EVENT_ID}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
