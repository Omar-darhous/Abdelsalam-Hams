import { timelineEvents } from '../data/content';
import AnimateIn from './AnimateIn';
import './LoveStory.css';

export default function LoveStory() {
  return (
    <section id="story" className="love-story">
      <AnimateIn>
        <h2 className="section-title">Our Love Story</h2>
        <div className="section-divider" />
      </AnimateIn>

      <div className="love-story__timeline">
        {timelineEvents.map((event, i) => (
          <AnimateIn key={event.year} variant="slide-left" delay={i * 150}>
            <div className="love-story__item">
              <div className="love-story__icon-wrap">
                <div className="love-story__icon">{event.icon}</div>
                {i < timelineEvents.length - 1 && (
                  <div
                    className="love-story__line"
                    style={{ animationDelay: `${i * 150 + 300}ms` }}
                  />
                )}
              </div>
              <div className="love-story__content">
                <span className="love-story__year cinzel">{event.year}</span>
                <h3 className="love-story__event-title cinzel">{event.title}</h3>
                <p className="love-story__desc">{event.description}</p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
