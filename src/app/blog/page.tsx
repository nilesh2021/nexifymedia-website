import { Helmet } from "react-helmet-async";
import { useState } from "react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import BlogCard from "../components/blog/BlogCard";

import { blogs } from "../../data/blogs";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter(
        (blog) =>
          blog.categoryLabel === activeCategory
      );

  const featuredBlog = blogs.find(
    (blog) => blog.featured
  );

  return (
    <>
      <Helmet>
        <title>
          Blog | Nexify Media
        </title>

        <meta
          name="description"
          content="Explore blogs related to UI/UX design, SEO, digital marketing, AI tools, affiliate marketing, and modern web experiences."
        />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-white">

        {/* HERO */}
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#0f172a] pt-44 pb-32 text-white">

          {/* Background Glow */}
          <div className="absolute inset-0 overflow-hidden">

            <div className="absolute top-0 left-[-100px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />

            <div className="absolute bottom-0 right-[-100px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />

          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/40 to-[#0f172a]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

            <div className="max-w-5xl">

              {/* Badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-3 shadow-2xl">

                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />

                <span className="text-sm font-medium text-cyan-100 tracking-wide">
                  Nexify Media Insights
                </span>

              </div>

              {/* Title */}
              <h1 className="mt-10 text-5xl md:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">

                Digital Growth,
                <br />

                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  SEO & UI/UX
                </span>

                <br />

                Insights for 2026

              </h1>

              {/* Description */}
              <p className="mt-10 max-w-3xl text-xl md:text-2xl leading-10 text-slate-300">

                Explore actionable insights on SEO,
                UI/UX design, AI tools, affiliate marketing,
                digital branding, and modern web experiences
                shaping the future of online business.

              </p>

              {/* CTA + STATS */}
              <div className="mt-14 flex flex-col lg:flex-row lg:items-center gap-8">

                {/* CTA */}
                <a
                  href="#featured-posts"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-2xl shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
                >

                  Explore Articles

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>

                </a>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-8 text-slate-300">

                  <div>

                    <div className="text-3xl font-bold text-white">
                      50+
                    </div>

                    <div className="text-sm mt-1">
                      Expert Articles
                    </div>

                  </div>

                  <div className="w-px h-12 bg-white/10 hidden sm:block" />

                  <div>

                    <div className="text-3xl font-bold text-white">
                      SEO
                    </div>

                    <div className="text-sm mt-1">
                      Growth Strategies
                    </div>

                  </div>

                  <div className="w-px h-12 bg-white/10 hidden sm:block" />

                  <div>

                    <div className="text-3xl font-bold text-white">
                      UI/UX
                    </div>

                    <div className="text-sm mt-1">
                      Design Insights
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* BLOG SECTION */}
        <section
          id="featured-posts"
          className="py-16"
        >

          <div className="max-w-7xl mx-auto px-6 lg:px-10">

            {/* CATEGORY FILTERS */}
            <div className="flex flex-wrap gap-4 mb-12">

              {[
                "All",
                "UI/UX",
                "SEO",
                "Digital Marketing",
                "AI Tools",
                "Affiliate Marketing",
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setActiveCategory(item)
                  }
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${activeCategory === item
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-200"
                    : "border border-gray-200 bg-white text-gray-700 hover:border-cyan-200 hover:text-cyan-600"
                    }`}
                >
                  {item}
                </button>
              ))}

            </div>


            {/* BLOG GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredBlogs.map((blog) => (

                <BlogCard
                  key={blog.id}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  image={blog.image}
                  category={blog.categoryLabel}
                  readTime={blog.readTime}
                  date={blog.date}
                  link={`/blog/${blog.category}/${blog.slug}`}
                />

              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}