import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NOWE KLUCZE - Dorabianie kluczy Czechowice-Dziedzice",
    short_name: "NOWE KLUCZE",
    description:
      "Ekspresowe dorabianie kluczy domowych i samochodowych, wymiana zamków w Czechowicach-Dziedzicach",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#d97706",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
