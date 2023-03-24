import { createContext, useRef, useState } from "react";
import useControlsHooks from "../hooks/controls";
import useProgressHooks from "../hooks/progress";
import { StyledVideoPlayer } from "../styles";

const ControlsContext = createContext();

const ControlsProvider = ({ children, source, preview }) => {
  const videoRef = useRef(null);

  const [controlState, setControlState] = useState({
    isPlaying: false,
    progress: 0,
    currentTime: 0,
    loadedTime: 0,
    duration: 0,
    speed: 1,
    sound: 1,
    isMuted: false,
  });

  const { formatTimeVideo, togglePlay, toggleMute, restartVideo, handleSound } =
    useControlsHooks({
      videoRef,
      controlState,
      setControlState,
    });

  const { handleDuration, handleProgress, progressChange } = useProgressHooks({
    videoRef,
    controlState,
    setControlState,
  });

  return (
    <ControlsContext.Provider
      value={{
        formatTimeVideo,
        togglePlay,
        toggleMute,
        restartVideo,
        progressChange,
        handleSound,
        videoRef,
        controlState,
        setControlState,
      }}
    >
      <StyledVideoPlayer
        onClick={togglePlay}
        ref={videoRef}
        onTimeUpdate={handleProgress}
        onLoadedMetadata={handleDuration}
        src={source}
        autoplay={true}
        preload="metadata"
        poster={preview}
      />
      {children}
    </ControlsContext.Provider>
  );
};

export { ControlsContext, ControlsProvider };
