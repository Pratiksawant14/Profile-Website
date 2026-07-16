import React from 'react';
import heroVideo from '../../assets/Background_video_landig_1.mp4';

interface HeroBackgroundProps {
  videoRef?: React.RefObject<HTMLVideoElement | null>;
  autoPlay?: boolean;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ videoRef, autoPlay = false }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-black">
      {/* Pure Black Background with High Quality Cinematic Video (`Background_video_landig_1.mp4`) */}
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay={autoPlay}
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center bg-black transition-opacity duration-700"
      />
    </div>
  );
};
