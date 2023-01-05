import { useState, useEffect } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

function getScrollPosition(): ScrollPosition {
  return { x: window.pageXOffset, y: window.pageYOffset };
}

export function useScrollPosition(): ScrollPosition {
  // This hook returns the current scroll position of the page
  // It updates the position whenever the user scrolls
  const [position, setScrollPosition] = useState<ScrollPosition>(
    getScrollPosition()
  );

  useEffect(() => {
    let requestRunning: number | null = null;
    function handleScroll() {
      if (requestRunning === null) {
        // Use requestAnimationFrame to throttle the scroll event
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition());
          requestRunning = null;
        });
      }
    }

    // add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Return a cleanup function to remove the event listener

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return position;
}

export function useScrollPositionX(): number {
  // Just returns the current x
  const { x } = useScrollPosition();
  return x;
}

export function useScrollPositionY(): number {
  // Just returns the current x
  const { y } = useScrollPosition();
  return y;
}
