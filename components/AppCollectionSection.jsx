// components/AppCollectionSection.jsx
import AppCard from "./AppCard";

const APPS = [
  {
    title: "Social Dashboard",
    icon: "📱",
    repo: "https://github.com/moekyawaung-tech/social-dashboard",
    description:
      "Real‑time analytics dashboard for social media feeds and metrics.",
  },
  {
    title: "PWA App",
    icon: "📱",
    repo: "https://github.com/moekyawaung-tech/pwa-app",
    description:
      "Progressive Web App with offline support and push notifications.",
  },
  {
    title: "Game Collection",
    icon: "🎮",
    repo: "https://github.com/moekyawaung-tech/game-collection",
    description:
      "A collection of mobile‑style games built with modern UI/UX standards.",
  },
  {
    title: "Video Player",
    icon: "🎯",
    repo: "https://github.com/moekyawaung-tech/video-player",
    description:
      "Custom media player with playlist, full‑screen, and controls.",
  },
  {
    title: "POS Ultimate Series",
    icon: "🛒",
    repo: "https://github.com/moekyawaung-tech/POS-Ultimate-Version",
    description:
      "Multi‑module, feature‑rich POS suite for Android and web.",
  },
  {
    title: "Weather App",
    icon: "🌤️",
    repo: "https://github.com/moekyawaung-tech/Weather-app",
    description:
      "Weather forecast UI with real‑time API and location support.",
  },
  {
    title: "Todo App",
    icon: "📝",
    repo: "https://github.com/moekyawaung-tech/javascript-todo",
    description:
      "Flexible task manager with local storage and filtering.",
  },
];

export default function AppCollectionSection() {
  return (
    <section id="app-collection" className="py-16 px-8">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
        📱 16 App Collection (Senior Level)
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {APPS.map((app, idx) => (
          <AppCard key={idx} {...app} />
        ))}
      </div>
    </section>
  );
}
