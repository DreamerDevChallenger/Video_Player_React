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

const StyledVideoPlayer = styled.video`
  width: 100%;
`;

export { StyledVideoContainer, StyledVideoPlayer };
