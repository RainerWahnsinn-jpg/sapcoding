import type { MetadataRoute } from "next";
import { CITIES } from "./lib/cities";

const BASE_URL = "https://www.constantin-felix.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const cityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${BASE_URL}/webdesign-${city.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...cityPages,
    {
      url: `${BASE_URL}/impressum`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
