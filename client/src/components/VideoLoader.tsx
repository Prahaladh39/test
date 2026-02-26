import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import vid from "@/dem.mp4";
export default function VideoLoader() {
  const [showLoader, setShowLoader] = useState(true);

  // 1. Create a reference to target the video element
  const videoRef = useRef(null);

  useEffect(() => {
    // 2. As soon as the component loads, set the video speed to 1.5x
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.75;
    }
    // Check if the user has already seen the loader
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");
    if (hasSeenLoader) {
      setShowLoader(false);
    }
  }, []);

  const handleVideoEnd = () => {
    sessionStorage.setItem("hasSeenLoader", "true");
    setShowLoader(false);
  };

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="video-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          <video
            ref={videoRef} // 3. Attach the ref directly to the video tag
            src={vid}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-contain lg:object-cover"
          />

          <button
            onClick={handleVideoEnd}
            className="absolute bottom-8 right-8 text-white/50 hover:text-white text-sm tracking-widest uppercase transition-colors z-50"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
