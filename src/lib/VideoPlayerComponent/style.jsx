import styled from "styled-components";

const StyledVideoContainer = styled.div`
  display: flex;
  width: 600px;
  position: relative;
  &:hover {
    .video-pannel {
      opacity: 1;
    }
  }
`;

const StyledVideoPannel = styled.div`
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;
const StyledVideoPlayer = styled.video`
  width: 100%;
`;

export { StyledVideoContainer, StyledVideoPannel, StyledVideoPlayer };
