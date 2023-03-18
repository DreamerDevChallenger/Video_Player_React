import { useContext } from "react";
import { ControlsContext } from "../utils/context/controls";

import {
  StyledProgressBar,
  StyledCurrentTime,
  StyledLoadedTime,
  StyledProgressValue,
} from "./style";

const VideoProgressBar = () => {
  const { controlState, progressChange } = useContext(ControlsContext);

  return (
    <StyledProgressBar>
      <StyledCurrentTime
        width={controlState.progress}
        type="range"
        min={0}
        max={10000}
        value={controlState.progress}
        onChange={progressChange}
      />
      <StyledProgressValue width={controlState.progress / 100} />
      <StyledLoadedTime width={controlState.loadedTime} />
    </StyledProgressBar>
  );
};

export default VideoProgressBar;
