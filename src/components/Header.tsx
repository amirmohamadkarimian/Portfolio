import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
  onOpenMenu: () => void;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'blog', label: 'BLOG' },
  { id: 'contact', label: 'CONTACT' },
];

export const Header: React.FC<HeaderProps> = ({ isScrolled, activeSection, onOpenMenu }) => {
  return (
    <header id="site-header" className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container container">
        {/* Logo Signature */}
        <a href="#hero" className="brand-logo cursive" aria-label="Amirmohamad Karimian Home">
          Amirmohamad
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  <span className="pill-wrapper">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Action Group */}
        <div className="header-actions">
          <a
            href="CV Resume.pdf"
            download="Amirmohamad_Karimian_CV.pdf"
            className="btn btn-cv-download"
            aria-label="Download Amirmohamad Karimian CV PDF"
          >
            <svg
              className="icon-dl"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Download CV</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            id="open-menu-btn"
            className="hamburger-btn"
            aria-label="Open Navigation Menu"
            onClick={onOpenMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
