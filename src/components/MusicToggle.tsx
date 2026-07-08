import { useMusic } from '../context/MusicContext';
import './MusicToggle.css';

export default function MusicToggle() {
  const { playing, toggle } = useMusic();

  return (
    <button
      className={`music-toggle ${playing ? 'music-toggle--playing' : ''}`}
      onClick={toggle}
      aria-label={playing ? 'Pause music' : 'Play music'}
      title={playing ? 'Pause — كل يوم أحلى يوم' : 'Play — كل يوم أحلى يوم'}
    >
      {playing ? '♫' : '♪'}
    </button>
  );
}
