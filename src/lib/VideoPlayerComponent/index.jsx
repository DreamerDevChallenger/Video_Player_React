import { StyledVideoContainer, StyledVideoPannel } from "./style";

import VideoControl from "../VideoControls";
import { createGlobalStyle } from "styled-components";

import { BrowserRouter as Router } from "react-router-dom";
import VideoProgressBar from "../VideoProgressBar";

import { ControlsProvider } from "../utils/context/controls";

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
  return (
    <Router>
      <GlobalStyle />
      <StyledVideoContainer>
        <ControlsProvider source={source} preview={preview}>
          <StyledVideoPannel className="video-pannel">
            <VideoProgressBar />
            <VideoControl />
          </StyledVideoPannel>
        </ControlsProvider>
      </StyledVideoContainer>
    </Router>
  );
};

export { VideoPlayer };
