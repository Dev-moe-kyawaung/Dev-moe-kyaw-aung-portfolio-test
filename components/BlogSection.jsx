// components/BlogSection.jsx
import { useState, useEffect } from "react";

// အလုပ်လုပ်ဖို့ အတွက် MDX component ကို အောက်ကလို သုံးမယ်ဆို တော့ အကုန်လုံး အောက်ဆုံးမှာ သင့် `content/blog` ကနေ routes တွေ load လုပ်ပါ။
// ဒီဥပမာကို သင့် MDX ကို သုံးဖို့ “static site” လိုလို၊ dynamic လိုလို ကို လိုက်မှီပြင်နိုင်ပါတယ်။

const BLOGS = [
  {
    slug: "my-first-mdx-blog",
    title: "How I built my 16‑app portfolio with Kotlin & Next.js",
    description: "တစ်ပတ်လုံး တည်ဆောက်ထားတဲ့ ကိုယ်ပိုင် ပရိုဖိုင်လ် နဲ့ အက်ပ် ၁၆ ကို ပြန်လည်រှင်းပြခြင်း။",
    date: "May 23, 2026",
  },
  {
    slug: "pos-ultimate-max",
    title: "POS Ultimate Pro Max: from Android to Web",
    description: "POS အက်ပ်ကို Android ကနေ Web ကို ပိုင်းခွဲ တည်ဆောက်နည်း။",
    date: "Apr 15, 2026",
  },
  {
    slug: "gravatar-lovable",
    title: "Gravatar + Lovable: Link‑in‑bio strategy for developers",
    description: "Gravatar နဲ့ လိုက်ကား လင့်‑အိုင် လိုး ကို ပေါင်းစပ်သုံးနည်း။",
    date: "Mar 10, 2026",
  },
];

export default function BlogSection() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // သင့် MDX file တွေကို dynamic import လုပ်ဖို့ side‑effect အနေနဲ့ ရေးနိုင်ပါတယ်။
    // ဒီနေရာမှာ သင့် ကိုယ်ပိုင် logic ထည့်လိုက်ပါ။
  }, []);

  if (isLoading) {
    return (
      <section className="py-20 px-8">
        <h2 className="mb-10 text-2xl font-bold text-gray-900 dark:text-white">
          Blog
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Loading posts...
        </p>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 px-8">
      <h2 className="mb-10 text-2xl font-bold text-gray-900 dark:text-white">
        Blog
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {BLOGS.map((post) => (
          <article
            key={post.slug}
            className="rounded-md border border-gray-200 p-5 dark:border-gray-700"
          >
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              {post.title}
            </h3>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
              {post.description}
            </p>
            <div className="mt-2">
              <a
                href={`/blog/${post.slug}`}
                className="text-xs text-teal-600 hover:underline dark:text-teal-400"
              >
                Read more →
              </a>
            </div>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-500">
              {post.date}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
