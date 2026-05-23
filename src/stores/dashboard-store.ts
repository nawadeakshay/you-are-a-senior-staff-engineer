"use client";

import { create } from "zustand";

type DashboardState = {
  sidebarOpen: boolean;
  courseQuery: string;
  courseCategory: string;
  setSidebarOpen: (open: boolean) => void;
  setCourseQuery: (query: string) => void;
  setCourseCategory: (category: string) => void;
};

export const useDashboardStore = create<DashboardState>((set) => ({
  sidebarOpen: false,
  courseQuery: "",
  courseCategory: "All",
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
  setCourseQuery: (courseQuery) => set({ courseQuery }),
  setCourseCategory: (courseCategory) => set({ courseCategory })
}));
