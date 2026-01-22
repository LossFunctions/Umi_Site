import React, { useEffect, useRef, useState } from 'react';

const ASCIIName: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    char: string;
    opacity: number;
  }>>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = 1100;
    const height = 160;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Draw text to sample pixels
    ctx.fillStyle = '#000';
    ctx.font = 'bold 115px Inter, system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Umi Hussaini', width / 2, height / 2);

    const imageData = ctx.getImageData(0, 0, width * dpr, height * dpr);
    const pixels = imageData.data;

    // Sample particles - denser for cleaner letters
    const particles: Array<{
      x: number;
      y: number;
      char: string;
      opacity: number;
    }> = [];

    // Sample in CSS pixel space for consistent density across all DPI screens
    const step = 4; // CSS pixels - consistent visual spacing
    const binaryChars = '01';

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        // Convert CSS coordinates to canvas pixel coordinates for sampling
        const pixelX = Math.floor(x * dpr);
        const pixelY = Math.floor(y * dpr);
        const i = (pixelY * width * dpr + pixelX) * 4;
        const alpha = pixels[i + 3];

        // Higher threshold to avoid stray pixels
        if (alpha > 150) {
          const opacity = 0.75 + (alpha / 255) * 0.25;
          particles.push({
            x: x, // Store CSS coordinates for rendering
            y: y,
            char: binaryChars[Math.floor(Math.random() * 2)],
            opacity,
          });
        }
      }
    }

    particlesRef.current = particles;

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 1100;
    const height = 160;
    const hoverRadius = 12;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particlesRef.current.forEach((p) => {
        const dist = Math.sqrt(
          Math.pow(p.x - mousePos.x, 2) + Math.pow(p.y - mousePos.y, 2)
        );

        const isHovered = dist < hoverRadius;

        if (isHovered) {
          // Show binary code when hovered
          ctx.font = '6px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          // Occasionally flip the binary for animation
          const displayChar = Math.random() > 0.95
            ? (p.char === '0' ? '1' : '0')
            : p.char;

          ctx.fillStyle = `rgba(65, 65, 200, ${p.opacity})`;
          ctx.fillText(displayChar, p.x, p.y);
        } else {
          // Show solid dot
          ctx.fillStyle = `rgba(65, 65, 200, ${p.opacity})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <canvas
      ref={canvasRef}
      className="max-w-full h-auto cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default ASCIIName;
