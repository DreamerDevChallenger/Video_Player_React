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
  const { isPlaying, duration, currentTime, isMuted } = controlState;

  const videoEl = videoRef.current;

  // Rewind & Forwards

  const rewindsVideo = useCallback(() => {
    videoEl.currentTime = videoEl.currentTime - 5;
    setControlState({
      ...controlState,
      currentTime: videoEl.currentTime,
    });
  }, [controlState, setControlState, videoEl]);

  const forwardsVideo = useCallback(() => {
    videoEl.currentTime = videoEl.currentTime + 5;
    setControlState({
      ...controlState,
      currentTime: videoEl.currentTime,
    });
  }, [controlState, setControlState, videoEl]);

  // Format Duration Video

  const formatTimeVideo = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    minutes = minutes >= 10 ? minutes : "0" + minutes;

    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;

    return `${minutes}:${seconds}`;
  };

  // Down Sound Video
  const downSound = useCallback(() => {
    if (videoEl.volume > 0.05) {
      videoEl.volume = videoEl.volume - 0.05;
    } else {
      videoEl.volume = 0;
    }

    setControlState({
      ...controlState,
      sound: videoEl.volume,
    });
  }, [controlState, setControlState, videoEl]);

  // Up Sound Video
  const upSound = useCallback(() => {
    if (videoEl.volume < 0.95) {
      videoEl.volume = videoEl.volume + 0.05;
    } else {
      videoEl.volume = 1;
    }

    setControlState({
      ...controlState,
      sound: videoEl.volume,
      isMuted: false,
    });
  }, [controlState, setControlState, videoEl]);

  // Handle Sound Video

  const handleSound = useCallback(
    (event) => {
      const onChange = event.target.value;
      videoEl.volume = onChange;
      setControlState({ ...controlState, sound: videoEl.volume });
    },
    [controlState, setControlState, videoEl]
  );

  // Mute Sound Video

  const toggleMute = useCallback(() => {
    setControlState({
      ...controlState,
      isMuted: !controlState.isMuted,
    });
  }, [controlState, setControlState]);

  useEffect(() => {
    videoEl && (isMuted ? (videoEl.muted = true) : (videoEl.muted = false));
  }, [isMuted, videoEl]);

  // Restart Video

  const restartVideo = useCallback(() => {
    setControlState({ ...controlState, isPlaying: false, currentTime: 0 });
    videoEl.currentTime = 0;
  }, [controlState, setControlState, videoEl]);

  // Playing Video

  const togglePlay = useCallback(() => {
    setControlState({ ...controlState, isPlaying: !isPlaying });
  }, [controlState, setControlState, isPlaying]);

  useEffect(() => {
    videoEl && (isPlaying ? videoEl.play() : videoEl.pause());
  }, [isPlaying, videoEl]);

  // Key Event

  const handleKeyEvent = useCallback(
    (event) => {
      const { keyCode } = event;

      switch (keyCode) {
        case 37:
          return rewindsVideo();
        case 38:
          return upSound();
        case 39:
          return forwardsVideo();
        case 40:
          return downSound();
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
      rewindsVideo,
      toggleMute,
      restartVideo,
      downSound,
      upSound,
      duration,
      currentTime,
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
    handleSound,
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
