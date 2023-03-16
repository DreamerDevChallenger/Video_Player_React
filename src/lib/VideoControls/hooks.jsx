import { useCallback, useEffect } from "react";

import PropTypes from "prop-types";

/**
 * @function useControlsHooks
 * @description hooks for the controls of the video
 * @param {HTMLVideoElement} videoRef
 * @param {Object} controlState state of the controls
 * @param {Function} setControlState state setting of the controls
 */

const useControlsHooks = ({ videoRef, controlState, setControlState }) => {
  const { isPlaying, duration, currentTime } = controlState;

  // Rewind & Forwards

  const rewindsVideo = useCallback(() => {
    videoRef.current.currentTime = videoRef.current.currentTime - 5;
    setControlState({
      ...controlState,
      currentTime: videoRef.current.currentTime,
    });
  }, [controlState, setControlState, videoRef]);

  const forwardsVideo = useCallback(() => {
    videoRef.current.currentTime = videoRef.current.currentTime + 5;
    setControlState({
      ...controlState,
      currentTime: videoRef.current.currentTime,
    });
  }, [controlState, setControlState, videoRef]);

  // Format Duration Video

  const formatTimeVideo = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    minutes = minutes >= 10 ? minutes : "0" + minutes;

    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;

    return `${minutes}:${seconds}`;
  };

  // Handle Sound Video

  const handleSound = useCallback(() => {}, []);

  // Mute Sound Video

  const toggleMute = useCallback(() => {
    setControlState({
      ...controlState,
      isMuted: !controlState.isMuted,
    });
  }, [controlState, setControlState]);

  // Restart Video

  const restartVideo = useCallback(() => {
    setControlState({ ...controlState, isPlaying: false, currentTime: 0 });
    videoRef.current.currentTime = 0;
  }, [controlState, setControlState, videoRef]);

  // Playing Video

  const togglePlay = useCallback(() => {
    setControlState({ ...controlState, isPlaying: !isPlaying });
  }, [controlState, setControlState, isPlaying]);

  useEffect(() => {
    isPlaying ? videoRef.current.play() : videoRef.current.pause();
  }, [isPlaying, videoRef]);

  // Key Event

  const handleKeyEvent = useCallback(
    (event) => {
      const { keyCode } = event;

      switch (keyCode) {
        case 37:
          return rewindsVideo();
        case 39:
          return forwardsVideo();
        case 75:
          if (duration === currentTime) {
            return restartVideo();
          } else {
            return togglePlay();
          }
        /* case 32:
          return togglePlay(); */
        case 77:
          return toggleMute();
        default:
          break;
      }
    },
    [
      togglePlay,
      forwardsVideo,
      handleSound,
      rewindsVideo,
      toggleMute,
      restartVideo,
    ]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent);
    return () => window.removeEventListener("keydown", handleKeyEvent);
  }, [handleKeyEvent]);

  return {
    formatTimeVideo,
    togglePlay,
    toggleMute,
    restartVideo,
  };
};

useControlsHooks.propTypes = {
  setControlState: PropTypes.string.isRequired,
  videoRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLVideoElement) }),
  ]),
};

export default useControlsHooks;
