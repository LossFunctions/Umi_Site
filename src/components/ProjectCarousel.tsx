import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCarouselProps {
  projects: Project[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
  currentIndex,
  onIndexChange,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  const currentProject = projects[currentIndex];

  const goToNext = useCallback(() => {
    onIndexChange((currentIndex + 1) % projects.length);
  }, [currentIndex, projects.length, onIndexChange]);

  const goToPrev = useCallback(() => {
    onIndexChange(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  }, [currentIndex, projects.length, onIndexChange]);

  const togglePlayPause = () => {
    if (videoRef && currentProject.media.type === 'mp4') {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          goToPrev();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case 'Escape':
          event.preventDefault();
          if (currentProject.media.type === 'mp4') {
            togglePlayPause();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, currentProject.media.type, togglePlayPause]);

  // Reset video playback when project changes
  useEffect(() => {
    if (videoRef && currentProject.media.type === 'mp4') {
      setIsPlaying(true);
      videoRef.currentTime = 0;
      videoRef.play();
    }
  }, [currentIndex, videoRef, currentProject.media.type]);

  const renderMedia = () => {
    const { media } = currentProject;
    
    if (media.type === 'mp4') {
      return (
        <video
          ref={setVideoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsPlaying(true)}
        >
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    
    if (media.type === 'vimeo') {
      return (
        <iframe
          src={media.src}
          title={media.alt || currentProject.title}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      );
    }
    
    return (
      <img
        src={media.src}
        alt={media.alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    );
  };

  return (
    <>
      {/* Shadow + carousel card wrapper */}
      <div className="relative">
      {/* Wrapper with hard-shadow pattern identical to SummaryCard */}
      {/* Shadow */}
      <div className="absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>

      {/* Main carousel container */}
      <div className="relative z-20 bg-white rounded-xl border-[3px] border-gray-900 overflow-hidden aspect-video">
        {/* Media content directly in the main container */}
        {renderMedia()}
        
        {/* Play/Pause overlay for videos */}
        {currentProject.media.type === 'mp4' && (
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        )}
        
        {/* Navigation arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors group"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors group"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
        
        {/* Project indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => onIndexChange(index)}
              className={`w-3 h-3 rounded-full border-2 border-white transition-colors ${
                index === currentIndex ? 'bg-[#FE4A60]' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
      </div>

      {/* Keyboard hints (moved outside shadow wrapper so shadow matches card height) */}
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Use ← → arrow keys to navigate • Press Esc to pause video</p>
      </div>
    </>
  );
};

export default ProjectCarousel;