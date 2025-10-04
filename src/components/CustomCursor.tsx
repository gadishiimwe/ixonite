import React, { useState, useEffect } from 'react';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
  isHidden: boolean;
}

const CustomCursor: React.FC = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    isClicking: false,
    isHidden: false
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
        isHidden: false
      }));
    };

    const handleMouseLeave = () => {
      setCursor(prev => ({ ...prev, isHidden: true }));
    };

    const handleMouseEnter = () => {
      setCursor(prev => ({ ...prev, isHidden: false }));
    };

    const handleMouseDown = () => {
      setCursor(prev => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursor(prev => ({ ...prev, isClicking: false }));
    };

    // Add event listeners for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], [tabindex]'
      );

      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          setCursor(prev => ({ ...prev, isHovering: true }));
        });
        element.addEventListener('mouseleave', () => {
          setCursor(prev => ({ ...prev, isHovering: false }));
        });
      });
    };

    // Initial setup
    addHoverListeners();

    // Global event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Re-add listeners when DOM changes (for SPA navigation)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${cursor.isHovering ? 'cursor-hover' : ''} ${
        cursor.isClicking ? 'cursor-click' : ''
      } ${cursor.isHidden ? 'cursor-hidden' : ''}`}
      style={{
        left: `${cursor.x}px`,
        top: `${cursor.y}px`,
      }}
    >
      <div className="cursor-dot" />
      <div className="cursor-ring" />
    </div>
  );
};

export default CustomCursor;
