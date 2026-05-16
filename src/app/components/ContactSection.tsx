import {
  Mail,
  MapPin,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { useNavigate } from "react-router-dom";
export default function ContactSection() {
  const navigate = useNavigate();

  const scrollToInternship = () => {

    const element = document.getElementById('seo-program');

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

    <section className="bg-[#1a2248] text-white py-24 sm:py-18 lg:py-24 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-[#24c2f2] uppercase tracking-[3px] text-sm">
            Join NexifyMedia
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#fff] mb-6 leading-tight">
            Learn Digital Marketing
            With <br />Real Opportunities
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8">
            Explore SEO internship opportunities, practical learning,
            and career growth with NexifyMedia.
          </p>

        </div>

        {/* Main Card */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div className="space-y-8">

            {/* Email */}
            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-2xl bg-[#24c2f2]/10 border border-[#24c2f2]/20 flex items-center justify-center">
                <Mail className="text-[#24c2f2]" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Email Us
                </h3>

                <p className="text-gray-400">
                  contact@nexifymedia.co.in
                </p>
              </div>

            </div>

            {/* Remote */}
            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-2xl bg-[#24c2f2]/10 border border-[#24c2f2]/20 flex items-center justify-center">
                <MapPin className="text-[#24c2f2]" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Remote Learning Platform
                </h3>

                <p className="text-gray-400">
                  Supporting learners across India
                </p>
              </div>

            </div>

            {/* Internship */}
            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-2xl bg-[#24c2f2]/10 border border-[#24c2f2]/20 flex items-center justify-center">
                <GraduationCap className="text-[#24c2f2]" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Internship Opportunities
                </h3>

                <p className="text-gray-400 leading-7">
                  SEO Internship <br />
                  Digital Marketing Learning <br />
                  Career Growth Opportunities
                </p>
              </div>

            </div>

          </div>

          {/* Right Side CTA Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

            <span className="text-[#24c2f2] uppercase tracking-[3px] text-sm">
              Career Growth
            </span>

            <h3 className="text-3xl font-bold mt-5 mb-6 leading-tight">
              Ready to Start Your <br />
              Digital Marketing Journey?
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              Join NexifyMedia to gain practical exposure,
              learn modern SEO strategies, and explore
              internship opportunities designed for future
              digital marketers.
            </p>

            <button
               onClick={() => navigate("/careers")}
              className="
    inline-flex items-center gap-3
    px-8 py-4
    rounded-2xl
    bg-gradient-to-r from-[#24c2f2] to-[#1b2c7a]
    text-white font-semibold

    hover:scale-105
    hover:shadow-2xl
    hover:shadow-cyan-500/30

    active:scale-95

    transition-all duration-300 ease-in-out
  "
            >
              Apply for Internship

              <ArrowRight className="w-5 h-5" />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}