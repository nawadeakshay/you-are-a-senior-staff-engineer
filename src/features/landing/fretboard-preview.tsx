"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const strings = ["E", "B", "G", "D", "A", "E"];
const frets = ["0", "1", "2", "3", "5", "7", "9", "12"];
const notes = ["E", "F#", "G", "A", "B", "C#", "D", "E"];

export function FretboardPreview() {
  const [active, setActive] = useState(4);

  return (
    <div className="glass-panel fret-glow overflow-hidden rounded-lg p-4 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Interactive fretboard</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
            Tap a note. Feel the neck light up.
          </h3>
        </div>
        <div className="hidden rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-sm text-neon-cyan sm:block">
          {notes[active]} minor mode
        </div>
      </div>

      <div className="relative overflow-x-auto pb-2">
        <div className="min-w-[720px] rounded-md border border-white/10 bg-slate-950/70 p-5">
          <div className="grid grid-cols-8 gap-2">
            {frets.map((fret, fretIndex) => (
              <div key={fret} className="text-center font-mono text-xs text-muted-foreground">
                {fretIndex === 0 ? "open" : fret}
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-3">
            {strings.map((stringName, stringIndex) => (
              <div key={`${stringName}-${stringIndex}`} className="grid grid-cols-8 gap-2">
                {frets.map((fret, fretIndex) => {
                  const noteIndex = (fretIndex + stringIndex) % notes.length;
                  const isActive = noteIndex === active;

                  return (
                    <button
                      key={`${stringName}-${fret}`}
                      type="button"
                      onMouseEnter={() => setActive(noteIndex)}
                      onFocus={() => setActive(noteIndex)}
                      className="neon-focus relative h-10 rounded-sm border border-white/10 bg-white/[0.04] transition-colors hover:border-primary/50"
                    >
                      <span className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
                      {isActive ? (
                        <motion.span
                          layoutId="active-note"
                          className="absolute left-1/2 top-1/2 grid size-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-neon-cyan"
                        >
                          {notes[noteIndex]}
                        </motion.span>
                      ) : (
                        <span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20" />
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
