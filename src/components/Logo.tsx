export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 21V7" />
        <path d="M6 7c4-1 7 1 11-1-1 3 0 5-1 7-3 1-6-1-10 0" />
        <path d="M13 3v3" />
      </svg>
      <span className="text-2xl font-semibold tracking-tight">haystack</span>
    </div>
  );
}
