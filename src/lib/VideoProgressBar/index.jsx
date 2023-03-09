import { StyledProgressBar, StyledCurrentTime } from "./style";

const VideoProgressBar = ({ videoRef, controlState, setControlSate }) => {
  const handleProgress = () => {};
  return (
    <StyledProgressBar>
      <StyledCurrentTime width={controlState.progress} />
    </StyledProgressBar>
  );
};

export default VideoProgressBar;
