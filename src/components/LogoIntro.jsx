import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiVolume2 } from 'react-icons/fi';

const CLOUDINARY_VIDEO_URL = 'https://res.cloudinary.com/pcggq4wl/video/upload/MRUGANAYANI_5.mp4';
const CLOUDINARY_IFRAME_URL = 'https://player.cloudinary.com/embed/?cloud_name=pcggq4wl&public_id=MRUGANAYANI_5';

export default function LogoIntro({ onIntroFinish, onRevealStart }) {
  const videoRef = useRef(null);
  const [useIframeFallback, setUseIframeFallback] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showSoundHint, setShowSoundHint] = useState(false);
  const isMobileRef = useRef(false);
  const transitionStartedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    isMobileRef.current = isMobile;

    if (isMobile) {
      document.documentElement.classList.add('logo-intro-mobile-active');
      document.body.classList.add('logo-intro-mobile-active');
    }

    // Mobile intro is always silent so it can autoplay without controls or prompts.
    video.muted = isMobile;
    video.volume = isMobile ? 0 : 1.0;
    video.playbackRate = 1.25;
    
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          if (!isMobileRef.current) setShowSoundHint(false);
        })
        .catch(() => {
          // Desktop browsers may block sound; mobile stays silent without a prompt.
          video.muted = true;
          video.volume = 0;
          if (!isMobileRef.current) setShowSoundHint(true);
          video.play().catch(() => {
            setUseIframeFallback(true);
          });
        });
    }

    if (isMobile) {
      return () => {
        document.documentElement.classList.remove('logo-intro-mobile-active');
        document.body.classList.remove('logo-intro-mobile-active');
      };
    }

    // Desktop-only gesture support for unmuting the intro animation.
    const handleUserInteraction = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
        setShowSoundHint(false);
      }
    };

    window.addEventListener('click', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('pointerdown', handleUserInteraction, { passive: true });

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('pointerdown', handleUserInteraction);
      document.documentElement.classList.remove('logo-intro-mobile-active');
      document.body.classList.remove('logo-intro-mobile-active');
    };
  }, []);

  const handleVideoEnded = () => {
    if (transitionStartedRef.current) return;
    transitionStartedRef.current = true;

    // Immediately reveal homescreen without delay when animation finishes
    setIsFadingOut(true);
    if (onRevealStart) onRevealStart();

    setTimeout(() => {
      if (onIntroFinish) onIntroFinish();
    }, 250);
  };

  const handleOverlayClick = () => {
    if (isMobileRef.current) return;
    if (videoRef.current && videoRef.current.muted) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      setShowSoundHint(false);
    }
  };

  const handleSoundHintClick = (event) => {
    event.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      setShowSoundHint(false);
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <motion.div
      className="logo-intro-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: isFadingOut ? 0 : 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{ pointerEvents: isFadingOut ? 'none' : 'auto' }}
      onClick={handleOverlayClick}
    >
      <div className="logo-intro-content">
        {!useIframeFallback ? (
          <video
            ref={videoRef}
            src={CLOUDINARY_VIDEO_URL}
            className="logo-intro-video"
            playsInline
            preload="auto"
            onEnded={handleVideoEnded}
          />
        ) : (
          <iframe
            src={`${CLOUDINARY_IFRAME_URL}&autoplay=true${isMobileRef.current ? '&muted=true' : ''}`}
            title="Mruganayani Logo Animation"
            className="logo-intro-iframe"
            allow="autoplay; fullscreen"
          />
        )}
      </div>

      {showSoundHint && (
        <button type="button" className="logo-sound-hint" onClick={handleSoundHintClick} aria-label="Enable sound">
          <FiVolume2 className="logo-sound-hint-icon" />
        </button>
      )}
    </motion.div>
  );
}
