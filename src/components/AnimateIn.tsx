import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';
import './AnimateIn.css';

type AnimateVariant = 'fade-up' | 'fade-in' | 'scale' | 'slide-left' | 'slide-right';

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  variant?: AnimateVariant;
  delay?: number;
  immediate?: boolean;
}

export default function AnimateIn({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
  immediate = false,
}: AnimateInProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });
  const visible = immediate || inView;

  return (
    <div
      ref={ref}
      className={`animate-in animate-in--${variant} ${visible ? 'animate-in--visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
