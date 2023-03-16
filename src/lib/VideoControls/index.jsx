import { IconButton, Tooltip } from "@mui/material";
import {
  StyledSound,
  StyledVideoControlBox,
  StyledVideoController,
  StyledVideoControlSound,
} from "./style";
import { ICON_DATA } from "../IconButtons";

import useControlsHooks from "./hooks";
import { useState } from "react";

const VideoControl = ({ videoRef, controlState, setControlState }) => {
  const { isPlaying, isMuted, sound, currentTime, duration } = controlState;

  const [showSoundValue, setShowSoundValue] = useState(false);

  const { formatTimeVideo, togglePlay, toggleMute, restartVideo } =
    useControlsHooks({
      videoRef,
      controlState,
      setControlState,
    });

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
            {isMuted ? (
              <Tooltip title={ICON_DATA.volumeOff.tooltip} placement="top">
                <IconButton>{ICON_DATA.volumeOff.icon}</IconButton>
              </Tooltip>
            ) : (
              <Tooltip title={ICON_DATA.volumeUp.tooltip} placement="top">
                <IconButton>{ICON_DATA.volumeUp.icon}</IconButton>
              </Tooltip>
            )}
          </div>
          {showSoundValue && (
            <StyledVideoControlSound
              type={"range"}
              max={100}
              value={isMuted ? 0 : sound}
              onChange={() => {}}
            />
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
