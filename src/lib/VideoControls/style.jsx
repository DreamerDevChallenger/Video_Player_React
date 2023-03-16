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

const StyledVideoControlSound = styled.input`
  width: 50px;
`;

const StyledSound = styled.div``;

export {
  StyledVideoController,
  StyledVideoControlBox,
  StyledSound,
  StyledVideoControlSound,
};
