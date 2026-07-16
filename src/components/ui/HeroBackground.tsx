import { useEffect, useRef } from 'react';
import { useTheme } from '../../hooks';
import landingBg from '../../assets/landingpage_backgroun_1.png';

export const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Node architecture graph representing distributed systems & AI pipelines
    const nodeCount = Math.min(Math.floor((width * height) / 25000), 45);
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      connections: number[];
    }> = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.5 + 1,
        connections: [],
      });
    }

    // Precompute connections to form elegant architectural subnetworks
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          nodes[i].connections.push(j);
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = resolvedTheme === 'dark';
      const nodeColor = isDark ? 'rgba(148, 163, 184, 0.4)' : 'rgba(100, 116, 139, 0.35)';
      const accentColor = isDark ? 'rgba(59, 130, 246, 0.6)' : 'rgba(37, 99, 235, 0.5)';

      // Update positions and render lines
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Render connection lines
        for (let j = i + 1; j < nodes.length; j++) {
          const target = nodes[j];
          const dx = node.x - target.x;
          const dy = node.y - target.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 22500) { // < 150px
            const alpha = (1 - Math.sqrt(distSq) / 150) * (isDark ? 0.16 : 0.13);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = isDark ? `rgba(59, 130, 246, ${alpha})` : `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Render architectural nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = i % 5 === 0 ? accentColor : nodeColor;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Sleek Desk & Laptop Workspace Background Image */}
      <img
        src={landingBg}
        alt="Engineering Workspace Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-85 dark:opacity-80 transition-opacity duration-normal"
      />

      {/* Blueprint & Grid geometric lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-30" />
      
      {/* Dark/Light overlay gradient to ensure crisp text readability while showing desk edge-to-edge */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-transparent dark:from-surface-950/80 dark:via-surface-950/45 dark:to-transparent" />

      {/* Subtle Node Graph Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Subtle glow orb behind heading */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[750px] h-[300px] bg-accent/15 dark:bg-accent/20 blur-[130px] rounded-full" />
    </div>
  );
};
