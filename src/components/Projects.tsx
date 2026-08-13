import React, { useRef, useState, useEffect } from "react";
import { PROJECTS_DATA } from "../data/portfolioData";

export const Projects: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [progressWidth, setProgressWidth] = useState(25);

  const cardWidth = 440; // Card width + gap

  const updateSliderState = () => {
    const sliderTrack = trackRef.current;
    if (!sliderTrack) return;

    const maxScroll = sliderTrack.scrollWidth - sliderTrack.clientWidth;
    const currentScroll = sliderTrack.scrollLeft;

    setPrevDisabled(currentScroll <= 10);
    setNextDisabled(currentScroll >= maxScroll - 10);

    if (maxScroll > 0) {
      const percentage = Math.min(
        100,
        Math.max(
          25,
          ((currentScroll + sliderTrack.clientWidth) /
            sliderTrack.scrollWidth) *
            100,
        ),
      );
      setProgressWidth(percentage);
    }
  };

  useEffect(() => {
    const sliderTrack = trackRef.current;
    if (!sliderTrack) return;

    updateSliderState();
    sliderTrack.addEventListener("scroll", updateSliderState, {
      passive: true,
    });
    window.addEventListener("resize", updateSliderState);

    return () => {
      sliderTrack.removeEventListener("scroll", updateSliderState);
      window.removeEventListener("resize", updateSliderState);
    };
  }, []);

  const handleNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  // Mouse drag support
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const sliderTrack = trackRef.current;
    if (!sliderTrack) return;

    isDragging.current = true;
    startX.current = e.pageX - sliderTrack.offsetLeft;
    scrollStart.current = sliderTrack.scrollLeft;
    sliderTrack.style.cursor = "grabbing";
    sliderTrack.style.scrollSnapType = "none";
  };

  const handleMouseLeaveOrUp = () => {
    const sliderTrack = trackRef.current;
    if (!sliderTrack || !isDragging.current) return;

    isDragging.current = false;
    sliderTrack.style.cursor = "";
    sliderTrack.style.scrollSnapType = "x mandatory";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const sliderTrack = trackRef.current;
    if (!sliderTrack || !isDragging.current) return;

    e.preventDefault();
    const x = e.pageX - sliderTrack.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderTrack.scrollLeft = scrollStart.current - walk;
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container container">
        {/* Header Row */}
        <div className="projects-header-row">
          <div className="projects-header-left">
            <h2 className="projects-title">My Latest Works</h2>
            <p className="projects-subtitle">
              Perfect solution for digital experience
            </p>
          </div>

          <div className="projects-header-right">
            <a
              href="https://github.com/amirmohamadkarimian?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="explore-more-link"
            >
              Explore More Works
              <svg
                width="18"
                height="18"
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

            {/* Slider Control Buttons */}
            <div className="slider-controls">
              <button
                id="slider-prev-btn"
                className="slider-arrow-btn"
                aria-label="Previous Project"
                disabled={prevDisabled}
                onClick={handlePrev}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button
                id="slider-next-btn"
                className="slider-arrow-btn"
                aria-label="Next Project"
                disabled={nextDisabled}
                onClick={handleNext}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Slider Carousel Stage */}
        <div className="projects-slider-wrapper">
          <div
            id="projects-slider-track"
            className="projects-slider-track"
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
          >
            {PROJECTS_DATA.map((proj) => (
              <article
                key={proj.id}
                className={`project-card ${proj.cardClass}`}
              >
                <div className="project-card-header">
                  <h3 className="project-category">{proj.category}</h3>
                  <h4 className="project-name">{proj.title}</h4>
                </div>

                {proj.image ? (
                  <div className="project-card-media">
                    <img
                      src={proj.image}
                      alt={`${proj.title} UI Mockup`}
                      className="project-img"
                    />
                  </div>
                ) : proj.mockupType === "mint" ? (
                  <div className="project-card-media mockup-mint-stage">
                    <div className="ui-mockup-canvas">
                      <div className="mockup-header-bar">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                        <span className="mockup-title-text">
                          design-system.tokens.json
                        </span>
                      </div>
                      <div className="mockup-body-content">
                        <div className="palette-swatches">
                          <span className="swatch sw-navy"></span>
                          <span className="swatch sw-teal"></span>
                          <span className="swatch sw-yellow"></span>
                          <span className="swatch sw-coral"></span>
                        </div>
                        <div className="mockup-component-row">
                          <div className="mockup-btn btn-sample-primary">
                            Primary Button
                          </div>
                          <div className="mockup-badge-sample">
                            Active Badge
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : proj.mockupType === "coral" ? (
                  <div className="project-card-media mockup-coral-stage">
                    <div className="ui-mockup-canvas">
                      <div className="mockup-header-bar">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                        <span className="mockup-title-text">
                          store.checkout.app
                        </span>
                      </div>
                      <div className="mockup-body-content store-grid-sample">
                        <div className="store-item-card">
                          <div className="store-img-placeholder"></div>
                          <div className="store-line short"></div>
                          <div className="store-line long"></div>
                        </div>
                        <div className="store-item-card">
                          <div className="store-img-placeholder"></div>
                          <div className="store-line short"></div>
                          <div className="store-line long"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="project-card-footer">
                  <div className="project-tags">
                    {proj.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="project-view-btn"
                    aria-label={`View ${proj.title} details`}
                  >
                    <svg
                      width="18"
                      height="18"
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
              </article>
            ))}
          </div>
        </div>

        {/* Slider Progress Bar */}
        <div className="slider-pagination-bar">
          <div
            id="slider-progress"
            className="slider-progress-fill"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};
