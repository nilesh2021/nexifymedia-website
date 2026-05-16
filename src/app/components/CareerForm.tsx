import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function CareerForm() {

  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState("");

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    setError("");

    try {

      await emailjs.sendForm(

        "service_1mafq3h",
        "template_8qo8xva",
        form.current,
        "Jv-lCqWDru7C9PiVP"

      );

      setSubmitted(true);

      form.current.reset();

    } catch (err) {

      console.log(err);

      setError(
        "Something went wrong. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 md:p-10">

      {submitted ? (

        <div className="text-center py-10">

          <CheckCircle2 className="w-16 h-16 text-[#24c2f2] mx-auto mb-5" />

          <h3 className="text-3xl font-semibold text-white mb-4">
            Application Submitted
          </h3>

          <p className="text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
            Thank you for applying to NexifyMedia.
            Our team will review your application and
            contact you shortly.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="
              px-8
              py-4
              rounded-full
              bg-[#24c2f2]
              text-white
              hover:bg-[#1da8d4]
              hover:scale-105
              transition-all
              duration-300
              shadow-xl
            "
          >

            Submit Another Application

          </button>

        </div>

      ) : (

        <>

          <h3 className="text-2xl font-semibold text-white mb-8">
            Apply Now
          </h3>

          <form
  action="https://formsubmit.co/contact@nexifymedia.co.in"
  method="POST"
  className="space-y-6"
>

  {/* Disable captcha */}
  <input type="hidden" name="_captcha" value="false" />

  {/* Email Subject */}
  <input
    type="hidden"
    name="_subject"
    value="New Career Application - NexifyMedia"
  />

  {/* Redirect After Submit */}
  <input
    type="hidden"
    name="_next"
    value="https://nexifymedia.co.in/thank-you"
  />

  {/* Full Name */}
  <div>
    <label className="block text-sm text-gray-300 mb-2">
      Full Name
    </label>

    <input
      type="text"
      name="name"
      required
      placeholder="Enter your full name"
      className="
        w-full
        px-5
        py-4
        rounded-2xl
        bg-white/5
        border
        border-white/10
        focus:border-[#24c2f2]
        outline-none
        text-white
        placeholder:text-gray-500
      "
    />
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm text-gray-300 mb-2">
      Email Address
    </label>

    <input
      type="email"
      name="email"
      required
      placeholder="Enter your email"
      className="
        w-full
        px-5
        py-4
        rounded-2xl
        bg-white/5
        border
        border-white/10
        focus:border-[#24c2f2]
        outline-none
        text-white
        placeholder:text-gray-500
      "
    />
  </div>

  {/* Phone */}
  <div>
    <label className="block text-sm text-gray-300 mb-2">
      Phone Number
    </label>

    <input
      type="tel"
      name="phone"
      required
      placeholder="Enter your phone number"
      className="
        w-full
        px-5
        py-4
        rounded-2xl
        bg-white/5
        border
        border-white/10
        focus:border-[#24c2f2]
        outline-none
        text-white
        placeholder:text-gray-500
      "
    />
  </div>

  {/* Resume Link */}
  <div>
    <label className="block text-sm text-gray-300 mb-2">
      Resume / Portfolio Link (Optional)
    </label>

    <input
      type="url"
      name="resume"
      placeholder="Paste Google Drive, LinkedIn, or portfolio link"
      className="
        w-full
        px-5
        py-4
        rounded-2xl
        bg-white/5
        border
        border-white/10
        focus:border-[#24c2f2]
        outline-none
        text-white
        placeholder:text-gray-500
      "
    />
  </div>

  {/* Message */}
  <div>
    <label className="block text-sm text-gray-300 mb-2">
      Why do you want to join NexifyMedia? (Optional)
    </label>

    <textarea
      name="message"
      rows={5}
      placeholder="Write a short message..."
      className="
        w-full
        px-5
        py-4
        rounded-2xl
        bg-white/5
        border
        border-white/10
        focus:border-[#24c2f2]
        outline-none
        text-white
        placeholder:text-gray-500
        resize-none
      "
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="
      w-full
      py-4
      rounded-full
      bg-[#24c2f2]
      text-white
      font-medium
      hover:bg-[#1da8d4]
      hover:scale-[1.01]
      transition-all
      duration-300
      shadow-xl
    "
  >
    Submit Application
  </button>

</form>

        </>
      )}

    </div>
  );
}