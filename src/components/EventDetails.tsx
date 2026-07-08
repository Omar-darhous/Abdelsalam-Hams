import { COUPLE, VENUE, WEDDING_DATE_DISPLAY } from '../data/content';
import AnimateIn from './AnimateIn';
import './EventDetails.css';

const cards = [
  {
    key: 'date',
    icon: (
      <div className="event-details__icon event-details__icon--calendar">
        <span className="event-details__cal-month">{WEDDING_DATE_DISPLAY.calMonth}</span>
        <span className="event-details__cal-day">{WEDDING_DATE_DISPLAY.calDay}</span>
      </div>
    ),
    label: 'DATE',
    main: WEDDING_DATE_DISPLAY.short,
    sub: '2026',
  },
  {
    key: 'time',
    icon: (
      <div className="event-details__icon event-details__icon--clock">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      </div>
    ),
    label: 'TIME',
    main: '6:00 PM',
    sub: 'Doors open at 5:30',
  },
  {
    key: 'venue',
    icon: (
      <div className="event-details__icon event-details__icon--venue">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M5 21V7l7-4 7 4v14" />
          <path d="M9 21v-6h6v6" />
        </svg>
      </div>
    ),
    label: 'VENUE',
    main: VENUE.main,
    sub: VENUE.sub,
  },
];

export default function EventDetails() {
  return (
    <section id="details" className="event-details">
      <AnimateIn>
        <h2 className="section-title">Event Details</h2>
        <div className="section-divider" />
      </AnimateIn>

      <div className="event-details__cards">
        {cards.map((card, i) => (
          <AnimateIn key={card.key} variant="fade-up" delay={i * 120}>
            <div className="event-details__card">
              {card.icon}
              <span className="event-details__label">{card.label}</span>
              <p className="event-details__main serif">{card.main}</p>
              <p className="event-details__sub serif">{card.sub}</p>
              {card.key === 'venue' && (
                <a
                  className="event-details__map-link"
                  href={VENUE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Location
                </a>
              )}
            </div>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn delay={400}>
        <div className="event-details__hashtag">
          <p className="event-details__tag script">{COUPLE.hashtag}</p>
          <p className="event-details__share">SHARE YOUR MOMENTS WITH US</p>
        </div>
      </AnimateIn>
    </section>
  );
}
