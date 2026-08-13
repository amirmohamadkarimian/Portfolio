import React from "react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container container">
        <div className="contact-top-grid">
          {/* Left CTA Heading */}
          <div className="contact-cta-block">
            <h2 className="contact-heading">
              Let’s make something amazing together.
            </h2>

            <div className="contact-action-wrapper">
              <span className="sub-label">Start by</span>
              <a
                href="mailto:karimian.dev@gmail.com"
                className="saying-hi-link"
              >
                saying hi
                <svg
                  className="arrow-icon"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Information & Links */}
          <div className="contact-info-block">
            <div className="info-group">
              <h3 className="info-title">Information</h3>
              <p className="info-detail">Tehran, Iran</p>
              <p className="info-email-line">
                <a href="mailto:karimian.dev@gmail.com" className="info-email">
                  karimian.dev@gmail.com
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

        {/* Footer Bottom Bar */}
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
      </div>
    </section>
  );
};
