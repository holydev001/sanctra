import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/how-it-works", "/integrations", "/security", "/roadmap", "/docs", "/waitlist"];
  return routes.map((route) => ({ url: `https://sanctra.dev${route}`, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 }));
}
