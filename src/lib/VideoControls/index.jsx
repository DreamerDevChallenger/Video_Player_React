/* import PropTypes from "prop-types";
 */
import { useContext, useState } from "react";
import { ControlsContext } from "../utils/context/controls";

import { ICON_DATA } from "../IconButtons";
import { IconButton, Tooltip } from "@mui/material";

import {
  StyledSound,
  StyledVideoControlBox,
  StyledVideoController,
  StyledVideoControlSound,
  StyledVideoControlSoundContainer,
  StyledVideoControlSoundValue,
} from "./style";

const VideoControl = () => {
  const [showSoundValue, setShowSoundValue] = useState(false);
  const {
    formatTimeVideo,
    togglePlay,
    toggleMute,
    restartVideo,
    controlState,
    handleSound,
  } = useContext(ControlsContext);

  const { isPlaying, isMuted, sound, currentTime, duration } = controlState;

  return (
    <StyledVideoController className="video-controls">
      <StyledVideoControlBox>
        <div>
          <Tooltip title={ICON_DATA.previous.tooltip} placement="top">
            <IconButton>{ICON_DATA.previous.icon}</IconButton>
          </Tooltip>
        </div>
        <div>
          {duration === currentTime ? (
            <Tooltip title={ICON_DATA.restart.tooltip} placement="top">
              <IconButton onClick={() => restartVideo()}>
                {ICON_DATA.restart.icon}
              </IconButton>
            </Tooltip>
          ) : isPlaying ? (
            <Tooltip title={ICON_DATA.pause.tooltip} placement="top">
              <IconButton onClick={() => togglePlay()}>
                {ICON_DATA.pause.icon}
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title={ICON_DATA.play.tooltip} placement="top">
              <IconButton onClick={() => togglePlay()}>
                {ICON_DATA.play.icon}
              </IconButton>
            </Tooltip>
          )}
        </div>
        <div>
          <Tooltip title={ICON_DATA.next.tooltip} placement="top">
            <IconButton>{ICON_DATA.next.icon}</IconButton>
          </Tooltip>
        </div>
        <StyledSound
          onMouseEnter={() => setShowSoundValue(true)}
          onMouseLeave={() => setShowSoundValue(false)}
        >
          <div onClick={() => toggleMute()}>
            {isMuted || sound === 0 ? (
              <Tooltip title={ICON_DATA.volumeOff.tooltip} placement="top">
                <IconButton>{ICON_DATA.volumeOff.icon}</IconButton>
              </Tooltip>
            ) : sound >= 0.5 ? (
              <Tooltip title={ICON_DATA.volumeUp.tooltip} placement="top">
                <IconButton>{ICON_DATA.volumeUp.icon}</IconButton>
              </Tooltip>
            ) : (
              <Tooltip title={ICON_DATA.volumeDown.tooltip} placement="top">
                <IconButton>{ICON_DATA.volumeDown.icon}</IconButton>
              </Tooltip>
            )}
          </div>
          {showSoundValue && (
            <Tooltip title={"Volume"} placement="top">
              <StyledVideoControlSoundContainer>
                <StyledVideoControlSoundValue
                  style={{
                    width: isMuted
                      ? 0
                      : (controlState.sound * 100).toFixed(2) + "%",
                  }}
                />
                <StyledVideoControlSound
                  type={"range"}
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : sound}
                  onChange={handleSound}
                />
              </StyledVideoControlSoundContainer>
            </Tooltip>
          )}
        </StyledSound>
        <div>
          {formatTimeVideo(currentTime)} / {formatTimeVideo(duration || 0)}
        </div>
      </StyledVideoControlBox>
    </StyledVideoController>
  );
};

export default VideoControl;
