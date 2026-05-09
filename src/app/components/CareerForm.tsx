import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function CareerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);

  const form = e.currentTarget;

  const formData = new FormData(form);

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/youremail@gmail.com",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success === "true" || data.success) {
      setSubmitted(true);
      form.reset();
    }
  } catch (error) {
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10">

  {!submitted ? (
    <>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="space-y-6"
      >

        <input
          type="hidden"
          name="_subject"
          value="New Career Application"
        />

        <input
          type="hidden"
          name="_captcha"
          value="false"
        />

        {/* Full Name */}
        <div>
          <label className="block mb-2 text-white font-medium">
            Full Name *
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
            className="
              w-full
              px-5 py-4
              rounded-2xl
              bg-white/5
              border border-white/10
              text-white
              placeholder:text-gray-400
              outline-none
              focus:border-[#24c2f2]
              focus:ring-2
              focus:ring-[#24c2f2]/20
              transition-all duration-300
            "
          />
        </div>

        {/* Email + Phone */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Email */}
          <div>
            <label className="block mb-2 text-white font-medium">
              Email Address *
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="
                w-full
                px-5 py-4
                rounded-2xl
                bg-white/5
                border border-white/10
                text-white
                placeholder:text-gray-400
                outline-none
                focus:border-[#24c2f2]
                focus:ring-2
                focus:ring-[#24c2f2]/20
                transition-all duration-300
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-white font-medium">
              Phone Number *
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              required
              className="
                w-full
                px-5 py-4
                rounded-2xl
                bg-white/5
                border border-white/10
                text-white
                placeholder:text-gray-400
                outline-none
                focus:border-[#24c2f2]
                focus:ring-2
                focus:ring-[#24c2f2]/20
                transition-all duration-300
              "
            />
          </div>

        </div>

        {/* Resume Upload */}
        <div>
          <label className="block mb-2 text-white font-medium">
            Upload Resume
          </label>

          <input
            type="file"
            name="attachment"
            className="
              w-full
              text-gray-300
              file:mr-4
              file:px-5
              file:py-3
              file:rounded-xl
              file:border-0
              file:bg-[#24c2f2]
              file:text-white
              file:cursor-pointer
              hover:file:bg-cyan-400
            "
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-[#24c2f2]
            to-[#202851]
            hover:scale-[1.02]
            transition-all
            duration-300
            shadow-2xl
            font-semibold
            text-white
            flex
            items-center
            justify-center
            gap-3
            disabled:opacity-70
            cursor-pointer
          "
        >

          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>

              <span>Submitting...</span>
            </>
          ) : (
            "Submit Application"
          )}

        </button>

      </form>
    </>
  ) : (
    <div className="text-center py-10">

      <div className="flex justify-center mb-6">

        <div
          className="
            w-20 h-20 rounded-3xl
            bg-gradient-to-br from-emerald-400 to-emerald-600
            flex items-center justify-center
            shadow-[0_10px_40px_rgba(16,185,129,0.35)]
          "
        >

          <CheckCircle2 className="w-10 h-10 text-white stroke-[2.5]" />

        </div>

      </div>

      <h3 className="text-3xl font-bold text-white mb-3">
        Application Submitted
      </h3>

      <p className="text-gray-400 text-lg leading-8">
        Thank you for applying. Our team will review your
        application and contact you soon.
      </p>

      <button
        onClick={() => setSubmitted(false)}
        className=" 
        mt-8
    px-8
    py-4
    mx-auto
    rounded-2xl
    bg-gradient-to-r
    from-[#24c2f2]
    to-[#202851]
    hover:scale-[1.02]
    transition-all
    duration-300
    shadow-2xl
    font-semibold
    text-white
    flex
    items-center
    justify-center
    gap-3
    disabled:opacity-70
    cursor-pointer
        "
      >
        Submit Another Response
      </button>

    </div>
  )}

</div>
  );
}