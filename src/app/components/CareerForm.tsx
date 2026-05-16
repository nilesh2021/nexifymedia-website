import { useState } from "react";
import { Upload } from "lucide-react";

export default function CareerForm() {

  const [result, setResult] = useState("");

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.currentTarget);

    formData.append(
      "access_key",
      "8152f111-227a-4737-9f7a-48f995a81cf7"
    );

    try {

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log(data);

      if (data.success) {

        setResult("Application submitted successfully!");

        event.currentTarget.reset();

      } else {

        setResult(data.message || "Something went wrong.");

      }

    } catch (error) {

      console.log(error);

      setResult("Network error. Please try again.");

    }
  };

  return (

    <div className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 md:p-10">

      <h3 className="text-2xl font-semibold text-white mb-8">
        Apply Now
      </h3>

      <form
        onSubmit={onSubmit}
        className="space-y-6"
      >

        {/* SUBJECT */}
        <input
          type="hidden"
          name="subject"
          value="New Career Application - NexifyMedia"
        />

        {/* NAME */}
        <div>

          <label className="block text-sm text-gray-300 mb-2">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            required
            placeholder="Enter your full name"
            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#24c2f2]"
          />

        </div>

        {/* EMAIL */}
        <div>

          <label className="block text-sm text-gray-300 mb-2">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#24c2f2]"
          />

        </div>

        {/* PHONE */}
        <div>

          <label className="block text-sm text-gray-300 mb-2">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            required
            placeholder="Enter your phone number"
            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#24c2f2]"
          />

        </div>

        {/* RESUME */}
       {/* RESUME LINK */}
<div>

  <label className="block text-sm text-gray-300 mb-2">
    Resume / Portfolio Link (Optional)
  </label>

  <input
    type="url"
    name="resume_link"
    placeholder="Paste Google Drive, LinkedIn, or portfolio link"
    className="
      w-full
      px-5
      py-4
      rounded-2xl
      bg-white/5
      border
      border-white/10
      text-white
      outline-none
      focus:border-[#24c2f2]
    "
  />

</div>
        {/* MESSAGE */}
        <div>

          <label className="block text-sm text-gray-300 mb-2">
            Why do you want to join NexifyMedia? (Optional)
          </label>

          <textarea
            name="message"
            rows={5}
            placeholder="Write a short message..."
            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#24c2f2] resize-none"
          />

        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full py-4 rounded-full bg-[#24c2f2] text-white font-medium hover:bg-[#1da8d4] transition-all duration-300"
        >

          Submit Application

        </button>

        {/* RESULT */}
        {result && (
          <p className="text-center text-sm text-white">
            {result}
          </p>
        )}

      </form>

    </div>
  );
}