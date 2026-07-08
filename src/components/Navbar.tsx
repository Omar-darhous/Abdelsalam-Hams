import { useState, type CSSProperties } from 'react';
import { COUPLE, navLinks } from '../data/content';
import './Navbar.css';

interface NavbarProps {
  visible?: boolean;
}

export default function Navbar({ visible = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${visible ? 'navbar--visible' : ''}`}>
      <a href="#home" className="navbar__logo script">
        {COUPLE.full}
      </a>

      <ul className="navbar__desktop-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <button
        className={`navbar__menu-btn ${menuOpen ? 'navbar__menu-btn--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`navbar__overlay ${menuOpen ? 'navbar__overlay--open' : ''}`}>
        <ul className="navbar__links">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              style={{ '--i': i } as CSSProperties}
            >
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
