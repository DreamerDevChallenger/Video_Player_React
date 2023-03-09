import { IconButton, Tooltip } from "@mui/material";
import { StyledVideoControlBox, StyledVideoController } from "./style";
import { ICON_DATA } from "../IconButtons";

import { Link } from "react-router-dom";
import { useEffect } from "react";

const VideoControl = ({ videoRef, controlState, setControlState }) => {
  const { isPlaying, sound, speed } = controlState;

  const playVideo = () => {
    setControlState({ ...controlState, isPlaying: true });
    videoRef.current.play();
  };

  const pauseVideo = () => {
    setControlState({ ...controlState, isPlaying: false });
    videoRef.current.pause();
  };

  const handleKeyEvent = (e) => {
    const { keyCode } = e;
    if (keyCode === 75 || keyCode === 32) {
      if (isPlaying) {
        return pauseVideo();
      } else {
        return playVideo();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent);
    return () => window.removeEventListener("keydown", handleKeyEvent);
  }, [handleKeyEvent]);

  return (
    <StyledVideoController className="video-controls">
      <StyledVideoControlBox>
        <div>
          <Tooltip title={ICON_DATA.previous.tooltip} placement="top">
            <Link>
              <IconButton>{ICON_DATA.previous.icon}</IconButton>
            </Link>
          </Tooltip>
        </div>
        <div>
          {isPlaying ? (
            <Tooltip title={ICON_DATA.pause.tooltip} placement="top">
              <IconButton onClick={() => pauseVideo()}>
                {ICON_DATA.pause.icon}
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title={ICON_DATA.play.tooltip} placement="top">
              <IconButton onClick={() => playVideo()}>
                {ICON_DATA.play.icon}
              </IconButton>
            </Tooltip>
          )}
        </div>
        <div>
          <Tooltip title={ICON_DATA.next.tooltip} placement="top">
            <Link>
              <IconButton>{ICON_DATA.next.icon}</IconButton>
            </Link>
          </Tooltip>
        </div>
        <div>
          <Tooltip title={ICON_DATA.volumeUp.tooltip} placement="top">
            <IconButton>{ICON_DATA.volumeUp.icon}</IconButton>
          </Tooltip>
        </div>
      </StyledVideoControlBox>
    </StyledVideoController>
  );
};

export default VideoControl;
