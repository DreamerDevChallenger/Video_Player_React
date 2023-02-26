import { useRef } from "react";

import { StyledVideoContainer, StyledVideoPlayer } from "./style";

import VideoControl from "../VideoControls";
import { createGlobalStyle } from "styled-components";

import { BrowserRouter as Router } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  button {
    padding: 0 !important;
  }
`;
const VideoPlayer = ({ source, preview }) => {
  const videoRef = useRef();
  return (
    <Router>
      <StyledVideoContainer>
        <GlobalStyle />
        <StyledVideoPlayer
          ref={videoRef}
          src={source}
          preload="metadata"
          poster={preview}
        >
          <source src={source}></source>
        </StyledVideoPlayer>

        <VideoControl videoRef={videoRef} />
      </StyledVideoContainer>
    </Router>
  );
};

export default VideoPlayer;
