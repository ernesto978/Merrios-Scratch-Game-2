
import React, { useRef, useEffect, useState } from 'react';
import { Dice } from './Dice';

interface ScratchRowProps {
  id: number;
  diceValues: number[];
  onRevealed: () => void;
}

export const ScratchRow: React.FC<ScratchRowProps> = ({ id, diceValues, onRevealed }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isDrawingRef = useRef(false);
  const hasInitializedRef = useRef(false);

  // Initial Setup: Runs only once
  useEffect(() => {
    const initCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas || hasInitializedRef.current) return;

      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      if (width === 0 || height === 0) {
        requestAnimationFrame(initCanvas);
        return;
      }

      canvas.width = width;
      canvas.height = height;

      // 1. Create a metallic silver gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#e2e8f0'); // Very light silver
      gradient.addColorStop(0.2, '#94a3b8'); // Medium silver
      gradient.addColorStop(0.5, '#cbd5e1'); // Light silver
      gradient.addColorStop(0.8, '#64748b'); // Darker silver shadow
      gradient.addColorStop(1, '#94a3b8');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Add "brushed metal" texture
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 400; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const len = Math.random() * 80 + 20;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + len, y + (Math.random() - 0.5) * 2);
        ctx.stroke();
      }

      // 3. Add grain/noise
      for (let i = 0; i < 5000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const shade = Math.floor(Math.random() * 50 + 100);
        const opacity = Math.random() * 0.3;
        ctx.fillStyle = `rgba(${shade}, ${shade}, ${shade}, ${opacity})`;
        ctx.fillRect(x, y, 1, 1);
      }

      // 4. Subtle "engraved" look for the text
      ctx.font = 'bold 24px Montserrat';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Shadow/Inner bevel effect for text
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillText('GRATTEZ ICI', canvas.width / 2 + 1, canvas.height / 2 + 1);
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fillText('GRATTEZ ICI', canvas.width / 2, canvas.height / 2);

      hasInitializedRef.current = true;
    };

    initCanvas();
  }, []);

  const checkReveal = () => {
    const canvas = canvasRef.current;
    if (!canvas || canvas.width === 0 || canvas.height === 0) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let transparentPixels = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] < 128) transparentPixels++;
      }
      const percentage = (transparentPixels / (pixels.length / 4)) * 100;
      if (percentage > 55 && !isRevealed) {
        setIsRevealed(true);
        onRevealed();
      }
    } catch (e) {
      console.warn("Could not check reveal status:", e);
    }
  };

  const getPointerPos = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    
    let clientX, clientY;
    if ('touches' in e) {
      const touch = (e as TouchEvent).touches[0];
      clientX = touch.clientX;
      clientY = touch.clientY;
    } else {
      clientX = (e as MouseEvent).clientX;
      clientY = (e as MouseEvent).clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    isDrawingRef.current = true;
    draw(e);
  };

  const stopDrawing = () => {
    if (isDrawingRef.current) {
      isDrawingRef.current = false;
      checkReveal();
    }
  };

  const draw = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!isDrawingRef.current || isRevealed) return;
    
    const canvas = canvasRef.current;
    if (!canvas || canvas.width === 0 || canvas.height === 0) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getPointerPos(e);

    ctx.globalCompositeOperation = 'destination-out';
    
    // Create a "rough" brush by drawing multiple jittered circles
    // and using a slightly irregular shape
    ctx.beginPath();
    
    // Main scratch circle
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    
    // Add "rough edges" particles
    for (let i = 0; i < 8; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 20 + 10;
        const rx = x + Math.cos(angle) * dist;
        const ry = y + Math.sin(angle) * dist;
        const size = Math.random() * 8 + 4;
        ctx.moveTo(rx + size, ry);
        ctx.arc(rx, ry, size, 0, Math.PI * 2);
    }
    
    ctx.fill();
  };

  useEffect(() => {
    const handleGlobalUp = () => stopDrawing();
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchend', handleGlobalUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [isRevealed]);

  return (
    <div className="relative w-full h-24 md:h-32 bg-emerald-950/40 rounded-lg flex items-center justify-around px-4 md:px-8 border-2 border-amber-900/30 overflow-hidden shadow-inner">
      <div className="flex gap-4 md:gap-12">
        {diceValues.map((val, idx) => (
          <Dice key={idx} value={val} className="transform scale-90 md:scale-100" />
        ))}
      </div>
      {!isRevealed && (
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          className="absolute inset-0 w-full h-full rounded-lg touch-none scratch-canvas transition-opacity duration-300"
        />
      )}
      {/* Revealed Glow Effect */}
      {isRevealed && (
        <div className="absolute inset-0 bg-white/5 pointer-events-none animate-pulse" />
      )}
    </div>
  );
};
