// components/Hero.jsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen flex-col justify-center gap-6 px-8">
      {/* သင့် အကောင်းဆုံး Cloudinary poster ကို အနောက်ခံ image အဖြစ် သုံး */}
      <div className="absolute inset-0 -z-10 opacity-15 dark:opacity-10">
        <Image
          src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778795825/cloud-icon-poster-1_2_opl7sy.png"
          alt="Cloud background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="space-y-2 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          မိုးကျော်အောင်{" "}
          <span className="text-teal-600 dark:text-teal-400">· Moe Kyaw Aung</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Senior Android Developer
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {["Burmese 🇲🇲", "English 🌐", "Kotlin ☕"].map((item) => (
          <span
            key={item}
            className="rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-800 dark:bg-teal-900 dark:text-teal-200"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 text-sm">
        <span className="text-gray-600 dark:text-gray-400">Mobile</span>:
        <span className="font-mono text-teal-600 dark:text-teal-400">
          Kotlin · Jetpack Compose · MVVM · Clean Arch
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="text-teal-600 dark:text-teal-400">
          Currently Building:{" "}
          <b>MoekyawTranslator — AI Translation App</b>
        </span>
      </div>

      <div className="flex flex-wrap gap-2 text-sm">
        <span className="text-teal-600 dark:text-teal-400">
          Certifications: 40+ · Google Developers Launchpad
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="https://gravatar.com/moekyawaung13721"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-teal-600 px-4 py-2 text-sm text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400"
        >
          Gravatar Profile
        </a>
        <a
          href="https://lovable.dev/invite/ZVLZ2S5"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          Lovable WPA
        </a>
        <a
          href="https://moekyawaung.lovable.app"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-gray-700 px-4 py-2 text-sm text-white hover:bg-gray-800"
        >
          moekyawaung.lovable.app
        </a>
      </div>
    </section>
  );
}
