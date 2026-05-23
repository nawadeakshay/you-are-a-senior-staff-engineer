"use client";

import { create } from "zustand";

type AppState = {
  commandMenuOpen: boolean;
  immersiveMode: boolean;
  setCommandMenuOpen: (open: boolean) => void;
  setImmersiveMode: (enabled: boolean) => void;
};

export const useAppStore = create<AppState>((set) => ({
  commandMenuOpen: false,
  immersiveMode: false,
  setCommandMenuOpen: (commandMenuOpen) => set({ commandMenuOpen }),
  setImmersiveMode: (immersiveMode) => set({ immersiveMode })
}));
