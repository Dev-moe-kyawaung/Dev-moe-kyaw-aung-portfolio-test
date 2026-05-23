// components/ContactSection.jsx
export default function ContactSection() {
  const contacts = [
    {
      label: "Email",
      value: "moekyawaung@programmer.net",
      icon: "📧",
    },
    {
      label: "GitHub",
      value: "Dev-moe-kyawaung",
      icon: "📱",
      href: "https://github.com/Dev-moe-kyawaung",
    },
    {
      label: "LinkedIn",
      value: "Moe Kyaw Aung",
      icon: "💼",
      href: "https://www.linkedin.com/in/moe-kyaw-aung-2653093a1",
    },
    {
      label: "Gravatar",
      value: "moekyawaung13721",
      icon: "🌐",
      href: "https://gravatar.com/moekyawaung13721",
    },
    {
      label: "Phone",
      value: "+95 9 889 000 889 / +95 9 666 000 050",
      icon: "📞",
    },
  ];

  return (
    <section id="contact" className="py-20 px-8">
      <h2 className="mb-10 text-2xl font-bold text-gray-900 dark:text-white">
        Contact Me
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contacts.map((item) => (
          <div
            key={item.label}
            className="rounded-md border border-gray-200 p-4 dark:border-gray-700"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {item.label}
              </span>
            </div>

            <div className="mt-2">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-teal-600 hover:underline dark:text-teal-400"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {item.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          အလုပ်တွေ၊ collaboration တွေ၊ သင်တန်းတွေအတွက် ဘာမဆို ဆက်သွယ်လို့ ရပါတယ်။
        </p>
      </div>
    </section>
  );
}
