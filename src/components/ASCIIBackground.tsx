import React, { useEffect, useRef } from 'react';

const ASCIIBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // ASCII characters for the effect
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = Math.floor(canvas.offsetWidth / fontSize);

    // Array of drops - one per column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Opacity for each column
    const opacities: number[] = [];
    for (let i = 0; i < columns; i++) {
      opacities[i] = Math.random() * 0.5 + 0.1;
    }

    let animationId: number;

    const draw = () => {
      // Fade effect
      ctx.fillStyle = 'rgba(250, 249, 248, 0.05)';
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];

        // Calculate position
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Color with varying opacity - using the accent blue
        ctx.fillStyle = `rgba(16, 16, 248, ${opacities[i] * 0.15})`;
        ctx.fillText(char, x, y);

        // Reset drop if off screen
        if (y > canvas.offsetHeight && Math.random() > 0.975) {
          drops[i] = 0;
          opacities[i] = Math.random() * 0.5 + 0.1;
        }

        // Move drop down
        drops[i] += 0.3;
      }

      animationId = requestAnimationFrame(draw);
    };

    // Start slower to reduce initial visual noise
    setTimeout(() => {
      draw();
    }, 500);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};

export default ASCIIBackground;
