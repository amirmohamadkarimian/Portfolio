import React, { useState } from "react";
import { Reveal } from "./Reveal";

interface ContactProps {
  onShowToast?: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onShowToast) {
        onShowToast("Thank you! Your message has been sent successfully.");
      }
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container container">
        <div className="contact-top-grid">
          {/* Left Side: CTA Heading & Information */}
          <Reveal className="reveal-left">
          <div className="contact-left-col">
            <div className="contact-cta-block">
              <h2 className="contact-heading">
                Let’s make something amazing together.
              </h2>
              <p className="contact-subtext">
                Have a project in mind, a question, or want to collaborate? Send me a message and I'll get back to you promptly.
              </p>
            </div>

            <div className="contact-details-grid">
              <div className="info-group">
                <h3 className="info-title">Information</h3>
                <p className="info-detail">Tehran, Iran</p>
                <p className="info-email-line">
                  <a href="mailto:karimian.dev@gmail.com" className="info-email">
                    karimian.dev@gmail.com
                  </a>
                </p>
                <p className="info-phone-line">
                  <a href="tel:+989940478850" className="info-phone">
                    +98 994 047 8850
                  </a>
                </p>
              </div>

              <div className="info-group">
                <h3 className="info-title">Connect</h3>
                <ul className="social-links-list">
                  <li>
                    <a
                      href="https://github.com/amirmohamadkarimian"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/amirmohammadkarimian/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/codescoffee"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Telegram ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/amirm.code/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram ↗
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </Reveal>

          {/* Right Side: Contact Form */}
          <Reveal className="reveal-right" delay={150}>
          <div className="contact-right-col">
            <div className="contact-form-card">
              <h3 className="form-card-title">Send a Message</h3>

              {isSubmitted && (
                <div className="form-success-banner">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Write your message here..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="submit-icon"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>
          </div>
          </Reveal>
        </div>

        {/* Footer Bottom Bar */}
        <Reveal>
        <div className="footer-bottom-bar">
          <div className="footer-brand">
            <a href="#hero" className="brand-logo cursive">
              Amirmohamad
            </a>
            <span className="copyright-text">© 2026. All Rights Reserved.</span>
          </div>

          <div className="footer-meta">
            <span className="meta-tag">
              Crafted with React, TypeScript & Passion
            </span>
            <a
              href="#hero"
              className="back-to-top-btn"
              aria-label="Back to Top"
            >
              <span>Top</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </a>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

