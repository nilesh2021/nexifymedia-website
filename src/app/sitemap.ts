import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://www.nexifymedia.co.in";

function getRoutes(dir: string, baseRoute = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  let routes: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // Skip special Next.js folders/files
    if (
      entry.name.startsWith("_") ||
      entry.name === "api" ||
      entry.name === "components"
    ) {
      continue;
    }

    if (entry.isDirectory()) {
      const pageFile = path.join(fullPath, "page.tsx");

      if (fs.existsSync(pageFile)) {
        const route =
          baseRoute +
          "/" +
          entry.name.replace(/\[.*?\]/g, "");

        routes.push(route);
      }

      routes.push(
        ...getRoutes(
          fullPath,
          baseRoute + "/" + entry.name
        )
      );
    }
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "src/app");

  const routes = getRoutes(appDir);

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "weekly",
    },

    ...routes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      priority: route.startsWith("/careers") ? 0.9 : 0.8,
      changeFrequency: "weekly" as const,
    })),
  ];
}