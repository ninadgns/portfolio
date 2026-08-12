'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';

type Props = {
  summary: string;
  details?: string[];
  /** Describes what expands, for screen readers: "more about Hopper" */
  label: string;
};

/**
 * Shows a short summary with the full detail behind a click-to-expand toggle.
 * Replaces the old hover-only reveal, which was unreachable on touch and by
 * keyboard, and which resized the grid row whenever the pointer crossed a card.
 */
export default function DetailsDisclosure({ summary, details, label }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const summaryText = (
    <p className="text-sm" style={{ color: 'var(--muted)' }}>
      {summary}
    </p>
  );

  if (!details?.length) return summaryText;

  return (
    <div>
      {summaryText}

      {/* Kept mounted so aria-controls always resolves; height animates to 0 when closed. */}
      <motion.div
        id={panelId}
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        style={{ overflow: 'hidden' }}
        aria-hidden={!open}
      >
        <ul className="space-y-2 text-sm pt-3" style={{ color: 'var(--muted)' }}>
          {details.map((detail) => (
            <li key={detail} className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0" style={{ background: 'var(--accent)' }} />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="disclosure-toggle"
      >
        {open ? 'Show less' : 'Read more'}
        <span className="sr-only"> about {label}</span>
        <ChevronDown size={16} aria-hidden="true" />
      </button>
    </div>
  );
}
