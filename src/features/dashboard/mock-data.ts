import {
  Award,
  BookOpen,
  Flame,
  Guitar,
  Headphones,
  Mic2,
  Radio,
  Sparkles,
  Trophy,
  Users,
  Zap
} from "lucide-react";

export const student = {
  name: "Aarav",
  handle: "@aaravplays",
  level: 12,
  xp: 8420,
  nextLevelXp: 10000,
  streakDays: 18,
  weeklyPracticeMinutes: 246,
  goalMinutes: 300,
  avatarInitials: "AM",
  message: "Your rhythm is getting cleaner. Today is perfect for the Bollywood groove quest."
};

export const continueLessons = [
  {
    id: "lesson-1",
    title: "Kesariya-style chord movement",
    course: "Bollywood Rhythm Reactor",
    progress: 72,
    duration: "18 min",
    tone: "from-cyan-400 to-violet-500"
  },
  {
    id: "lesson-2",
    title: "Fingerstyle pulse patterns",
    course: "Acoustic Moodscapes",
    progress: 44,
    duration: "26 min",
    tone: "from-lime-300 to-cyan-400"
  },
  {
    id: "lesson-3",
    title: "Pentatonic bends with feel",
    course: "Western Lead Orbit",
    progress: 31,
    duration: "22 min",
    tone: "from-violet-300 to-rose-400"
  },
  {
    id: "lesson-4",
    title: "Stage-ready transitions",
    course: "Performance Systems",
    progress: 58,
    duration: "14 min",
    tone: "from-rose-300 to-orange-200"
  }
];

export const recommendedCourses = [
  {
    id: "course-1",
    title: "Bollywood Rhythm Reactor",
    category: "Bollywood",
    level: "Beginner to Pro",
    lessons: 42,
    progress: 64,
    rating: "4.9",
    tone: "from-cyan-400 via-sky-500 to-violet-500"
  },
  {
    id: "course-2",
    title: "Acoustic Moodscapes",
    category: "Fingerstyle",
    level: "Intermediate",
    lessons: 36,
    progress: 22,
    rating: "4.8",
    tone: "from-lime-300 via-emerald-400 to-cyan-400"
  },
  {
    id: "course-3",
    title: "Western Lead Orbit",
    category: "Lead Guitar",
    level: "Intermediate",
    lessons: 31,
    progress: 0,
    rating: "4.9",
    tone: "from-violet-300 via-fuchsia-400 to-rose-400"
  },
  {
    id: "course-4",
    title: "Campfire Chords Cinematic",
    category: "Acoustic",
    level: "Beginner",
    lessons: 24,
    progress: 12,
    rating: "4.7",
    tone: "from-amber-200 via-orange-300 to-rose-400"
  },
  {
    id: "course-5",
    title: "Neo Soul Guitar Lab",
    category: "Western",
    level: "Advanced",
    lessons: 28,
    progress: 0,
    rating: "4.8",
    tone: "from-indigo-300 via-cyan-300 to-lime-300"
  }
];

export const practiceGoals = [
  { label: "Warmups", value: 100, icon: Zap },
  { label: "Chord clarity", value: 78, icon: Guitar },
  { label: "Rhythm lock", value: 62, icon: Headphones },
  { label: "Song practice", value: 46, icon: Mic2 }
];

export const achievements = [
  { title: "18-day streak", detail: "Consistency fire", icon: Flame, unlocked: true },
  { title: "Chord Pilot", detail: "100 clean changes", icon: Award, unlocked: true },
  { title: "Bollywood Quest", detail: "3 songs learned", icon: Sparkles, unlocked: true },
  { title: "Stage Mode", detail: "Unlock at level 15", icon: Trophy, unlocked: false }
];

export const liveClasses = [
  {
    title: "Live Bollywood Strumming Clinic",
    instructor: "Eshan K.",
    startsIn: "02h 18m",
    seats: 128,
    icon: Radio
  },
  {
    title: "Fingerstyle Feedback Room",
    instructor: "Mira S.",
    startsIn: "Tomorrow",
    seats: 64,
    icon: Users
  }
];

export const activityFeed = [
  { event: "Completed", subject: "Open chord transitions", time: "12 min ago", icon: BookOpen },
  { event: "Unlocked", subject: "Chord Pilot badge", time: "1 hr ago", icon: Award },
  { event: "Posted", subject: "a practice clip in Community", time: "3 hrs ago", icon: Users },
  { event: "Practiced", subject: "42 minutes today", time: "Today", icon: Flame }
];

export const categories = ["All", "Bollywood", "Acoustic", "Fingerstyle", "Lead Guitar", "Western"];

export const streakHistory = [72, 84, 42, 92, 68, 100, 88, 54, 96, 78, 64, 91, 100, 82];
