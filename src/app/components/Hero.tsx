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

  <section
  className="
    relative
    min-h-screen
    flex
    items-center
    justify-center
    overflow-hidden
    bg-gradient-to-br
    from-[#111936]
    via-[#1a2150]
    to-[#091224]
    px-4
    sm:px-6
    pt-32
    pb-20
  "
>
  {/* Background Effects */}

  <div className="absolute inset-0 overflow-hidden">

    {/* LEFT SOFT GLOW */}

    <div
      className="
        absolute
        -top-32
        -left-40
        w-[520px]
        h-[520px]
        bg-[#24c2f2]/10
        rounded-full
        blur-[140px]
      "
    />

    {/* CENTER PURPLE GLOW */}

    <div
      className="
        absolute
        top-[30%]
        left-1/2
        -translate-x-1/2
        w-[450px]
        h-[450px]
        bg-purple-500/10
        rounded-full
        blur-[130px]
      "
    />

    {/* RIGHT BLUE GLOW */}

    <div
      className="
        absolute
        bottom-0
        right-[-120px]
        w-[480px]
        h-[480px]
        bg-[#1d4ed8]/15
        rounded-full
        blur-[140px]
      "
    />

  </div>

  {/* Content */}

  <div className="relative z-10 max-w-6xl mx-auto text-center py-5">

    {/* Badge */}

    <div
      className="
        inline-flex
        items-center
        gap-2
        px-5
        py-2
        rounded-full
        border
        border-[#24c2f2]/30
        bg-[#24c2f2]/10
        backdrop-blur-md
        text-[#24c2f2]
        text-sm
        mb-8
      "
    >
      ✧ Transforming Brands Digitally
    </div>

    {/* Heading */}

    <h1
      className="
        text-5xl
        sm:text-6xl
        lg:text-7xl
        font-bold
        leading-[1.1]
        tracking-tight
        text-white
        mb-8
      "
    >
      Grow Your Brand With
      <br />

      <span
        className="
          bg-gradient-to-r
          from-[#24c2f2]
          via-[#38bdf8]
          to-[#0ea5e9]
          bg-clip-text
          text-transparent
        "
      >
        Smart Digital Marketing
      </span>
    </h1>

    {/* Description */}

    <p
      className="
        max-w-3xl
        mx-auto
        text-lg
        sm:text-xl
        text-gray-300
        leading-relaxed
        mb-12
      "
    >
      We help businesses grow online through SEO, website design,
      content marketing, and performance-driven digital strategies.
    </p>

    {/* CTA Buttons */}

    <div
      className="
        flex
        flex-col
        sm:flex-row
        items-center
        justify-center
        gap-5
      "
    >
      {/* Primary Button */}

      <button
        onClick={() => {
          window.location.href = "/careers";
        }}
        className="
          group
          px-10
          py-5
          rounded-full
          bg-gradient-to-r
          from-[#24c2f2]
          to-[#1d4ed8]
          text-white
          text-lg
          font-semibold
          shadow-[0_10px_40px_rgba(36,194,242,0.25)]
          hover:scale-105
          hover:shadow-[0_20px_60px_rgba(36,194,242,0.35)]
          transition-all
          duration-300
        "
      >
        <span className="flex items-center gap-3">
          View Careers
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </span>
      </button>

      {/* Secondary Button */}

      <button
        onClick={() => {
          document.getElementById("services")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="
          px-10
          py-5
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-md
          text-white
          text-lg
          font-semibold
          hover:bg-white/10
          hover:border-[#24c2f2]/30
          transition-all
          duration-300
        "
      >
        Explore Services
      </button>
    </div>

    {/* Scroll Indicator */}

    <div className="mt-24 flex justify-center">
      <div
        className="
          w-8
          h-14
          rounded-full
          border
          border-white/20
          flex
          justify-center
          p-2
        "
      >
        <div
          className="
            w-2
            h-3
            rounded-full
            bg-[#24c2f2]
            animate-bounce
          "
        />
      </div>
    </div>

  </div>
</section>
  );
}