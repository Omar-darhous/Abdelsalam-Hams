import { COUPLE, VENUE } from '../data/content';
import AnimateIn from './AnimateIn';
import Countdown from './Countdown';
import './SaveTheDate.css';

const particles = [
  { top: '18%', left: '12%', delay: '0s', size: 4 },
  { top: '28%', left: '78%', delay: '0.8s', size: 5 },
  { top: '62%', left: '8%', delay: '1.4s', size: 3 },
  { top: '72%', left: '85%', delay: '0.4s', size: 4 },
  { top: '45%', left: '92%', delay: '1.8s', size: 3 },
  { top: '55%', left: '5%', delay: '1.1s', size: 5 },
];

export default function SaveTheDate() {
  return (
    <section id="home" className="save-the-date">
      <div className="save-the-date__corner save-the-date__corner--tl" />
      <div className="save-the-date__corner save-the-date__corner--br" />

      <div className="save-the-date__particles" aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            className="save-the-date__particle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <AnimateIn immediate delay={200}>
        <div className="save-the-date__header">
          <h1 className="save-the-date__title cinzel">
            <span>SAVE</span>
            <span className="save-the-date__the script">the</span>
            <span>DATE</span>
          </h1>
        </div>
      </AnimateIn>

      <AnimateIn immediate delay={400}>
        <p className="save-the-date__subtitle">FOR THE WEDDING OF</p>
      </AnimateIn>

      <AnimateIn immediate delay={550}>
        <div className="save-the-date__divider">
          <span className="save-the-date__leaf">❧</span>
        </div>
      </AnimateIn>

      <AnimateIn immediate delay={700}>
        <div className="save-the-date__names">
          <h2 className="save-the-date__name cinzel">{COUPLE.name1.toUpperCase()}</h2>
          <div className="save-the-date__and">
            <span className="save-the-date__and-line" />
            <span className="save-the-date__and-text">AND</span>
            <span className="save-the-date__and-line" />
          </div>
          <h2 className="save-the-date__name cinzel">{COUPLE.name2.toUpperCase()}</h2>
        </div>
      </AnimateIn>

      <AnimateIn immediate delay={900}>
        <div className="save-the-date__venue serif">
          <p>
            {VENUE.main}
            <br />
            {VENUE.sub}
          </p>
          <a
            className="save-the-date__map-link"
            href={VENUE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Location
          </a>
        </div>
      </AnimateIn>

      <AnimateIn immediate delay={1100}>
        <Countdown />
      </AnimateIn>

      <div className="save-the-date__sparkles" aria-hidden="true" />
    </section>
  );
}
