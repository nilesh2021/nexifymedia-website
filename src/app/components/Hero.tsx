import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#202851] via-[#202851] to-[#1a2040] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#24c2f2] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#24c2f2] rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#24c2f2]/10 border border-[#24c2f2]/30 rounded-full mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#24c2f2]" />
            <span className="text-sm text-[#24c2f2]">Transforming Brands Digitally</span>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            Elevate Your Digital <span className="text-[#24c2f2]">Presence</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We craft data-driven marketing strategies that amplify your brand and drive measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-[#24c2f2] text-white rounded-full hover:bg-[#1da8d4] transition-all duration-300 flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-full hover:border-[#24c2f2] hover:text-[#24c2f2] transition-all duration-300 backdrop-blur-sm">
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-[#24c2f2] rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
