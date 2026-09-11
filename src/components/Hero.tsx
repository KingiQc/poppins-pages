import { Shield, Sparkles, Target, Zap } from "lucide-react";
import { SignupCard } from "./SignupCard";

const badges = [
  { icon: Zap, label: "Apply in 30 seconds" },
  { icon: Target, label: "Direct to the employer" },
  { icon: Shield, label: "No spam, no recruiters" },
];

const steps = [
  {
    title: "Create your account",
    body: "Sign up in seconds with your email or Google account",
  },
  {
    title: "Submit your application",
    body: "Upload your resume and confirm your details – no lengthy forms",
  },
  {
    title: "Apply direct to the employer",
    body: "No middleman – your application goes straight to the hiring team",
  },
];

export function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] items-start gap-14 px-6 py-16 lg:grid-cols-[1.1fr_auto] lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <Sparkles className="h-4 w-4" />
            Apply now
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Start your <br />
            <span className="text-primary">application</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-foreground/80">
            You're one step away from applying for this role.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-5 py-3 text-sm font-medium"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-14">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              How it works
            </h2>
            <ol className="mt-6 space-y-6">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <SignupCard />
        </div>
      </div>
    </section>
  );
}
