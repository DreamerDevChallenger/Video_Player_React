import styled, { keyframes } from "styled-components";
import { Box } from "@mui/material";

const StyledVideoController = styled.div`
  background-color: rgba(0, 0, 0, 1);

  display: flex;
  width: 99%;
  z-index: 1;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0 8px;
  left: 0;
  right: 0;
  position: absolute;
  opacity: 1;
  transition: opacity 100ms cubic-bezier(0.4, 0, 1, 1);
  svg {
    height: 40px;
    color: white;
  }
`;

const StyledVideoControlBox = styled(Box)`
  display: flex;
  gap: 6px;
`;

export { StyledVideoController, StyledVideoControlBox };
