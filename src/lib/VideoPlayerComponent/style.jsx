import styled from "styled-components";

const StyledVideoContainer = styled.div`
  display: flex;
  width: 600px;
  position: relative;
  &:hover {
    .video-controls {
      opacity: 1;
    }
  }
`;

const StyledVideoPannel = styled.div`
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
`;
const StyledVideoPlayer = styled.video`
  width: 100%;
`;

export { StyledVideoContainer, StyledVideoPannel, StyledVideoPlayer };
