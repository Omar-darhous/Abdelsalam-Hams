import { useState } from 'react';
import { COUPLE, WEDDING_DATE_DISPLAY } from '../data/content';
import './EnvelopeIntro.css';

interface EnvelopeIntroProps {
  onOpen: () => void;
}

export default function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const [phase, setPhase] = useState<'closed' | 'opening' | 'open'>('closed');

  const handleClick = () => {
    if (phase !== 'closed') return;
    setPhase('opening');
    setTimeout(() => setPhase('open'), 1200);
    setTimeout(() => onOpen(), 2200);
  };

  return (
    <div className={`envelope-intro envelope-intro--${phase}`}>
      <div className="envelope-intro__bg" />

      <p className="envelope-intro__arabic">
        خلي فرحك يتكلم عنك قبل ما يبدأ
      </p>

      <p className="envelope-intro__cta">
        <span className="envelope-intro__star">✦</span>
        CLICK TO OPEN
        <span className="envelope-intro__star">✦</span>
      </p>

      <button
        className="envelope-intro__scene"
        onClick={handleClick}
        aria-label="Open invitation"
        disabled={phase !== 'closed'}
      >
        <div className="envelope-intro__card">
          <div className="envelope-intro__card-stars">✦ ✦ ✦</div>
          <h2 className="envelope-intro__card-names script">{COUPLE.full}</h2>
          <p className="envelope-intro__card-sub">WEDDING INVITATION</p>
          <p className="envelope-intro__card-date serif">
            {WEDDING_DATE_DISPLAY.saveTheDate}
          </p>
        </div>

        <div className="envelope-intro__envelope">
          <div className="envelope-intro__flap" />
          <div className="envelope-intro__body">
            <div className="envelope-intro__seal">
              <span className="envelope-intro__monogram script">{COUPLE.monogram}</span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
