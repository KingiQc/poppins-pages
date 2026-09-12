import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Logo } from "./Logo";
import { FlagIcon } from "./FlagIcon";

const jobSeekers = ["Browse All Jobs", "Remote Jobs", "Saved Jobs"];
const countries = [
  { code: "DE" as const, name: "Germany" },
  { code: "US" as const, name: "United States" },
  { code: "NL" as const, name: "Netherlands" },
  { code: "GB" as const, name: "United Kingdom" },
  { code: "FR" as const, name: "France" },
  { code: "IN" as const, name: "India" },
];
const company = ["For Employers", "Privacy Policy", "Terms of Service", "About", "Contact", "Blog"];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface/60">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Your gateway to 100,000+ career opportunities worldwide.
            </p>
            <div className="mt-6 flex items-center gap-5 text-muted-foreground">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="transition-colors hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">For Job Seekers</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {jobSeekers.map((l) => (
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Jobs by Country</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {countries.map((c) => (
                <li key={c.name}>
                  <a href="#" className="flex items-center gap-3 transition-colors hover:text-foreground">
                    <FlagIcon code={c.code} />
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {company.map((l) => (
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">© 2026 Haystack. All rights reserved.</p>
          <div className="flex items-center gap-3" aria-hidden="true">
            <FlagIcon code="DE" />
            <FlagIcon code="US" />
            <FlagIcon code="FR" />
            <FlagIcon code="NL" />
            <FlagIcon code="GB" />
            <FlagIcon code="IT" />
          </div>
        </div>
      </div>
    </footer>
  );
}
