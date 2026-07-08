import { COUPLE } from '../data/content';
import AnimateIn from './AnimateIn';
import './Quote.css';

export default function Quote() {
  return (
    <section className="quote-section">
      <AnimateIn variant="fade-in">
        <div className="quote-section__mark">"</div>
        <blockquote className="quote-section__text serif">
          To love and be loved is to feel the sun from both sides.
        </blockquote>
        <p className="quote-section__names script">{COUPLE.full}</p>
      </AnimateIn>
    </section>
  );
}
