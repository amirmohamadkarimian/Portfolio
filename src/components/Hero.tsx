export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container container">
        <div className="hero-grid">
          {/* Column 1: Left Content & Headline */}
          <div className="hero-col hero-left">
            <div className="headline-group">
              <h1 className="hero-title">
                <span className="hero-title-intro">
                  Hey There, I'm Amirmohamad
                </span>
                <br />
                <span className="hero-title-highlight">Frontend Developer</span>
              </h1>

              <div className="hero-bio-box">
                <p className="hero-tagline">
                  I build fast, scalable, and responsive web applications with a
                  focus on clean design and seamless user experiences.
                </p>
              </div>

              <div className="hero-actions" aria-label="Hero actions">
                <a className="btn btn-primary" href="#projects">
                  View My Work
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Contact Me
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="hero-socials">
                <a
                  href="mailto:karimian.dev@gmail.com"
                  className="hero-social-link"
                  title="Email Me (karimian.dev@gmail.com)"
                  aria-label="Email Contact"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/amirmohamadkarimian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  title="GitHub"
                  aria-label="GitHub Profile"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/amirmohammadkarimian/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  title="LinkedIn"
                  aria-label="LinkedIn Profile"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://t.me/codescoffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  title="Telegram"
                  aria-label="Telegram Channel"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transform: "translate(-1px, 1px)" }}
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/amirm.code/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  title="Instagram"
                  aria-label="Instagram Profile"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Center Image with Brush Backdrop & Stamp */}
          <div className="hero-col hero-center">
            <div className="portrait-stage">
              {/* Custom SVG Brush Stroke Background */}
              <svg
                className="brush-stroke-svg"
                viewBox="0 0 500 550"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M82.4 45.3C132.8 18.2 210.5 12.1 278.4 24.3C346.3 36.5 404.4 67 438.2 118.6C472 170.2 481.5 242.9 462.1 315.8C442.7 388.7 394.4 461.8 327.9 494.5C261.4 527.2 176.7 519.5 110.2 475.8C43.7 432.1 -4.6 352.4 1.2 280.2C7 208 66.9 143.3 82.4 45.3Z"
                  fill="#0D7C66"
                />
                <path
                  d="M120 70C200 40 330 35 410 90C490 145 470 250 440 340C410 430 330 480 230 490C130 500 40 430 30 330C20 230 40 100 120 70Z"
                  fill="#0D7C66"
                  opacity="0.85"
                />
              </svg>

              {/* Profile Picture Cutout */}
              <div className="portrait-frame">
                <img
                  src="selfie.png"
                  alt="Amirmohamad Karimian - Frontend Developer"
                  className="portrait-img"
                />
              </div>

              {/* Rotating Stamp Badge */}
              <div className="stamp-badge-wrapper">
                <div className="stamp-badge">
                  <svg className="stamp-text-svg" viewBox="0 0 100 100">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text
                      fontSize="8.3"
                      fontWeight="700"
                      letterSpacing="1.4"
                      fill="#0F2C3A"
                    >
                      <textPath href="#circlePath">
                        FRONTEND DEVELOPER • UI UX DESIGNER •
                      </textPath>
                    </text>
                  </svg>
                  <div className="stamp-center-icon">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0F2C3A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
