import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { Button, Badge, Tag, HeroBackground } from '../components';
import { fadeUpItemVariants } from '../lib/motion';
import {
  ArrowRight,
  FileText,
  Mail,
  MapPin,
  Cpu,
  ShieldCheck,
} from 'lucide-react';

const PROFESSIONAL_FOCUS_TAGS = [
  'Applied AI',
  'AI Systems',
  'Backend Engineering',
  'FastAPI',
  'React',
  'Production Architecture',
  'RAG',
  'Agentic AI',
  'LLMs',
  'Cloud Infrastructure',
] as const;

// Clean engineering SVGs for exact branding and zero missing-symbol risks
const GitHubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.7a1.68 1.68 0 0 0-1.68 1.68c0 .93.75 1.69 1.68 1.69a1.69 1.69 0 0 0 1.69-1.69c0-.93-.76-1.68-1.69-1.68Z" />
  </svg>
);

export const HeroSection = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isReducedMotion = useReducedMotion();

  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure video pauses on desktop when loaded so scroll scrubbing has 100% control
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!isMobile && !isReducedMotion) {
      const onLoaded = () => {
        video.pause();
      };
      video.addEventListener('loadedmetadata', onLoaded);
      if (video.readyState >= 1) video.pause();
      return () => video.removeEventListener('loadedmetadata', onLoaded);
    } else {
      video.play().catch(() => {});
    }
  }, [isMobile, isReducedMotion]);

  // Track scroll progress across the 300vh storytelling track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Scroll-scrub the cinematic video smoothly (Scene 1 Workstation -> Scene 2 Portrait)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (isMobile || isReducedMotion) return;
    const video = videoRef.current;
    if (!video || Number.isNaN(video.duration) || video.duration <= 0) return;

    const targetTime = latest * video.duration;
    if (!video.seeking && Math.abs(video.currentTime - targetTime) > 0.03 && video.readyState >= 2) {
      video.currentTime = targetTime;
    }
  });

  // Apple-grade cinematic text transformations (Scene 1 Left -> Scene 2 Right)
  const textTranslateX = useTransform(
    scrollYProgress,
    [0.3, 0.72],
    ['0%', isDesktop && !isReducedMotion ? 'calc(100vw - 100% - 6rem)' : '0%']
  );
  const textTranslateY = useTransform(
    scrollYProgress,
    [0.3, 0.51, 0.72],
    [0, isReducedMotion ? 0 : 16, 0]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.51, 0.72, 1],
    [1, 1, isReducedMotion ? 0.92 : 0.88, 1, 1]
  );
  const textScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.51, 0.72, 1],
    [1, 1, isReducedMotion ? 1 : 0.985, 1, 1]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[300vh] bg-black text-left border-b border-surface-200/80 dark:border-surface-800/80"
    >
      {/* Sticky Cinematic Viewport Anchor */}
      <div className="sticky top-0 w-full h-screen overflow-hidden -mt-16 pt-24 md:pt-32 pb-12 flex flex-col justify-between bg-black z-10">
        {/* Pure Video Background Component (`Background_video_landig_1.mp4`) */}
        <HeroBackground videoRef={videoRef} autoPlay={isMobile || !!isReducedMotion} />

        <div className="w-full max-w-none px-6 sm:px-8 md:px-12 lg:px-16 relative z-10 my-auto text-left">
          <motion.div
            style={{
              x: textTranslateX,
              y: textTranslateY,
              opacity: textOpacity,
              scale: textScale,
            }}
            className="flex flex-col items-start text-left w-full max-w-3xl lg:max-w-4xl space-y-6 md:space-y-8 will-change-transform"
          >
            {/* Top Identity & Status Pill */}
            <motion.div variants={fadeUpItemVariants} className="flex flex-wrap items-center gap-3">
              <Badge variant="accent" showDot className="py-1 px-3 text-xs font-mono">
                AI SYSTEMS ENGINEER
              </Badge>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-content-tertiary">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  Pune, Maharashtra, India
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-status-success" />
                  Production-Ready Architecture
                </span>
              </div>
            </motion.div>

            {/* Primary Heading - Refined, Bold Engineering Statement */}
            <motion.div variants={fadeUpItemVariants} className="space-y-3 w-full max-w-4xl">
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-content-primary">
                Building Intelligent Software Systems for{' '}
                <span className="text-accent underline decoration-accent/30 decoration-wavy underline-offset-8">
                  Real Business Problems
                </span>
              </h1>
            </motion.div>

            {/* Supporting Text - Professional Introduction */}
            <motion.div variants={fadeUpItemVariants} className="space-y-3 w-full max-w-3xl">
              <p className="font-mono text-xs sm:text-sm font-semibold text-content-tertiary uppercase tracking-wider">
                PRATIK SANTOSH SAWANT <span className="text-accent font-normal">• APPLIED AI ENGINEER</span>
              </p>
              <p className="font-sans text-base sm:text-lg text-content-secondary leading-relaxed font-normal">
                I design production-grade AI systems, high-concurrency backend architectures, enterprise business platforms, and scalable full-stack applications engineered for resilience, low latency, and long-term maintainability.
              </p>
            </motion.div>

            {/* Professional Focus - Badges/Pills */}
            <motion.div variants={fadeUpItemVariants} className="space-y-2.5 pt-1 w-full">
              <div className="flex items-center gap-2 text-xs font-mono text-content-tertiary">
                <Cpu className="w-3.5 h-3.5 text-accent" />
                <span>CORE ARCHITECTURAL CAPABILITIES</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-0.5">
                {PROFESSIONAL_FOCUS_TAGS.map((tag) => (
                  <Tag key={tag} className="px-3 py-1.5 text-xs font-mono bg-surface-100/90 dark:bg-surface-800/90 hover:border-accent/40 transition-colors">
                    {tag}
                  </Tag>
                ))}
              </div>
            </motion.div>

            {/* Primary and Secondary CTA Section */}
            <motion.div
              variants={fadeUpItemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between w-full gap-6 pt-4 border-t border-surface-200/60 dark:border-surface-800/60"
            >
              {/* Primary Actions */}
              <div className="flex flex-wrap items-center gap-3.5">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/engineering-systems')}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  View Engineering Systems
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/resume')}
                  leftIcon={<FileText className="w-4 h-4 text-accent" />}
                  className="font-medium bg-background/80 backdrop-blur-xs"
                >
                  Download Resume
                </Button>
              </div>

              {/* Secondary Actions */}
              <div className="flex items-center gap-2 sm:self-center">
                <span className="text-xs font-mono text-content-tertiary mr-1 hidden lg:inline">
                  CONNECT:
                </span>
                <a
                  href="https://github.com/Pratiksawant14"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-md bg-surface-100 dark:bg-surface-800 text-content-secondary hover:text-content-primary hover:bg-surface-200 dark:hover:bg-surface-700 border border-surface-200 dark:border-surface-700 transition-colors"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratik-sawant-41475631b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-md bg-surface-100 dark:bg-surface-800 text-content-secondary hover:text-content-primary hover:bg-surface-200 dark:hover:bg-surface-700 border border-surface-200 dark:border-surface-700 transition-colors"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="mailto:pratiksawant1403@gmail.com"
                  aria-label="Direct Email"
                  className="p-2.5 rounded-md bg-surface-100 dark:bg-surface-800 text-content-secondary hover:text-content-primary hover:bg-surface-200 dark:hover:bg-surface-700 border border-surface-200 dark:border-surface-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
