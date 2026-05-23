// components/EducationSection.jsx
export default function EducationSection() {
  const categories = [
    {
      name: "Programming Languages",
      count: 13,
      badges: [
        "C Programming",
        "C++",
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "Kotlin",
      ],
    },
    {
      name: "Web Development",
      count: 13,
      badges: [
        "HTML & CSS",
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "REST APIs",
      ],
    },
    {
      name: "Mobile & App Dev",
      count: 7,
      badges: [
        "Android Development",
        "Kotlin",
        "Jetpack Compose",
        "Firebase",
      ],
    },
    {
      name: "Databases",
      count: 6,
      badges: ["MySQL", "SQL", "MongoDB", "Firestore"],
    },
    {
      name: "AI & Data Science",
      count: 11,
      badges: [
        "Machine Learning",
        "TensorFlow",
        "TFLite",
        "Claude API",
        "Data Science",
      ],
    },
    {
      name: "Security & DevOps",
      count: 10,
      badges: [
        "Ethical Hacking",
        "Linux",
        "GitHub Actions",
        "CI/CD",
        "DevOps",
      ],
    },
    {
      name: "Blockchain",
      count: 4,
      badges: ["Blockchain Basics", "Smart Contracts"],
    },
    {
      name: "Software Engineering",
      count: 7,
      badges: ["Clean Architecture", "MVVM", "OOP", "SOLID"],
    },
    {
      name: "Marketing & Business",
      count: 11,
      badges: ["Digital Marketing", "Product Management", "UX Design"],
    },
  ];

  return (
    <section id="education" className="py-20 px-8">
      <h2 className="mb-10 text-2xl font-bold text-gray-900 dark:text-white">
        Education & Certifications
      </h2>

      <div className="space-y-8">
        {categories.map((cat, idx) => (
          <div key={idx}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {cat.name}
              </span>
              <span className="text-xs text-teal-600 dark:text-teal-400">
                {cat.count} courses
              </span>
            </div>

            <div className="flex flex-wrap gap-1">
              {cat.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-teal-100 px-2 py-1 text-xs text-teal-800 dark:bg-teal-900 dark:text-teal-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Programming Hub ကနေ အကြောင်းအရာ ၉ မျိုးကို ဖုံးလွှမ်းထားပြီး အကြောင်းအရာ ၈၂ ကျော် အောင်မြင်စွာ ပြီးမြောက်ထားပါသည်။
        </p>

        <a
          href="https://www.programminghub.io"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-sm text-teal-600 hover:underline dark:text-teal-400"
        >
          View all certificates →
        </a>
      </div>
    </section>
  );
}
