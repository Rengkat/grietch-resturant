import React, { useRef, useState } from "react";
import { meal } from "../constants";
import { FaPlay, FaPause } from "react-icons/fa";
function Video() {
  const vidRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    setIsPlaying((previousPlay) => !previousPlay);
    if (isPlaying) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="video">
      <video
        src={meal}
        loop
        controls={false}
        muted
        type="video/mp4"
        ref={vidRef}
      />
      <div className="overlayV flex items-center justify-center">
        <div
          onClick={handlePlay}
          className="center w-32 h-32 rounded-full border-2 border-gold flex justify-center items-center ">
          {isPlaying ? (
            <FaPause className="text-white text-4xl cursor-pointer" />
          ) : (
            <FaPlay className="text-white text-4xl cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Video;
