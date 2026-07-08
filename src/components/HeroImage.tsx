import { COUPLE, HERO_PHOTO } from '../data/content';
import AnimateIn from './AnimateIn';
import './HeroImage.css';

export default function HeroImage() {
  return (
    <section className="hero-image">
      <div className="hero-image__deco hero-image__deco--gold-tl" />
      <div className="hero-image__deco hero-image__deco--pink-ml" />
      <div className="hero-image__deco hero-image__deco--gold-bl" />
      <div className="hero-image__deco hero-image__deco--pink-br" />
      <div className="hero-image__line hero-image__line--tr" />
      <div className="hero-image__line hero-image__line--br" />

      <AnimateIn variant="scale" delay={100}>
        <div className="hero-image__frame">
          <img
            src={HERO_PHOTO}
            alt={`${COUPLE.name1} and ${COUPLE.name2}`}
            loading="lazy"
          />
        </div>
      </AnimateIn>
    </section>
  );
}
