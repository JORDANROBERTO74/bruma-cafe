import { Container, Section } from "@/components/ui/layout";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <Section className="bg-paper-deep/50">
      <Container>
        <div className="max-w-2xl">
          <h2 className="display-md">{dict.home.testimonials.title}</h2>
          <p className="mt-2 text-ink-soft">{dict.home.testimonials.subtitle}</p>
        </div>

        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {dict.home.testimonials.items.map((item) => (
            <li
              key={item.author}
              className="flex flex-col justify-between rounded-card border border-line bg-paper p-6"
            >
              <blockquote className="text-ink">
                <p className="text-[1.05rem] leading-relaxed">“{item.quote}”</p>
              </blockquote>
              <footer className="mt-6 border-t border-line pt-4">
                <p className="text-sm font-semibold">{item.author}</p>
                <p className="text-xs text-ink-soft">{item.location}</p>
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
