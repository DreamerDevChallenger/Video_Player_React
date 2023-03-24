/* import PropTypes from "prop-types";
 */
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
      <StyledProgressValue
        className="progress-value"
        style={{ width: (controlState.progress / 100).toFixed(2) + "%" }}
      />
      <StyledCurrentTime
        type="range"
        min={0}
        max={10000}
        value={Math.round(controlState.progress)}
        onChange={progressChange}
      />
      <StyledLoadedTime style={{ width: controlState.loadedTime + "%" }} />
    </StyledProgressBar>
  );
};

export default VideoProgressBar;
