// components/AboutSection.jsx
export default function AboutSection() {
  const focus = {
    Mobile: "Kotlin · Jetpack Compose · MVVM · Clean Arch",
    Backend: "Firebase · REST APIs · Python",
    Security: "Ethical Hacking · Cybersecurity",
    "AI / ML": "Claude API · TFLite · On‑Device ML",
  };

  return (
    <section id="about" className="py-20 px-8">
      <h2 className="mb-10 text-2xl font-bold text-gray-900 dark:text-white">
        About
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            မိုးကျော်အောင် အ‌နေနဲ့ အ‌‌တွေးအခေါ် သန့်ပြီး လက်တွေ့အသုံးချနိုင်တဲ့ mobile နဲ့ web အက်ပ်တွေကို တည်ဆောက်ဖို့ အဓိက အာရုံစိုက်နေတဲ့ Senior Android Developer တစ်ယောက်ပါ။ ကိုယ်ရေးကိုယ်တာ သင်တန်း၊ အ‌‌တွေးအခေါ် တွေ‌နဲ့ လက်တွေ့ ပရိုဂျက့်တွေကို တစ်ပြိုင်နက် တည်ဆောက်ပြီး ဉာဏ်ပိုင်း ဖွံ့ဖြိုး တိုးတက်ဖို့ အမြဲတမ်း အလုပ်လုပ်နေသူပါ။
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            မိုးကျော်အောင်ရဲ့ အဓိက ပညာရပ်တွေမှာ Android development (Kotlin, Jetpack Compose, MVVM, Clean Architecture), Firebase backend, RESTful APIs တို့ ပါဝင်ပါတယ်။ အချိန်တိုအတွင်း အကောင်းဆုံး အဖြေရှာဖို့ စဉ်းစားတတ်ပြီး အလုပ်တွေကို လျင်မြန်စွာ အကောင်အထည်ဖော်နိုင်ပါတယ်။
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            ကျွန်တော် ကုဒ်ကို ယဉ်ကျေးမှုနဲ့ တွေ့ဆုံပေးပါတယ်၊ ရည်မှန်းချက်နဲ့ တည်ဆောက်ဖို့ ကျွန်တော် အမြဲတမ်း အလုပ်လုပ်ပါတယ်။
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          {Object.entries(focus).map(([label, value]) => (
            <div key={label} className="rounded-md bg-gray-100 p-3 dark:bg-gray-800">
              <div className="mb-1 font-medium text-gray-900 dark:text-gray-100">
                {label}
              </div>
              <div className="text-gray-700 dark:text-gray-300">{value}</div>
            </div>
          ))}
        </div>

        <div className="mt-2 text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Currently building:</strong> MoekyawTranslator — AI Translation App
          </p>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            <strong>Certifications:</strong> 40+ · Google Developers Launchpad
          </p>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            <strong>Status:</strong> Open to Work 🟢
          </p>
        </div>

        <div>
          <ul className="space-y-2 text-sm text-teal-700 dark:text-teal-400">
            <li>• Burmese 🇲🇲</li>
            <li>• English 🌐</li>
            <li>• Kotlin ☕</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
