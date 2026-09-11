import { Briefcase, Building2, ChevronDown, Home, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Logo } from "./Logo";

const links = [
  { label: "For Candidates", icon: Home, caret: false },
  { label: "For Companies", icon: Building2, caret: true },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/85 backdrop-blur">
      <nav className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between gap-6 px-6">
        <Logo />

        <div className="hidden items-center gap-2 lg:flex">
          {links.map(({ label, icon: Icon, caret }) => (
            <button
              key={label}
              type="button"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-accent hover:text-foreground"
            >
              <Icon className="h-4 w-4 text-brand" />
              {label}
              {caret ? <ChevronDown className="h-4 w-4 opacity-70" /> : null}
            </button>
          ))}
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Briefcase className="h-4 w-4" />
            Hiring?
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Sun className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="hidden rounded-full px-3 py-2 text-sm font-medium text-foreground/90 transition-colors hover:text-foreground sm:inline-flex"
          >
            Sign In
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Sign Up
            <ChevronDown className="h-4 w-4 opacity-70" />
          </button>
        </div>
      </nav>
    </header>
  );
}
