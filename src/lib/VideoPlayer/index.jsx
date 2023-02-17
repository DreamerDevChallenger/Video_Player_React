import { useRef } from "react";
import { StyledVideoController, StyledVideoPlayer } from "./style";

const VideoPlayer = ({ source }) => {
  const videoRef = useRef();
  return (
    <div>
      <StyledVideoPlayer src={source} />
      <StyledVideoController />
    </div>
  );
};

export default VideoPlayer;
