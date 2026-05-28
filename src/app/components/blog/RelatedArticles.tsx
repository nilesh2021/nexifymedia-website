import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { BlogLinkSet } from "../../../data/blogInternalLinks";

type RelatedArticlesProps = {
  links: BlogLinkSet;
  variant?: "dark" | "light";
  title?: string;
};

export default function RelatedArticles({
  links,
  variant = "dark",
  title = "Related articles",
}: RelatedArticlesProps) {
  const isLight = variant === "light";

  return (
    <div className="space-y-6">
      <div
        className={
          isLight
            ? "rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
            : "rounded-[32px] border border-gray-800 bg-gray-900/50 p-8"
        }
      >
        <h3
          className={
            isLight
              ? "text-xl font-bold text-[#111827] mb-6"
              : "text-xl font-semibold text-white mb-4"
          }
        >
          {title}
        </h3>
        <ul className="space-y-3">
          {links.related.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={
                  isLight
                    ? "group flex items-center justify-between rounded-2xl border border-transparent px-3 py-3 text-gray-700 font-medium hover:border-violet-100 hover:bg-violet-50 hover:text-violet-600 transition"
                    : "text-cyan-400 hover:text-cyan-300 transition text-sm flex items-center gap-2"
                }
              >
                {isLight ? (
                  <>
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </>
                ) : (
                  <>→ {item.label}</>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {links.service && (
        <div
          className={
            isLight
              ? "rounded-3xl border border-violet-100 bg-[#faf7ff] p-7"
              : "rounded-[32px] border border-cyan-500/20 bg-cyan-500/10 p-8"
          }
        >
          <p
            className={
              isLight ? "text-sm text-gray-600 mb-4" : "text-gray-300 text-sm leading-7 mb-4"
            }
          >
            Ready to go further?
          </p>
          <Link
            to={links.service.href}
            className={
              isLight
                ? "inline-flex items-center font-semibold text-violet-600 hover:text-violet-700 transition"
                : "inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition"
            }
          >
            {links.service.label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
