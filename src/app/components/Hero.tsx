import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  const scrollToInternship = () => {

    const element = document.getElementById('internship-program');

    if (element) {

      const navbarOffset = 100;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToServices = () => {

    const element = document.getElementById('services');

    if (element) {

      const navbarOffset = 100;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-gradient-to-br from-[#202851] via-[#202851] to-[#1a2040] text-white overflow-hidden pt-32 lg:pt-24 pb-16 px-4 sm:px-6">

      {/* Background Glow Effects */}
      <div className="absolute inset-0 opacity-10">

        <div className="absolute top-20 left-10 w-72 h-72 bg-[#24c2f2] rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#24c2f2] rounded-full blur-3xl animate-pulse delay-700"></div>

      </div>

      {/* Hero Content */}
      <div className="container mx-auto relative z-10 flex flex-col justify-center">

        <div className="max-w-3xl mx-auto text-center">

          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#24c2f2]/10 border border-[#24c2f2]/30 rounded-full mb-8 backdrop-blur-sm">

            <Sparkles className="w-4 h-4 text-[#24c2f2]" />

            <span className="text-sm text-[#24c2f2]">
              Transforming Brands Digitally
            </span>

          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold mb-6">

            Build Your Career in{" "}

            <span className="text-[#24c2f2]">
              Digital Marketing
            </span>

          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">

            Work on real projects, learn industry tools,
            and grow with a creative digital marketing team.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">

            {/* Apply Button */}
            <button
              onClick={() => navigate("/careers")}
              className="
            group
            w-full
            sm:w-auto
            px-8
            py-4
            bg-[#24c2f2]
            text-white
            rounded-full
            hover:bg-[#1da8d4]
            hover:scale-105
            transition-all
            duration-300
            flex
            items-center
            justify-center
            gap-2
            shadow-2xl
            cursor-pointer
          "
            >

              Apply for Internship

              <ArrowRight
                className="
              w-5
              h-5
              group-hover:translate-x-1
              transition-transform
            "
              />

            </button>

            {/* Explore Services */}
            <button
              onClick={scrollToServices}
              className="
            w-full
            sm:w-auto
            px-8
            py-4
            bg-transparent
            border-2
            border-white/20
            text-white
            rounded-full
            hover:border-[#24c2f2]
            hover:text-[#24c2f2]
            transition-all
            duration-300
            backdrop-blur-sm
          "
            >

              Explore Services

            </button>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">

        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">

          <div className="w-1.5 h-3 bg-[#24c2f2] rounded-full mx-auto"></div>

        </div>

      </div>

    </section>
  );
}