import { memoryPhotos } from '../data/content';
import AnimateIn from './AnimateIn';
import './Memories.css';

export default function Memories() {
  return (
    <section id="memories" className="memories">
      <AnimateIn>
        <h2 className="section-title">Our Memories</h2>
        <div className="section-divider" />
      </AnimateIn>

      <div className="memories__gallery">
        {memoryPhotos.map((photo, index) => (
          <AnimateIn key={`${photo.src}-${index}`} variant="scale" delay={index * 120}>
            <div className="memories__card">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
