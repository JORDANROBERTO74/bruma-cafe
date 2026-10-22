"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/layout";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Newsletter({ dict }: { dict: Dictionary }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    setStatus(valid ? "success" : "error");
  }

  return (
    <Section>
      <Container>
        <div className="rounded-[2rem] bg-ink px-6 py-12 text-paper sm:px-12 sm:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="display-md text-paper">{dict.home.newsletter.title}</h2>
              <p className="mt-3 max-w-md text-paper/70">{dict.home.newsletter.subtitle}</p>
            </div>

            <div>
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  {dict.home.newsletter.placeholder}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder={dict.home.newsletter.placeholder}
                  aria-invalid={status === "error"}
                  aria-describedby="newsletter-status"
                  className="h-12 w-full rounded-full border border-paper/25 bg-paper/10 px-5 text-paper placeholder:text-paper/50 focus-visible:border-caramel"
                />
                <Button type="submit" size="lg" className="shrink-0 bg-caramel text-ink hover:bg-caramel/90">
                  {dict.home.newsletter.cta}
                  <ArrowRight className="size-4" />
                </Button>
              </form>

              <p
                id="newsletter-status"
                aria-live="polite"
                className="mt-3 flex items-center gap-2 text-sm"
              >
                {status === "success" ? (
                  <>
                    <CheckIcon className="size-4 text-caramel" />
                    <span className="text-paper">{dict.home.newsletter.success}</span>
                  </>
                ) : null}
                {status === "error" ? (
                  <span className="text-caramel">{dict.home.newsletter.invalid}</span>
                ) : null}
                {status === "idle" ? (
                  <span className="text-paper/50">{dict.home.newsletter.disclaimer}</span>
                ) : null}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
