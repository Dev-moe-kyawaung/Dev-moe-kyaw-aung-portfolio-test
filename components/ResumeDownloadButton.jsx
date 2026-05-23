// components/ResumeDownloadButton.jsx
export default function ResumeDownloadButton() {
  return (
    <a
      href="/cv.pdf" // သင့် local PDF ဖိုင် လမ်းညွှန်း (သို့) သင့် lovable/Drive လိပ်စာ
      download="Moe_Kyaw_Aung_CV.pdf"
      className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-sm text-white shadow-md hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400"
    >
      📄 Download CV
    </a>
  );
}
