import { useState } from 'react';
import { Briefcase, Upload, X, CheckCircle2 } from 'lucide-react';
import CareerForm from './CareerForm';

export default function Career() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setResume(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', coverLetter: '' });
      setResume(null);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div> 
    <section id="internship-program" className="py-24 bg-gradient-to-br from-[#202851] to-[#2a3561] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be part of a dynamic team that's shaping the future of digital marketing
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className=" rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10  p-8 md:p-12 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#24c2f2] rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">SEO Intern</h3>
                <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                  <span className="px-3 py-1 bg-white/10 rounded-full">Internship</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full">Remote</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full">3-6 months</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6 text-gray-300">
              <p>
                We're looking for a passionate SEO Intern to join our growing team. This is an excellent
                opportunity to learn and grow in the digital marketing field.
              </p>
              <div>
                <h4 className="text-white mb-2">Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Assist with keyword research and SEO optimization</li>
                  <li>Support content marketing and link-building activities</li>
                  <li>Monitor basic SEO performance metrics</li>
                 
                </ul>
              </div>
              <div>
                <h4 className="text-white mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Basic knowledge of SEO concepts</li>
                  <li>Good communication and analytical skills</li>
                  <li>Willingness to learn digital marketing tools and strategies</li>
              
                </ul>
              </div>
            </div>


            
          </div>
          <div className="bg-light rounded-3xl ">
            <h3 className="text-2xl mb-6 text-[#fff]">Apply for This Position</h3>
          <CareerForm/>
  </div>
         
        </div>
      </div>

  


        
      </section>

      

</div>

  );
}
