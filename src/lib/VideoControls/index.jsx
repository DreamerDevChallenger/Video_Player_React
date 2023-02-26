import { IconButton, Tooltip } from "@mui/material";
import { StyledVideoControlBox, StyledVideoController } from "./style";
import { ICON_DATA } from "../IconButtons";
import { useCallback, useEffect, useState } from "react";

import { Link } from "react-router-dom";

const VideoControl = ({ videoRef }) => {
  const [togglePlay, setTogglePlay] = useState(true);

  const playVideo = () => {
    videoRef.current.play();
    setTogglePlay(false);
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    setTogglePlay(true);
  };

  const handleKeyCode = useCallback((e) => {
    const { keyCode } = e;

    if (keyCode === 75 || keyCode === 32) {
      if (togglePlay) {
        return playVideo();
      } else {
        return pauseVideo();
      }
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyCode);
    return () => window.removeEventListener("keydown", handleKeyCode);
  }, [handleKeyCode]);

  useEffect(() => {});

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
          {togglePlay ? (
            <Tooltip title={ICON_DATA.play.tooltip} placement="top">
              <IconButton onClick={() => playVideo()}>
                {ICON_DATA.play.icon}
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title={ICON_DATA.pause.tooltip} placement="top">
              <IconButton onClick={() => pauseVideo()}>
                {ICON_DATA.pause.icon}
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
