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
    <section className="py-12 bg-white text-black border-y border-gray-200">
      <div className="container-custom">
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            {/* Left-aligned text */}
            <div className="text-left w-full md:w-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-1">
                Join our newsletter
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                We'll send you updates once per week.
              </p>
            </div>

            {/* Form on the far right with wider email input */}
            <div className="w-full md:w-auto flex flex-col items-start md:items-end">
              <form 
                onSubmit={handleSubmit} 
                className="flex flex-col sm:flex-row w-full md:w-auto gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  placeholder="Enter your email"
                  /* Increased width using flex-1 and minimum width constraints */
                  className="w-full sm:min-w-[340px] md:min-w-[400px] px-4 py-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wider uppercase font-medium shrink-0"
                >
                  Subscribe
                  <FiSend size={16} />
                </button>
              </form>

              {/* Success message right-aligned below the form */}
              {isSubmitted && (
                <p className="text-green-600 mt-2 text-sm animate-fadeInUp">
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;