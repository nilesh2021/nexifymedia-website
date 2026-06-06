import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function UiUxDesignerJob() {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState("");
const [openFaq, setOpenFaq] = useState<number | null>(0);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await fetch(
                "https://script.google.com/macros/s/AKfycbxRaUoQNewWCzj8MQHEUkQplWd8oAUBxrCfa-7Optv5jtcEO4U5N_zzPZncjx-LWYLB/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: JSON.stringify({
                        name,
                        phone,
                        email,
                        resume,
                        jobTitle: "UI UX Designer Job",
                    }),
                }
            );

            alert("Application Submitted Successfully!");

            setName("");
            setPhone("");
            setEmail("");
            setResume("");
            setShowModal(false);

        } catch (error) {
            console.error(error);
            alert("Something went wrong.");
        }
    };
    return (

        <>
            <Helmet>
                <title>
                    UI UX Designer Job 2026 | Remote UI UX Designer Jobs | Nexify Media
                </title>

                <meta
                    name="description"
                    content="Apply for UI UX Designer Jobs at Nexify Media. Remote UI UX opportunities for freshers and experienced designers. Work with Figma, wireframing, prototyping, user research, and modern web and mobile applications."
                />

                <meta
                    name="keywords"
                    content="ui ux designer jobs, ui designer jobs, ux designer jobs, figma designer jobs, remote ui ux jobs, ui ux jobs for freshers, product designer jobs, work from home ui ux jobs"
                />

                <meta
                    property="og:title"
                    content="UI UX Designer Job | Nexify Media"
                />

                <meta
                    property="og:description"
                    content="Design meaningful digital experiences for web and mobile products. Work remotely with our team using Figma, user research, wireframing, and prototyping."
                />

                <link
                    rel="canonical"
                    href="https://nexifymedia.co.in/careers/ui-ux-designer-job"
                />
            </Helmet>
            <Navigation />

            {/* HERO */}
            <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pt-36 pb-24">
                <div className="max-w-6xl mx-auto px-6">

                    <nav className="text-slate-300 text-sm mb-8">
                        <Link to="/" className="hover:text-white">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <Link to="/careers" className="hover:text-white">
                            Careers
                        </Link>
                        <span className="mx-2">/</span>
                        <span>UI UX Designer Job</span>
                    </nav>

                    <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-6">
                        Remote Opportunity
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                        UI UX Designer
                        <span className="text-cyan-400">
                            &nbsp;Job
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl">
                        Join Nexify Media as a UI UX Designer and create intuitive,
                        user-friendly, and visually engaging digital experiences for
                        websites and mobile applications.
                    </p>

                </div>
            </section>

            {/* JOB INFO BAR */}
            <section className="-mt-12 relative z-10">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                            <div>
                                <p className="text-slate-500 text-sm">Location</p>
                                <h3 className="font-bold text-xl">Remote</h3>
                            </div>

                            <div>
                                <p className="text-slate-500 text-sm">Job Type</p>
                                <h3 className="font-bold text-xl">Part/Full-Time</h3>
                            </div>

                            <div>
                                <p className="text-slate-500 text-sm">Experience</p>
                                <h3 className="font-bold text-xl">0-2 Years</h3>
                            </div>

                            <div>
                                <p className="text-slate-500 text-sm">Salary</p>
                                <h3 className="font-bold text-xl">₹5K - ₹10K</h3>
                            </div>

                            <button
                                type="button"
                                onClick={() => setShowModal(true)}
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300"
                            >
                                Apply Now
                            </button>

                        </div>

                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <main className="bg-slate-50 py-20">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid lg:grid-cols-3 gap-8">

                        <div className="lg:col-span-2 space-y-8">

                            <div className="bg-white rounded-3xl p-8 shadow-sm">
                                <h2 className="text-3xl font-bold mb-4">
                                    Job Overview
                                </h2>

                                <p className="text-slate-600 leading-8">
                                    Nexify Media is seeking a creative UI UX Designer who can
                                    transform complex ideas into simple, intuitive, and engaging
                                    user experiences. You will collaborate with developers,
                                    marketers, and stakeholders to design modern websites and
                                    mobile applications.
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-sm">
                                <h2 className="text-3xl font-bold mb-6">
                                    Responsibilities
                                </h2>

                                <ul className="space-y-4 text-slate-700">
                                    <li>✓ Create wireframes and user flows</li>
                                    <li>✓ Design responsive web and mobile interfaces</li>
                                    <li>✓ Build interactive prototypes in Figma</li>
                                    <li>✓ Conduct user research and usability testing</li>
                                    <li>✓ Maintain design systems and UI consistency</li>
                                    <li>✓ Collaborate with developers and stakeholders</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-sm">
                                <h2 className="text-3xl font-bold mb-6">
                                    Requirements
                                </h2>

                                <ul className="space-y-4 text-slate-700">
                                    <li>✓ Create wireframes and user flows</li>
                                    <li>✓ Design responsive web and mobile interfaces</li>
                                    <li>✓ Build interactive prototypes in Figma</li>
                                    <li>✓ Conduct user research and usability testing</li>
                                    <li>✓ Maintain design systems and UI consistency</li>
                                    <li>✓ Collaborate with developers and stakeholders</li>
                                </ul>
                            </div>
                           
                            <section className="bg-white rounded-3xl shadow-sm p-8 mt-8">
                                <h2 className="text-3xl font-bold mb-6">
                                    Remote UI UX Designer Jobs
                                </h2>

                                <p className="text-slate-700 leading-8 mb-4">
                                    Looking for UI UX Designer Jobs? Nexify Media offers remote
                                    opportunities for designers passionate about creating user-friendly
                                    digital experiences.
                                </p>

                                <p className="text-slate-700 leading-8 mb-4">
                                    As a UI UX Designer, you will work on website design, mobile app
                                    interfaces, user research, wireframing, prototyping, and design systems.
                                </p>

                                <p className="text-slate-700 leading-8 mb-4">
                                    This position is ideal for candidates who enjoy problem-solving,
                                    visual design, user-centered thinking, and creating products that
                                    improve customer experiences.
                                </p>

                                <h3 className="text-2xl font-semibold mt-8 mb-4">
                                    Who Can Apply?
                                </h3>

                                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                                    <li>Freshers looking for work from home jobs</li>
                                    <li>Students seeking part-time online jobs</li>
                                    <li>Housewives looking for flexible remote work</li>
                                    <li>Professionals seeking additional income opportunities</li>
                                    <li>Candidates with basic computer and typing skills</li>
                                </ul>
                            </section>
                            
                         <section className="bg-white rounded-3xl shadow-sm p-8 mt-8">
    <h2 className="text-3xl font-bold mb-6">
        Frequently Asked Questions
    </h2>

    <div className="space-y-4">

        {/* FAQ 1 */}
        <div className="border rounded-2xl overflow-hidden">
            <button
                className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-slate-50 transition"
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
            >
                <span>Can freshers apply?</span>
                <span>{openFaq === 1 ? "−" : "+"}</span>
            </button>

            {openFaq === 1 && (
                <div className="px-5 pb-5 text-slate-600">
                    Freshers with a strong portfolio and knowledge of Figma,
                    wireframing, and UX principles are encouraged to apply.
                </div>
            )}
        </div>

        {/* FAQ 2 */}
        <div className="border rounded-2xl overflow-hidden">
            <button
                className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-slate-50 transition"
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
            >
                <span>Is this a remote UI UX Designer job?</span>
                <span>{openFaq === 2 ? "−" : "+"}</span>
            </button>

            {openFaq === 2 && (
                <div className="px-5 pb-5 text-slate-600">
                    Yes. This is a fully remote position, allowing designers to
                    work from anywhere with a stable internet connection.
                </div>
            )}
        </div>

        {/* FAQ 3 */}
        <div className="border rounded-2xl overflow-hidden">
            <button
                className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-slate-50 transition"
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
            >
                <span>Which design tools are required?</span>
                <span>{openFaq === 3 ? "−" : "+"}</span>
            </button>

            {openFaq === 3 && (
                <div className="px-5 pb-5 text-slate-600">
                    Figma is the primary design tool. Knowledge of Adobe XD,
                    Photoshop, Illustrator, or other design tools is a plus.
                </div>
            )}
        </div>

        {/* FAQ 4 */}
        <div className="border rounded-2xl overflow-hidden">
            <button
                className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-slate-50 transition"
                onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
            >
                <span>Do I need a portfolio?</span>
                <span>{openFaq === 4 ? "−" : "+"}</span>
            </button>

            {openFaq === 4 && (
                <div className="px-5 pb-5 text-slate-600">
                    Yes. A portfolio showcasing your UI UX projects, case studies,
                    wireframes, prototypes, or design work is highly recommended.
                </div>
            )}
        </div>

        {/* FAQ 5 */}
        <div className="border rounded-2xl overflow-hidden">
            <button
                className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-slate-50 transition"
                onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
            >
                <span>What kind of projects will I work on?</span>
                <span>{openFaq === 5 ? "−" : "+"}</span>
            </button>

            {openFaq === 5 && (
                <div className="px-5 pb-5 text-slate-600">
                    You may work on websites, mobile applications, SaaS dashboards,
                    landing pages, design systems, and other digital products.
                </div>
            )}
        </div>

    </div>
</section>
                        </div>

                        {/* SIDEBAR */}
                        <div>

                            <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-28">
                                <h3 className="text-2xl font-bold mb-6">
                                    Why Join Nexify?
                                </h3>

                                <ul className="space-y-4 text-slate-700">
                                    <li>🎨 Work on exciting design projects</li>
                                    <li>🚀 Career growth opportunities</li>
                                    <li>🏠 Flexible remote work</li>
                                    <li>📚 Continuous learning and mentorship</li>
                                    <li>🤝 Collaborative team environment</li>
                                </ul>

                                <button
                                    onClick={() => setShowModal(true)}
                                    className="mt-3 items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition"
                                >
                                    Apply Now
                                </button> 


                                
                            </div>

                        </div>

                    </div>

                </div>
            </main>



            {showModal && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
                    <div className="relative w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl">

                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="absolute top-5 right-5 text-2xl text-slate-500 hover:text-slate-900"
                        >
                            ×
                        </button>

                        <h2 className="mb-2 text-3xl font-bold">
                            Apply for UI UX Designer Job
                        </h2>

                        <p className="mb-6 text-slate-600">
                            Fill out the form below and our team will review your application.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input
                                type="text"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 p-4"
                                required
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 p-4"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 p-4"
                                required
                            />

                            <input
                                type="url"
                                placeholder="Google Drive Resume Link"
                                value={resume}
                                onChange={(e) => setResume(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 p-4"
                            />

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700"
                            >
                                Submit Application
                            </button>

                        </form>
                    </div>
                </div>
            )}
            <Footer />
        </>

    );
}