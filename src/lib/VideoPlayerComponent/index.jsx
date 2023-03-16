import { useCallback, useRef, useState } from "react";

import {
  StyledVideoContainer,
  StyledVideoPannel,
  StyledVideoPlayer,
} from "./style";

import VideoControl from "../VideoControls";
import { createGlobalStyle } from "styled-components";

import { BrowserRouter as Router } from "react-router-dom";
import VideoProgressBar from "../VideoProgressBar";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    color:white;
  }
  button {
    padding: 0 !important;
  }
`;

const VideoPlayer = ({ source, preview }) => {
  const videoRef = useRef(null);

  const [controlState, setControlState] = useState({
    isPlaying: false,
    progress: 0,
    currentTime: 0,
    duration: 0,
    speed: 1,
    sound: 100,
    isMuted: false,
  });

  const handleProgress = useCallback(() => {
    setControlState({
      ...controlState,
      currentTime: videoRef.current.currentTime,
      progress:
        (videoRef.current.currentTime / videoRef.current.duration) * 10000,
    });
  }, [controlState, setControlState, videoRef]);

  const handleDuration = useCallback(() => {
    videoRef.current &&
      setControlState({ ...controlState, duration: videoRef.current.duration });
  }, [controlState, setControlState, videoRef]);

  const progressHooks = useCallback(
    (e) => {
      const onChange = e.target.value;
      videoRef.current.currentTime =
        (videoRef.current.duration / 10000) * onChange;

      setControlState({
        ...controlState,
        progress: onChange,
        currentTime: videoRef.current.currentTime,
      });
    },
    [controlState, setControlState, videoRef]
  );

  return (
    <Router>
      <StyledVideoContainer>
        <GlobalStyle />
        <StyledVideoPlayer
          ref={videoRef}
          onTimeUpdate={handleProgress}
          onLoadedMetadata={handleDuration}
          src={source}
          preload="metadata"
          poster={preview}
        />
        <StyledVideoPannel className="video-pannel">
          <VideoProgressBar
            videoRef={videoRef}
            controlState={controlState}
            setControlState={setControlState}
            progressHooks={progressHooks}
          />
          <VideoControl
            videoRef={videoRef}
            controlState={controlState}
            setControlState={setControlState}
          />
        </StyledVideoPannel>
      </StyledVideoContainer>
    </Router>
  );
};

export { VideoPlayer };
