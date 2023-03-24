import { useCallback } from "react";

const useProgressHooks = ({ videoRef, controlState, setControlState }) => {
  const handleProgress = useCallback(() => {
    const buffered = videoRef.current.buffered.end(0);

    setControlState({
      ...controlState,
      currentTime: videoRef.current.currentTime.toFixed(2),
      progress: (
        (videoRef.current.currentTime / videoRef.current.duration) *
        10000
      ).toFixed(2),
      loadedTime: ((buffered / videoRef.current.duration) * 100).toFixed(2),
    });
  }, [controlState, setControlState, videoRef]);

  const handleDuration = useCallback(() => {
    videoRef.current &&
      setControlState({
        ...controlState,
        duration: videoRef.current.duration.toFixed(2),
      });
  }, [controlState, setControlState, videoRef]);

  const progressChange = useCallback(
    (event) => {
      const onChange = event.target.value;
      videoRef.current.currentTime =
        (videoRef.current.duration / 10000) * onChange;

      setControlState({
        ...controlState,
        progress: onChange,
        isPlaying:
          controlState.duration === controlState.currentTime
            ? false
            : controlState.isPlaying,
        currentTime: videoRef.current.currentTime,
      });
    },
    [controlState, setControlState, videoRef]
  );

  return {
    handleDuration,
    handleProgress,
    progressChange,
  };
};

export default useProgressHooks;
