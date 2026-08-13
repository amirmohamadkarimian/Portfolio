import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container container">
        <div className="about-grid">
          {/* Left Column: Service & Specialty Cards Stack */}
          <div className="about-cards-col">
            {SERVICES_DATA.map((service) => (
              <div key={service.id} className="service-card">
                <div className={`service-icon-circle ${service.iconBgClass}`}>
                  {service.iconSvg}
                </div>
                <div className="service-info">
                  <h3 className="service-title">{service.title}</h3>
                  <span className="service-count">{service.count}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Content & Stats */}
          <div className="about-content-col">
            <span className="section-tag">/ 01 — ABOUT</span>
            <h2 className="about-heading">What do I help?</h2>

            <div className="about-text-body">
              <p>
                I help ambitious founders and engineering teams transform
                complex ideas into polished, high-performance web products. By
                blending engineering precision in React, Next.js, and
                TypeScript with human-centered UI/UX design, I craft
                interfaces that look stunning and perform effortlessly.
              </p>
              <p>
                My workflow focuses on component modularity, clean state
                management, responsive accessibility, and speed—ensuring every
                product not only meets business goals but also delights its
                users.
              </p>
            </div>

            {/* Real Sourced Stats Block */}
            <div className="about-stats-row">
              <div className="stat-item">
                <div className="stat-number">45+</div>
                <div className="stat-label">Project Completed</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
