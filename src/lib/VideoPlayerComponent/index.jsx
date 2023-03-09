import { useEffect, useRef, useState } from "react";

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
    speed: 1,
    sound: 1,
  });

  useEffect(() => {
    console.log(videoRef);
  }, [source]);

  return (
    <Router>
      <StyledVideoContainer>
        <GlobalStyle />
        <StyledVideoPlayer
          ref={videoRef}
          src={source}
          preload="metadata"
          poster={preview}
        />
        <StyledVideoPannel>
          <VideoProgressBar
            videoRef={videoRef}
            controlState={controlState}
            setControlState={setControlState}
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

export default VideoPlayer;
