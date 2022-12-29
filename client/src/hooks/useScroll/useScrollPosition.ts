import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}


function getScrollPosition(): ScrollPosition {
  return {x: window.pageXOffset, y: window.pageYOffset};
}

export function useScrollPosition(): ScrollPosition {
  const [position, setScrollPosition] = useState<ScrollPosition>(getScrollPosition());

  useEffect(() => {
    let requestRunning: number | null = null;
    function handleScroll() {
      if (requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition());
          requestRunning = null;
        });
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return position;
}

export function useScrollPositionX(): number {
  const { x } = useScrollPosition();
  return x;
}

export function useScrollPositionY(): number {
  const { y } = useScrollPosition();
  return y;
}