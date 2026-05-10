'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Globe,
  Laptop,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import CareerForm from '../components/CareerForm';

const jobs = [
  {
    title: 'SEO Intern',
    type: 'Internship',
    location: 'Remote / Worldwide',
    description:
      'Learn on-page SEO, keyword research, blogging, and Google Search Console with live projects.',
  },
  {
    title: 'Digital Marketing Intern',
    type: 'Internship',
    location: 'Remote / Worldwide',
    description:
      'Work on social media marketing, ad campaigns, content creation, and growth strategies.',
  },
   {
    title: 'UI/UX Design Intern',
    type: 'Internship',
    location: 'Remote / Worldwide',
     description:
      'Design modern websites and mobile apps using Figma, wireframes, and user-centered design.',
  },
  {
    title: 'Content Writing Intern',
   type: 'Internship',
     location: 'Remote / Worldwide',
     description:
       'Create engaging content for websites, blogs, and social media platforms.',
   },
];

const benefits = [
  'Work on real client projects',
  'Internship certificate',
  'Letter of recommendation',
  'Flexible work environment',
  'Portfolio building experience',
  'Mentorship from industry professionals',
];

export default function CareersPage() {
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <main className="bg-[#0f172a] text-white min-h-screen overflow-hidden pt-24">

        {/* Hero Section */}
        <section className="relative py-32 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-[#24c2f2]/20 to-[#202851]/40 blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-6">
                <Briefcase className="w-4 h-4 text-[#24c2f2]" />

                <span className="text-sm">
                  Careers at NexifyMedia
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Build Your Career With{' '}
                <span className="bg-gradient-to-r from-[#24c2f2] to-cyan-300 bg-clip-text text-transparent">
                  NexifyMedia
                </span>
              </h1>

              <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300 leading-relaxed">
                Join our creative digital team and gain hands-on experience
                in SEO, digital marketing, UI/UX design, and modern web development.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="#openings"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#24c2f2] to-[#202851] hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  View Open Roles
                </a>

                <a
                  href="#apply"
                  className="px-8 py-4 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">
                Why Join Us?
              </h2>

              <p className="text-gray-400 mt-4">
                Learn, grow, and work on impactful digital projects.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
                <Laptop className="w-12 h-12 text-[#24c2f2]" />

                <h3 className="text-xl font-semibold mt-5">
                  Real Projects
                </h3>

                <p className="text-gray-400 mt-3">
                  Gain practical experience by working on live client projects.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
                <GraduationCap className="w-12 h-12 text-[#24c2f2]" />

                <h3 className="text-xl font-semibold mt-5">
                  Learn & Grow
                </h3>

                <p className="text-gray-400 mt-3">
                  Improve your digital skills with mentorship and guidance.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
                <Globe className="w-12 h-12 text-[#24c2f2]" />

                <h3 className="text-xl font-semibold mt-5">
                  Flexible Work
                </h3>

                <p className="text-gray-400 mt-3">
                  Work remotely or hybrid with a flexible environment.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
                <Briefcase className="w-12 h-12 text-[#24c2f2]" />

                <h3 className="text-xl font-semibold mt-5">
                  Career Opportunities
                </h3>

                <p className="text-gray-400 mt-3">
                  Build your portfolio and unlock future opportunities.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section
          id="openings"
          className="py-24 px-6 bg-white/[0.03]"
        >
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">
                Open Positions
              </h2>

              <p className="text-gray-400 mt-4">
                Explore current internship opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-[#24c2f2]/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-1 rounded-full bg-[#24c2f2]/20 text-[#24c2f2] text-sm">
                      {job.type}
                    </span>

                    <span className="text-sm text-gray-400">
                      {job.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold mt-6">
                    {job.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {job.description}
                  </p>

                  <button
                    onClick={() => {
                      const element = document.getElementById('apply');

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
                    }}
                    className="
    mt-8
    inline-flex
    items-center
    gap-2
    text-[#24c2f2]
    hover:gap-4
    transition-all
    duration-300
  "
                  >
                    Apply Now

                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">
                Internship Benefits
              </h2>

              <p className="text-gray-400 mt-4">
                What you will gain during your internship.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <CheckCircle2 className="text-[#24c2f2] w-6 h-6" />

                  <span className="text-gray-200">
                    {benefit}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Application Form */}
        <section
          id="apply"
          className="py-24 px-6 bg-white/[0.03]"
        >
          <div className="max-w-3xl mx-auto">

            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold">
                Apply Now
              </h2>

              <p className="text-gray-400 mt-4">
                Start your digital career journey with NexifyMedia.
              </p>
            </div>


            <CareerForm />

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}