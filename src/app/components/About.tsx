import { Users, Award, Rocket, CheckCircle, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-[#202851]">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're not just another marketing agency. We're your growth partners,
              combining creativity with data-driven strategies to deliver exceptional results.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Data-Driven Strategy Development",
                "Expert Team of Marketing Specialists",
                "Transparent Reporting & Analytics",
                "Customized Solutions for Your Business"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#24c2f2] flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-[#202851] text-white rounded-full hover:bg-[#2a3561] transition-all duration-300">
              Learn More About Us
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Users, number: "500+", label: "Happy Clients" },
              { icon: Award, number: "15+", label: "Awards Won" },
              { icon: Rocket, number: "1000+", label: "Projects Completed" },
              { icon: TrendingUp, number: "95%", label: "Client Retention" }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#202851] to-[#2a3561] p-8 rounded-2xl text-white text-center"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-[#24c2f2]" />
                <div className="text-3xl mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
