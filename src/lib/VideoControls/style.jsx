import styled from "styled-components";
import { Box } from "@mui/material";

const StyledVideoController = styled.div`
  display: flex;
  width: 99%;
  z-index: 1;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0 8px;
  svg {
    height: 40px;
    color: white;
  }
`;

const StyledVideoControlBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledVideoControlSoundContainer = styled.div`
  position: relative;
  width: 50px;
  background: rgba(255, 255, 255, 0.2);
  height: 3px;
  & > * {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 1em;
  }
`;

const StyledVideoControlSoundValue = styled.div`
  background-color: #ffffff;
`;

const StyledVideoControlSound = styled.input`
  background: none;
  &::-webkit-slider-thumb {
    background-color: #ffffff;
    width: 10px;
    height: 10px;
    transition: 0.3s ease-in;
  }
`;

const StyledSound = styled.div``;

export {
  StyledVideoController,
  StyledVideoControlBox,
  StyledSound,
  StyledVideoControlSound,
  StyledVideoControlSoundValue,
  StyledVideoControlSoundContainer,
};
