type CountryCode = "DE" | "US" | "NL" | "GB" | "FR" | "IN" | "IT";

const flags: Record<
  CountryCode,
  { name: string; viewBox: string; render: () => React.ReactNode }
> = {
  DE: {
    name: "Germany",
    viewBox: "0 0 24 18",
    render: () => (
      <>
        <rect y="0" width="24" height="6" fill="#000" />
        <rect y="6" width="24" height="6" fill="#DD0000" />
        <rect y="12" width="24" height="6" fill="#FFCE00" />
      </>
    ),
  },
  US: {
    name: "United States",
    viewBox: "0 0 24 18",
    render: () => (
      <>
        <rect width="24" height="18" fill="#fff" />
        {[0, 2, 4, 6, 8, 10, 12].map((i) => (
          <rect key={i} y={i} width="24" height="1" fill="#B22234" />
        ))}
        <rect width="10" height="9" fill="#3C3B6E" />
        <g fill="#fff">
          {[0, 2, 4].map((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={1 + col * 2}
                cy={1 + row * 2}
                r="0.5"
              />
            ))
          )}
        </g>
      </>
    ),
  },
  NL: {
    name: "Netherlands",
    viewBox: "0 0 24 18",
    render: () => (
      <>
        <rect y="0" width="24" height="6" fill="#AE1C28" />
        <rect y="6" width="24" height="6" fill="#fff" />
        <rect y="12" width="24" height="6" fill="#21468B" />
      </>
    ),
  },
  GB: {
    name: "United Kingdom",
    viewBox: "0 0 24 18",
    render: () => (
      <>
        <rect width="24" height="18" fill="#012169" />
        <path d="M0 0 L24 18 M24 0 L0 18" stroke="#fff" strokeWidth="2" />
        <path d="M12 0 V18 M0 9 H24" stroke="#fff" strokeWidth="3" />
        <path d="M12 0 V18 M0 9 H24" stroke="#C8102E" strokeWidth="2" />
        <path d="M0 0 L24 18 M24 0 L0 18" stroke="#C8102E" strokeWidth="1" />
      </>
    ),
  },
  FR: {
    name: "France",
    viewBox: "0 0 24 18",
    render: () => (
      <>
        <rect x="0" width="8" height="18" fill="#0055A4" />
        <rect x="8" width="8" height="18" fill="#fff" />
        <rect x="16" width="8" height="18" fill="#EF4135" />
      </>
    ),
  },
  IN: {
    name: "India",
    viewBox: "0 0 24 18",
    render: () => (
      <>
        <rect y="0" width="24" height="6" fill="#FF9932" />
        <rect y="6" width="24" height="6" fill="#fff" />
        <rect y="12" width="24" height="6" fill="#138808" />
        <circle cx="12" cy="9" r="2" fill="#000080" />
        <circle cx="12" cy="9" r="1.5" fill="none" stroke="#000080" strokeWidth="0.2" />
      </>
    ),
  },
  IT: {
    name: "Italy",
    viewBox: "0 0 24 18",
    render: () => (
      <>
        <rect x="0" width="8" height="18" fill="#009246" />
        <rect x="8" width="8" height="18" fill="#fff" />
        <rect x="16" width="8" height="18" fill="#CE2B37" />
      </>
    ),
  },
};

interface FlagIconProps {
  code: CountryCode;
  className?: string;
}

export function FlagIcon({ code, className = "w-5 h-5" }: FlagIconProps) {
  const flag = flags[code];
  return (
    <svg
      viewBox={flag.viewBox}
      className={className}
      aria-label={flag.name}
      role="img"
    >
      {flag.render()}
    </svg>
  );
}
