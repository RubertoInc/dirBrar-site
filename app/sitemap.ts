import type { MetadataRoute } from "next";
import { musicVideoProjects, narrativeProjects } from "@/lib/projects";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.ruberto.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/about"].map((path, index) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: index === 0 ? ("weekly" as const) : ("monthly" as const),
    priority: index === 0 ? 1 : 0.8,
  }));

  const projectRoutes = narrativeProjects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const musicVideoRoutes = musicVideoProjects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...musicVideoRoutes];
}
