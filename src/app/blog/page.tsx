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
        <section className="relative overflow-hidden bg-[#edf3fb] pt-40 pb-24">

          {/* Glow */}
          <div className="absolute inset-0 overflow-hidden">

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl" />

            <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl" />

          </div>

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

            <div className="max-w-4xl">

              <div className="inline-flex rounded-full border border-cyan-200 bg-white/80 backdrop-blur-md px-5 py-2 text-sm font-medium text-cyan-700 shadow-md">
                Nexify Media Blog
              </div>

              <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[#111827]">
                Insights on
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  SEO, UI/UX & Digital Growth
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
                Explore articles on UI/UX design, SEO,
                digital marketing, affiliate marketing,
                AI tools, web design, and modern
                digital experiences.
              </p>

            </div>

          </div>

        </section>

        {/* BLOG SECTION */}
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-10">

            {/* CATEGORY FILTERS */}
            <div className="flex flex-wrap gap-4 mb-16">

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
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    activeCategory === item
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-200"
                      : "border border-gray-200 bg-white text-gray-700 hover:border-cyan-200 hover:text-cyan-600"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

            {/* FEATURED BLOG */}
            {activeCategory === "All" &&
              featuredBlog && (

                <div className="mb-20">

                  <div className="group grid lg:grid-cols-2 overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl shadow-cyan-100/30">

                    {/* Image */}
                    <div className="relative overflow-hidden min-h-[420px]">

                      <img
                        src={featuredBlog.image}
                        alt={featuredBlog.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      <div className="absolute top-6 left-6">

                        <span className="rounded-full bg-white/90 backdrop-blur-md px-5 py-2 text-sm font-semibold text-cyan-700">
                          Featured Article
                        </span>

                      </div>

                    </div>

                    {/* Content */}
                    <div className="p-10 lg:p-14 flex flex-col justify-center">

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">

                        <span>
                          {featuredBlog.categoryLabel}
                        </span>

                        <span className="w-1 h-1 rounded-full bg-gray-400" />

                        <span>
                          {featuredBlog.readTime}
                        </span>

                      </div>

                      {/* Title */}
                      <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-[#111827] group-hover:text-cyan-600 transition-colors">

                        {featuredBlog.title}

                      </h2>

                      {/* Excerpt */}
                      <p className="mt-6 text-lg leading-8 text-gray-600">

                        {featuredBlog.excerpt}

                      </p>

                      {/* CTA */}
                      <div className="mt-10">

                        <a
                          href={`/blog/${featuredBlog.category}/${featuredBlog.slug}`}
                          className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-200 hover:scale-105 transition-all duration-300"
                        >
                          Read Featured Article

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

                      </div>

                    </div>

                  </div>

                </div>

              )}

            {/* BLOG GRID */}
            <div className="grid lg:grid-cols-2 gap-10">

              {filteredBlogs
                .filter((blog) => !blog.featured)
                .map((blog) => (

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