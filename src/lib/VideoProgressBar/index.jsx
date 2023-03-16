import { StyledProgressBar, StyledCurrentTime } from "./style";

const VideoProgressBar = ({ controlState, progressHooks }) => {
  return (
    <StyledProgressBar>
      <StyledCurrentTime
        value={Math.round(controlState.progress)}
        type="range"
        min={0}
        max={10000}
        onChange={progressHooks}
      />
    </StyledProgressBar>
  );
};

export default VideoProgressBar;
