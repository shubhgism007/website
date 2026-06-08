import type { MetadataRoute } from "next";
import { accelerators } from "@/content/accelerators";
import { categories } from "@/content/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://avyu.ai";

  // Static routes
  const staticRoutes = ["", "/solutions", "/accelerators", "/deployment", "/about", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // Dynamic accelerator pages
  const acceleratorRoutes = accelerators.map((acc) => ({
    url: `${baseUrl}/accelerators/${acc.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Dynamic category solutions pages
  const categoryRoutes = categories.map((cat) => ({
    url: `${baseUrl}/solutions/${cat.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...acceleratorRoutes];
}
