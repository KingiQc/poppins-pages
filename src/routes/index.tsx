import { createFileRoute } from "@tanstack/react-router";
import ApplyPage from "@/pages/ApplyPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Start Your Application — Haystack Jobs" },
      {
        name: "description",
        content:
          "Apply in 30 seconds and go straight to the employer. Haystack is free for job seekers, with smart matching and upfront salary insights.",
      },
      { property: "og:title", content: "Start Your Application — Haystack Jobs" },
      {
        property: "og:description",
        content:
          "Apply in 30 seconds, direct to the employer. No spam, no recruiters — Haystack is free for job seekers.",
      },
    ],
  }),
  component: ApplyPage,
});
