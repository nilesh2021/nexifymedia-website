import fs from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import blogs from "../data/blogs.json" with { type: "json" };

const BASE_URL = "https://nexifymedia.co.in";

// App folder path
const appDirectory = path.resolve("src/app");

// Folders to ignore
const ignoreFolders = ["components"];

// Get all app routes automatically
function getRoutes(dir, baseRoute = "") {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  let routes = [];

  for (const item of items) {
    if (item.isDirectory()) {
      if (ignoreFolders.includes(item.name)) continue;

      const fullPath = path.join(dir, item.name);

      const route =
        item.name === "app"
          ? ""
          : `${baseRoute}/${item.name}`;

      routes.push(route);

      routes = routes.concat(
        getRoutes(fullPath, route)
      );
    }
  }

  return routes;
}

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: BASE_URL,
  });

  // Homepage
  sitemap.write({
    url: "/",
    changefreq: "daily",
    priority: 1.0,
  });

  // Auto routes
  const routes = getRoutes(appDirectory);

  routes.forEach((route) => {
    sitemap.write({
      url: route,
      changefreq: "weekly",
      priority: 0.8,
    });
  });

  // Blog pages
  blogs.forEach((blog) => {
    sitemap.write({
      url: `/blog/${blog.slug}`,
      changefreq: "weekly",
      priority: 0.7,
    });
  });

  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap);

  fs.writeFileSync(
    "./public/sitemap.xml",
    sitemapOutput.toString()
  );

  console.log("✅ Full sitemap generated!");
}

generateSitemap();