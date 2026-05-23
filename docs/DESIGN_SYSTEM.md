# Design System

## Visual Direction

ekguitarist uses a dark cinematic system with neon cyan, violet, rose, and lime accents. The UI should feel premium and immersive while staying readable for repeated learning workflows.

## Foundations

- Typography is wired through CSS variables in Tailwind.
- Color tokens live in `src/app/globals.css`.
- Animation and glass tokens live in `src/styles/design-tokens.ts`.
- shadcn-compatible components live in `src/components/ui`.

## UI Rules

- Dense product surfaces should be calm and scannable.
- Use glass panels for focused controls, not entire pages.
- Keep cards for repeated entities or framed tools.
- Use motion to orient attention, not to decorate every state.
- Three.js scenes should be immersive and purposeful, especially for practice, fretboard, rhythm, and live-class experiences.

## Token Highlights

- `--neon-cyan`: primary learning energy
- `--neon-violet`: cinematic accent
- `--neon-rose`: warnings, recording, live states
- `--neon-lime`: mastery, streaks, success
- `.glass-panel`: shared glassmorphism utility
- `.cinematic-surface`: premium elevated surface
- `.text-display-hero`: homepage-scale typography
- `.shadow-neon-mix`: premium mixed neon elevation
- `src/components/motion`: reusable reveal and stagger primitives
