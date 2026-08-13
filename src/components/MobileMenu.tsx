import React, { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
}

const MOBILE_NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, activeSection, onClose }) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      id="mobile-menu"
      className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
      aria-hidden={!isOpen}
      onClick={handleBackdropClick}
    >
      <div className="mobile-menu-container">
        <div className="mobile-menu-header">
          <a href="#hero" className="brand-logo cursive" onClick={onClose}>
            Amirmohamad
          </a>
          <button
            id="close-menu-btn"
            className="close-menu-btn"
            aria-label="Close Navigation Menu"
            onClick={onClose}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav className="mobile-nav-links">
          {MOBILE_NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`mobile-nav-link ${
                activeSection === link.id || (link.id === 'hero' && activeSection === 'hero')
                  ? 'active'
                  : ''
              }`}
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a
            href="CV Resume.pdf"
            download="Amirmohamad_Karimian_CV.pdf"
            className="btn btn-primary btn-full"
            onClick={onClose}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};
