import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

interface FooterLinks {
  [key: string]: string[];
}

const Footer: React.FC = () => {
  const footerLinks: FooterLinks = {
    Information: [
      "Returns and Exchange",
      "Privacy Policy",
      "FAQs",
      "Store Locator",
      "Track Your Order",
      "Blogs",
    ],
    "Customer Care": [
      "About Maria.B",
      "Contact Us",
      "Careers",
      "Terms and Conditions",
    ],
  };

  const socialLinks = [
    { icon: FiYoutube, href: "#", label: "Youtube" },
    { icon: FiInstagram, href: "#", label: "Instagram" },
    { icon: FiFacebook, href: "#", label: "Facebook" },
    { icon: FiTwitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-white text-gray-800 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-4xl font-bold mb-4">MARIA.B.</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              5.5 KM, Raiwind Road (Near Fatehbad Village)
              <br />
              Lahore, Pakistan.
              <br />
              Call: +923111162742
              <br />
              WhatsApp: +923154001914
              <br />
              Email: help@mariab.ae
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link: string) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 text-sm hover:text-black transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026, Maria.B. Designs (PK) Powered by Shopify
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;