import React from 'react';
import { BLOG_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container container">
        {/* Blog Header Row */}
        <Reveal>
          <div className="blog-header-row">
            <div className="blog-header-left">
              <h2 className="blog-title">Articles & Insights</h2>
              <p className="blog-subtitle">
                Ideas, tutorials, and engineering notes on modern web
                architecture and UI/UX design.
              </p>
            </div>

            <div className="blog-header-right">
              <a
                href="https://dev.to"
                target="_blank"
                rel="noopener noreferrer"
                className="read-all-link"
              >
                Read All Articles
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
          </div>
        </Reveal>

        {/* Blog Cards Grid */}
        <div className="blog-grid">
          {BLOG_DATA.map((article, i) => (
            <Reveal key={article.id} className="reveal-scale" delay={i * 100}>
              <article className="blog-card">
                <div className="blog-card-meta">
                  <span className={`blog-category-tag ${article.categoryTagClass}`}>
                    {article.category}
                  </span>
                  <span className="blog-date">
                    {article.date} • {article.readTime}
                  </span>
                </div>

                <h3 className="blog-card-title">
                  <a href={article.url}>{article.title}</a>
                </h3>

                <p className="blog-card-excerpt">{article.excerpt}</p>

                <div className="blog-card-footer">
                  <a href={article.url} className="blog-read-btn">
                    <span>Read Article</span>
                    <svg
                      width="16"
                      height="16"
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
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
