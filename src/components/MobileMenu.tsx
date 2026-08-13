import React, { useEffect, useRef } from 'react';

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
  const menuRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  // Lock body scroll and manage focus while the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Move focus into the drawer so keyboard users land on the first control
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = '';
      // Return focus to the hamburger button that opened the menu
      if (wasOpenRef.current) {
        const openBtn = document.getElementById('open-menu-btn');
        openBtn?.focus();
      }
    }

    wasOpenRef.current = isOpen;

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape and trap Tab focus within the open drawer
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

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
            ref={closeBtnRef}
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
