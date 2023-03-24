/* import PropTypes from "prop-types";
 */
import { BrowserRouter as Router } from "react-router-dom";

import { ControlsProvider } from "../utils/context/controls";

import { createGlobalStyle } from "styled-components";
import { StyledVideoContainer, StyledVideoPannel } from "./style";

import VideoControl from "../VideoControls";
import VideoProgressBar from "../VideoProgressBar";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    color:white;
  }
  button {
    padding: 0 !important;
  }
  input[type=range]{
    outilne:none;
    border-radius: 0.5em;
    -webkit-appearance: none;
    appearance: none;
    margin:0;
    &::-webkit-slider-thumb{
      -webkit-appearance: none;
      appearance: none;
      border-radius: 100%;
      cursor: pointer;
    }
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
