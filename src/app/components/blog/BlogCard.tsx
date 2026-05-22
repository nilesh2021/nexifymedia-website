type BlogCardProps = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  link: string;
};

export default function BlogCard({
  title,
  excerpt,
  image,
  category,
  readTime,
  date,
  link,
}: BlogCardProps) {
  return (
    <a
      href={link}
      className="group flex flex-col h-full overflow-hidden rounded-3xl border border-gray-200 bg-white hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-100/50 transition-all duration-500"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden h-64">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Category */}
        <div className="absolute top-5 left-5">

          <span className="rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-sm font-semibold text-cyan-700 shadow-md">
            {category}
          </span>

        </div>

      </div>

      {/* CONTENT */}
      <div className="p-8 flex flex-col flex-1">

        {/* META */}
        <div className="flex items-center gap-4 text-sm text-gray-500">

          <span>
            {date}
          </span>

          <span className="w-1 h-1 rounded-full bg-gray-400" />

          <span>
            {readTime}
          </span>

        </div>

        {/* TITLE */}
        <h3 className="mt-5 text-3xl font-bold leading-tight text-[#111827] group-hover:text-cyan-600 transition-colors">

          {title}

        </h3>

        {/* EXCERPT */}
        <p className="mt-5 text-gray-600 leading-8">

          {excerpt}

        </p>

        {/* CTA */}
        <div className="mt-auto pt-8 inline-flex items-center text-cyan-600 font-semibold">

          Read Article

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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

        </div>

      </div>

    </a>
  );
}