import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Instagram, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [status, setStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_3nvr0s8',    
        'template_chhnp8m',   
        formRef.current,
        'Gjc83cBO5IVx9gnwS'    
      )
      .then(() => {
        formRef.current?.reset();
        navigate('/thank-you');
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('Something went wrong. Please try again later.');
      });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 py-12 pt-32">
        <h1 className="text-4xl font-light tracking-widest uppercase mb-12 text-center">
          Get in Touch
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Map Section */}
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-md border border-white/20 max-h-[560px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3237.192681325723!2d10.797754999999999!3d35.770643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQ2JzE0LjMiTiAxMMKwNDcnNTEuOSJF!5e0!3m2!1sfr!2stn!4v1753963735717!5m2!1sfr!2stn"
              className="w-full h-full min-h-[530px] border-none"
              style={{ filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info & Form */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-6 space-y-2">
              <p className="text-lg">
                Email: <span className="font-light">contact@syrinejemalarchitects.com</span>
              </p>
              <p className="text-lg">
                Phone: <span className="font-light">+216 94972645</span>
              </p>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <a
                href="https://www.instagram.com/syrinejemalstudio/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/21694972645"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/syrinejemal/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-1 uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-transparent border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-1 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-transparent border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-1 uppercase">
                  Project Details
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  placeholder="Describe your project..."
                  className="w-full px-4 py-3 bg-transparent border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-white text-black px-8 py-3 uppercase font-medium tracking-wide hover:bg-white/90 transition"
              >
                Send Message
              </button>

              {status && (
                <p
                  className={`mt-2 ${
                    status === 'Message sent!' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
