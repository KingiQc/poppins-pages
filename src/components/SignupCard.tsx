import { useState } from "react";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.7-6.7C35.6 2.6 30.2.5 24 .5 14.6.5 6.5 5.8 2.6 13.6l7.8 6.1C12.3 13.5 17.7 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.9 7.2l7.6 5.9c4.4-4.1 7.1-10.2 7.1-17.6z"
      />
      <path
        fill="#FBBC05"
        d="M10.4 28.3a14.6 14.6 0 0 1 0-8.6l-7.8-6.1a23.9 23.9 0 0 0 0 20.8l7.8-6.1z"
      />
      <path
        fill="#34A853"
        d="M24 47.5c6.5 0 11.9-2.1 15.9-5.9l-7.6-5.9c-2.1 1.4-4.8 2.3-8.3 2.3-6.3 0-11.7-4-13.6-9.7l-7.8 6.1C6.5 42.2 14.6 47.5 24 47.5z"
      />
    </svg>
  );
}

export function SignupCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [optIn, setOptIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full max-w-[480px]">
      <div className="panel-glow rounded-3xl p-6 sm:p-8">
        <p className="rounded-xl bg-secondary py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          Almost there – one step to go
        </p>

        <h2 className="mt-6 text-center text-2xl font-bold">Apply for this role</h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Continue to start your application – it takes less than 30 seconds
        </p>

        <button
          type="button"
          className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-background px-4 py-3.5 text-sm font-semibold transition-colors hover:bg-accent"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        <div className="my-5 flex items-center gap-4">
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min 6 characters"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>

          <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={optIn}
              onChange={(e) => setOptIn(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-primary accent-primary"
            />
            <span>
              I agree to receive emails about new job opportunities that match my preferences. You
              can unsubscribe at any time.
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-foreground px-4 py-3.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 hover:opacity-95 active:translate-y-0"
          >
            Start Application
          </button>

          {submitted ? (
            <p className="text-center text-sm text-primary">
              Thanks! Check your inbox to continue your application.
            </p>
          ) : null}
        </form>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <button type="button" className="font-semibold text-primary hover:underline">
            Log in
          </button>
        </p>
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">Takes 30 seconds</p>
    </div>
  );
}
