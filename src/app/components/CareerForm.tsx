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
    <div className="bg-white  rounded-2xl">

      {!submitted ? (
        <>
       

          <form onSubmit={handleSubmit} encType="multipart/form-data">

        
            <input
            className=""
              type="hidden"
              name="_subject"
              value="New Career Application"
            />

          
            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

           
            <div className="mb-4">
              <label className="block mb-2 text-[#202851] ">
               <b> Full Name *</b>
              </label>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className=" w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#24c2f2] text-[#202851]"
              />
            </div>

            {/* Phone */}

             <div className="grid md:grid-cols-2 gap-6">
            <div className="mb-4">
                
              <label className="block mb-2 text-[#202851] ">
              <b>  Email *</b>
              </label>

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#24c2f2] text-[#202851]"
              />
            </div> 

              <div className="mb-4">
                
              <label className="block mb-2 text-[#202851] ">
              <b>  Phone Number *</b>
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#24c2f2] text-[#202851]"
              />
            </div> 
            </div>

            {/* Resume */}
            <div className="mb-6">
              <label className="block mb-2 text-[#202851]">
              <b>  Upload Resume</b>
              </label>

              <input
                type="file"
                name="attachment"
                className="w-full file"
               
              />
            </div>

          <button
  type="submit"
  disabled={loading}
  className="cursor-pointer w-full bg-[#202851] text-white py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-90"
>
  {loading ? (
    <>
      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      <span className="tracking-wide">Submitting...</span>
    </>
  ) : (
    "Submit Application"
  )}
</button>
          </form>
        </>
      ) : (
        <div className="text-center py-10">
          <div className="text-5xl mb-4">✅</div>

          <h3 className="text-2xl font-bold text-[#202851] mb-2">
            Application Submitted
          </h3>

          <p className="text-gray-600">
            Thank you for applying. We will contact you soon.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 px-6 py-3 bg-[#202851] text-white rounded-xl cursor-pointer"
          >
            Submit Another Response
          </button>
        </div>
      )}
    </div>
  );
}