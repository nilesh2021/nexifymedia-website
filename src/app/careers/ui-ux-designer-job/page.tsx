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
                    content="Join Nexify Media as a UI UX Designer and create exceptional digital experiences."
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
                        <div className="grid md:grid-cols-4 gap-8">

                            <div>
                                <p className="text-slate-500 text-sm">Location</p>
                                <h3 className="font-bold text-xl">Remote</h3>
                            </div>

                            <div>
                                <p className="text-slate-500 text-sm">Job Type</p>
                                <h3 className="font-bold text-xl">Full-Time</h3>
                            </div>

                            <div>
                                <p className="text-slate-500 text-sm">Experience</p>
                                <h3 className="font-bold text-xl">1-3 Years</h3>
                            </div>



                            <div>
                                <p className="text-slate-500 text-sm">
                                    Salary
                                </p>
                                <h3 className="font-bold text-xl">
                                    ₹5K - ₹10K
                                </h3>
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
                                    className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition"
                                >
                                    Apply Now
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </main>
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
            </section><section className="bg-white rounded-3xl shadow-sm p-8 mt-8">
                <h2 className="text-3xl font-bold mb-6">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold text-xl">
                            Can freshers apply?
                        </h3>

                        <p className="text-slate-700 mt-2">
                            Freshers with a strong portfolio and knowledge of Figma and UX principles can apply.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl">
                            Is this a remote UI UX job?
                        </h3>

                        <p className="text-slate-700 mt-2">
                            Yes. This is a fully remote UI UX Designer position.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl">
                            Which design tools are required?
                        </h3>

                        <p className="text-slate-700 mt-2">
                            Figma is the primary design tool. Knowledge of Adobe XD and Photoshop is a plus.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl">
                            Do I need a portfolio?
                        </h3>

                        <p className="text-slate-700 mt-2">
                            Yes. A portfolio showcasing your UI UX projects is highly recommended.
                        </p>
                    </div>
                </div>
            </section>


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