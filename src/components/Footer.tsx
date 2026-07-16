import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

interface FooterLinks {
  [key: string]: string[];
}

const Footer: React.FC = () => {
  const footerLinks: FooterLinks = {
    Shop: [
      "New Arrivals",
      "Ready to Wear",
      "Unstitched",
      "Formals",
      "Luxury Pret",
      "Bridal",
      "Accessories",
    ],
    "Customer Service": [
      "Contact Us",
      "Track Order",
      "Store Locator",
      "Size Guide",
      "FAQs",
      "Shipping & Returns",
    ],
    "About Us": [
      "Our Story",
      "Careers",
      "Press",
      "Blog",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  };

  const socialLinks = [
    { icon: FiFacebook, href: "#", label: "Facebook" },
    { icon: FiInstagram, href: "#", label: "Instagram" },
    { icon: FiTwitter, href: "#", label: "Twitter" },
    { icon: FiYoutube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <p className="text-center font-playfair">MARIA.B</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 md:px-8">
              Pakistan's leading fashion brand, bringing you the finest in
              Eastern and Western wear since 1999.
            </p>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-6 font-playfair">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link: string) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <FiMapPin size={18} />
            <span>123 Fashion Avenue, Lahore, Pakistan</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <FiPhone size={18} />
            <span>+92 42 1234567</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <FiMail size={18} />
            <span>info@mariab.pk</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Maria B. All rights reserved. |
            Designed with ❤️ in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
