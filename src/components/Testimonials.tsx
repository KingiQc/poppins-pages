import { Check, Quote } from "lucide-react";

const stories = [
  {
    quote:
      "I would 100% recommend Haystack. When I've been talking to people who are looking for new roles, I've said to download Haystack.",
    company: "EPAM Systems",
    name: "Ray Blair",
    role: "Lead Software Engineer",
    initials: "RB",
  },
  {
    quote:
      "Haystack definitely exceeded expectations and was much more streamlined than using a job board, or going through a recruiter.",
    company: "The Verve Group",
    name: "Ollie Reeve",
    role: "Senior Web Developer",
    initials: "OR",
  },
  {
    quote:
      "I applied for the job and literally the next day Tom from Fuzzy reached out. It was 30 days from starting on Haystack.",
    company: "Fuzzy Labs",
    name: "Callum Wells",
    role: "Software Engineer",
    initials: "CW",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border/70">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:py-28">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          Real stories from real candidates
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Hear from professionals who found their next role through Haystack.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.map((s) => (
            <figure
              key={s.name}
              className="card-elevated flex flex-col rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <Quote className="h-6 w-6 text-primary" />
              <blockquote className="mt-6 flex-1 text-base italic leading-relaxed text-foreground/90">
                {s.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Check className="h-4 w-4" />
                  Hired by {s.company}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-sm font-bold">
                    {s.initials}
                  </span>
                  <div>
                    <p className="font-semibold">{s.name}</p>
                    <p className="text-sm text-muted-foreground">{s.role}</p>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
