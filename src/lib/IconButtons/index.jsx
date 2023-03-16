import {
  SkipPrevious,
  SkipNext,
  PlayArrow,
  Pause,
  VolumeOff,
  VolumeDown,
  VolumeUp,
  RestartAlt,
} from "@mui/icons-material";

const ICON_DATA = {
  previous: {
    icon: <SkipPrevious />,
    tooltip: "Previous (SHIFT + P)",
  },
  next: {
    icon: <SkipNext />,
    tooltip: "Next (SHIFT + N)",
  },
  restart: {
    icon: <RestartAlt />,
    tooltip: "Restart (k)",
  },
  play: {
    icon: <PlayArrow />,
    tooltip: "Play (k)",
  },
  pause: {
    icon: <Pause />,
    tooltip: "Pause (k)",
  },
  volumeOff: {
    icon: <VolumeOff />,
    tooltip: "Unmute (m)",
  },
  volumeDown: {
    icon: <VolumeDown />,
    tooltip: "Mute (m)",
  },
  volumeUp: {
    icon: <VolumeUp />,
    tooltip: "Mute (m)",
  },
};

export { ICON_DATA };
