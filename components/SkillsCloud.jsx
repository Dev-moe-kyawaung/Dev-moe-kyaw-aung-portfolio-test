// components/SkillsCloud.jsx
export default function SkillsCloud() {
  const skills = [
    "Kotlin",
    "Jetpack Compose",
    "Android",
    "MVVM",
    "Clean Architecture",
    "Coroutines",
    "Flow",
    "Firebase",
    "REST APIs",
    "Retrofit",
    "Room",
    "Python",
    "Django/Flask",
    "JWT",
    "Linux",
    "Ethical Hacking",
    "Cybersecurity",
    "Git",
    "GitHub Actions",
    "VS Code",
    "Figma",
  ];

  return (
    <section id="skills" className="py-20 px-8">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
        Skills &amp; Technologies
      </h2>

      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="select-none rounded-full bg-teal-100 px-3 py-1.5 text-xs text-teal-800 dark:bg-teal-900 dark:text-teal-200"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* mobile အတွက် နောက်တစ်လိုင် တိုးချင်ရင် ဒါမို့ ရိုးရိုး နောက်တစ်လိုင် ထပ်ထည့် */}
      <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
        <span className="text-teal-600 dark:text-teal-400">• Full‑Stack</span>
        <span className="text-teal-600 dark:text-teal-400">• DevOps</span>
        <span className="text-teal-600 dark:text-teal-400">• AI/ML</span>
      </div>
    </section>
  );
}
