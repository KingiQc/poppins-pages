import { Banknote, Shield, Target, Zap } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Always Free",
    body: "No fees, no hidden costs – Haystack is completely free for job seekers.",
  },
  {
    icon: Target,
    title: "Smart Matching",
    body: "Get roles tailored to your skills, preferences, and location – automatically.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    body: "Your data stays yours. We never share your information without consent.",
  },
  {
    icon: Banknote,
    title: "Salary Insights",
    body: "See salary ranges upfront so you can focus on roles that match your expectations.",
  },
];

export function Benefits() {
  return (
    <section className="border-t border-border/70 bg-surface/40">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:py-28">
        <blockquote className="mx-auto max-w-3xl text-center text-2xl font-medium italic leading-snug sm:text-3xl">
          "Hiring is stuck in the dark ages. Candidates face endless spam, shady recruiter outreach,
          and constant ghosting. Employers wade through hundreds of irrelevant applications and
          struggle to cut through the noise. Haystack helps you find the needle—whether that's your
          next role or your next hire."
        </blockquote>

        <h2 className="mt-16 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          Why job seekers love Haystack
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="card-elevated group rounded-2xl p-8 text-center transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <Icon className="h-6 w-6 text-primary" />
              </span>
              <h3 className="mt-6 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
