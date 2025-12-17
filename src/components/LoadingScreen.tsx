'use client';

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = '<Hello World />';

  // Typing animation
  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 100);

      return () => clearTimeout(timer);
    } else if (!isTypingComplete) {
      setIsTypingComplete(true);
    }
  }, [displayedText, isTypingComplete, fullText]);

  // Cursor blink animation
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  // Call onComplete after typing finishes and 1 second delay
  useEffect(() => {
    if (isTypingComplete) {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1000);

      return () => clearTimeout(completeTimer);
    }
  }, [isTypingComplete, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#f8fafc] flex flex-col items-center justify-center">
      {/* Typing Text with Cursor */}
      <div className="text-4xl font-bold font-mono text-[#0284c7] tracking-wide">
        {displayedText}
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
      </div>

      {/* Loading Bar */}
      <div className="mt-12 w-[200px] h-[2px] bg-gray-700 rounded overflow-hidden">
        <div
          className="h-full bg-blue-500 shadow-lg shadow-blue-500 animate-pulse"
          style={{
            width: '40%',
            animation: 'slideProgress 1.5s ease-in-out infinite',
          }}
        />
      </div>

      {/* CSS Animation for Loading Bar */}
      <style>{`
        @keyframes slideProgress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(400%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
