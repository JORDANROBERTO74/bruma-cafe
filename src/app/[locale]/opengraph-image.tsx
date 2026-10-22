import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";

export const alt = "Bruma — small-batch coffee from Bolivia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAF5EE",
          padding: "70px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -140,
            width: 520,
            height: 520,
            borderRadius: 999,
            backgroundColor: "#F1E8DB",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 60,
            bottom: 60,
            width: 240,
            height: 240,
            borderRadius: 999,
            backgroundColor: "#A34A28",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              backgroundColor: "#D9A441",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#4A3A32",
              display: "flex",
            }}
          >
            {dict.home.hero.eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 128,
              lineHeight: 1,
              color: "#201713",
              fontFamily: "Georgia, serif",
              display: "flex",
            }}
          >
            bruma.
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 40,
              color: "#4A3A32",
              maxWidth: 760,
              display: "flex",
            }}
          >
            {dict.common.tagline}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#4A3A32" }}>
          {dict.footer.note}
        </div>
      </div>
    ),
    size,
  );
}
