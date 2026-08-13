import React from "react";

interface HeroProps {
  onCopyEmail: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail }) => {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = "karimian.dev@gmail.com";

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          onCopyEmail("Email address copied to clipboard!");
        })
        .catch(() => {
          window.location.href = `mailto:${email}`;
        });
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container container">
        <div className="hero-grid">
          {/* Column 1: Left Content & Headline */}
          <div className="hero-col hero-left">
            <div className="headline-group">
              <h1 className="hero-title">
                Hey There,
                <br />
                <span className="hero-title-highlight">I'm Amirmohamad</span>
              </h1>
              <div className="email-direct-wrapper">
                <a
                  href="mailto:karimian.dev@gmail.com"
                  id="hero-email-btn"
                  className="email-direct-link"
                  title="Click to email or copy address"
                  onClick={handleEmailClick}
                >
                  karimian.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="hero-experience-card">
              <div className="exp-number">5+</div>
              <div className="exp-label">
                <strong>YEARS</strong>
                <span>EXPERIENCE</span>
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
                      fontSize="8.8"
                      fontWeight="700"
                      letterSpacing="1.4"
                      fill="#0F2C3A"
                    >
                      <textPath href="#circlePath">
                        FRONTEND DEVELOPER • UI/UX DESIGNER •
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

          {/* Column 3: Right Bio Tagline */}
          <div className="hero-col hero-right">
            <div className="hero-bio-box">
              <p className="hero-tagline">
                I design & build beautifully simple, scalable web applications,
                and I love what I do.
              </p>
              <div className="role-pills">
                <span className="role-pill">React & Next.js</span>
                <span className="role-pill">TypeScript</span>
                <span className="role-pill">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
