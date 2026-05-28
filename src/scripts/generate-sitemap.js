import fs from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";

const BASE_URL = "https://nexifymedia.co.in";

const appDirectory = path.resolve("src/app");

const ignoreFolders = ["components"];

/** Routes registered in main.tsx (non-blog app pages). */
const staticAppRoutes = [
  "/careers",
  "/privacy-policy",
  "/terms-and-conditions",
  "/disclaimer",
  "/affiliate-disclosure",
  "/cookie-policy",
  "/seo-internship-pune",
  "/seo-internship-mumbai",
  "/remote-seo-internship",
  "/best-ai-tools-for-marketers",
  "/best-chatgpt-tools-for-marketers",
  "/services",
  "/services/seo-services",
  "/services/web-design",
  "/services/ui-ux-design",
  "/services/social-media-marketing",
  "/blog",
];

/**
 * Collect blog article URLs only from leaf folders with a non-empty page.tsx.
 * Example: /blog/seo/what-is-seo
 */
function collectBlogArticleRoutes(dir, baseRoute) {
  let routes = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    if (!item.isDirectory()) continue;

    const subPath = path.join(dir, item.name);
    const route = `${baseRoute}/${item.name}`;
    const pageFile = path.join(subPath, "page.tsx");

    if (fs.existsSync(pageFile)) {
      const content = fs.readFileSync(pageFile, "utf8").trim();
      if (content.length > 0) {
        routes.push(route);
      }
    }

    routes = routes.concat(collectBlogArticleRoutes(subPath, route));
  }

  return routes;
}

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: BASE_URL,
  });

  sitemap.write({
    url: "/",
    changefreq: "daily",
    priority: 1.0,
  });

  staticAppRoutes.forEach((route) => {
    sitemap.write({
      url: route,
      changefreq: "weekly",
      priority: 0.8,
    });
  });

  const blogRoot = path.join(appDirectory, "blog");
  if (fs.existsSync(blogRoot)) {
    const blogRoutes = collectBlogArticleRoutes(blogRoot, "/blog");
    blogRoutes.forEach((route) => {
      if (route === "/blog") return;
      sitemap.write({
        url: route,
        changefreq: "weekly",
        priority: 0.7,
      });
    });
  }

  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap);

  fs.writeFileSync("./public/sitemap.xml", sitemapOutput.toString());

  console.log("✅ Full sitemap generated!");
}

generateSitemap();
