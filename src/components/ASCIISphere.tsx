import React, { useEffect, useRef, useState } from 'react';

const ASCIISphere: React.FC = () => {
  const [frame, setFrame] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let lastTime = 0;
    const fps = 15; // Lower FPS for ASCII aesthetic
    const interval = 1000 / fps;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= interval) {
        setFrame((prev) => (prev + 1) % 360);
        lastTime = currentTime;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Generate ASCII sphere
  const generateSphere = () => {
    const width = 40;
    const height = 20;
    const chars = ' .:-=+*#%@';
    const lines: string[] = [];
    const angleX = frame * 0.02;
    const angleY = frame * 0.03;

    for (let j = 0; j < height; j++) {
      let line = '';
      for (let i = 0; i < width; i++) {
        // Map to sphere coordinates
        const x = (i / width - 0.5) * 2;
        const y = (j / height - 0.5) * 2;
        const r2 = x * x + y * y;

        if (r2 > 1) {
          line += ' ';
        } else {
          const z = Math.sqrt(1 - r2);

          // Rotate
          const rx = x * Math.cos(angleY) + z * Math.sin(angleY);
          const ry = y * Math.cos(angleX) - Math.sqrt(1 - rx * rx - y * y) * Math.sin(angleX);
          const rz = -x * Math.sin(angleY) + z * Math.cos(angleY);

          // Lighting
          const light = rx * 0.5 + ry * 0.5 + rz * 0.7;
          const intensity = Math.max(0, Math.min(1, (light + 1) / 2));
          const charIndex = Math.floor(intensity * (chars.length - 1));

          line += chars[charIndex];
        }
      }
      lines.push(line);
    }

    return lines;
  };

  const sphereLines = generateSphere();

  return (
    <div ref={containerRef} className="font-mono text-[8px] md:text-[10px] leading-[1.1] text-accent-blue/30 select-none whitespace-pre">
      {sphereLines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
};

export default ASCIISphere;
