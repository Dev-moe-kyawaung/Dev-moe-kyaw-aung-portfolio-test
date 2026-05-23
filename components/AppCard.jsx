// components/AppCard.jsx
export default function AppCard({ title, icon, repo, description }) {
  return (
    <div className="group rounded-lg border border-gray-200 p-4 transition hover:shadow-md hover:border-teal-300 dark:border-gray-700 dark:hover:border-teal-500 dark:hover:shadow-teal-900/20">
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          {title}
        </span>
      </div>
      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
        {description}
      </p>
      <a
        href={repo}
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-block text-xs text-teal-600 hover:underline dark:text-teal-400"
      >
        View repo →
      </a>
    </div>
  );
}
