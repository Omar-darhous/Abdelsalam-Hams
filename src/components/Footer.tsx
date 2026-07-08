import { COUPLE } from '../data/content';
import AnimateIn from './AnimateIn';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <AnimateIn variant="fade-in">
        <p className="footer__cta script">Want a creative Invitation?</p>
        <p className="footer__call script">Call Us</p>
        <p className="footer__credit">
          Made with love for {COUPLE.full}
        </p>
      </AnimateIn>
    </footer>
  );
}
