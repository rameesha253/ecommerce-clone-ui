import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-black text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-0">
              <input
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors text-sm"
                required
              />
              <button
                type="submit"
                className="px-6 py-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 text-sm tracking-wider uppercase font-medium"
              >
                <span className="hidden sm:inline">Subscribe</span>
                <FiSend size={18} />
              </button>
            </div>
            {isSubmitted && (
              <p className="text-green-400 mt-4 text-sm animate-fadeInUp">
                Thank you for subscribing!
              </p>
            )}
          </form>

          <p className="text-gray-500 text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
