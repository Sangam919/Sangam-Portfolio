import { useCallback, useRef, useState, useEffect } from 'react';

// All sounds generated via Web Audio API — no external files needed
const SOUNDS = {
  hover: { freq: 4200, duration: 0.02, type: 'sine', gain: 0.04 },
  click: { freq: 800, duration: 0.03, type: 'square', gain: 0.06 },
  section: { freq: 200, duration: 0.15, type: 'sine', gain: 0.03, sweep: 400 },
  terminalOpen: { freq: 300, duration: 0.1, type: 'sawtooth', gain: 0.05, sweep: 800 },
  terminalType: { freq: 6000, duration: 0.015, type: 'square', gain: 0.02 },
  success: { freq: 523, duration: 0.2, type: 'sine', gain: 0.06, harmonics: [659, 784] },
};

export default function useSoundEngine() {
  const [muted, setMuted] = useState(true); // Muted by default
  const ctxRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) setMuted(true);
  }, []);

  const getContext = useCallback(() => {
    if (!ctxRef.current) {
      try {
        ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      } catch {
        return null;
      }
    }
    return ctxRef.current;
  }, []);

  const play = useCallback((soundName) => {
    if (muted) return;
    const ctx = getContext();
    if (!ctx) return;

    const sound = SOUNDS[soundName];
    if (!sound) return;

    try {
      // Resume context if suspended (browser autoplay policy)
      if (ctx.state === 'suspended') ctx.resume();

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = sound.type;
      osc.frequency.setValueAtTime(sound.freq, now);

      if (sound.sweep) {
        osc.frequency.exponentialRampToValueAtTime(sound.sweep, now + sound.duration);
      }

      gain.gain.setValueAtTime(sound.gain, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + sound.duration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + sound.duration + 0.01);

      // Play harmonics for success sound
      if (sound.harmonics) {
        sound.harmonics.forEach((freq, i) => {
          const h = ctx.createOscillator();
          const hg = ctx.createGain();
          h.type = 'sine';
          h.frequency.setValueAtTime(freq, now + (i + 1) * 0.08);
          hg.gain.setValueAtTime(sound.gain * 0.7, now + (i + 1) * 0.08);
          hg.gain.exponentialRampToValueAtTime(0.001, now + (i + 1) * 0.08 + sound.duration);
          h.connect(hg);
          hg.connect(ctx.destination);
          h.start(now + (i + 1) * 0.08);
          h.stop(now + (i + 1) * 0.08 + sound.duration + 0.01);
        });
      }
    } catch {
      // Silently fail — sound is non-critical
    }
  }, [muted, getContext]);

  const toggle = useCallback(() => {
    setMuted(m => !m);
    // Play a tiny click when unmuting to confirm it works
  }, []);

  return { play, muted, toggle };
}
