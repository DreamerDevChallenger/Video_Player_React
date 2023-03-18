import styled from "styled-components";

const StyledProgressBar = styled.div`
  position: absolute;
  top: -7px;
  left: 1%;
  width: 98%;
  height: 3px;

  margin: 0;
  border-radius: 0.1em;
  transition: height 0.05s;
  background: rgba(255, 255, 255, 0.1);
`;

const StyledCurrentTime = styled.input`
  position: absolute;
  margin: 0;
  left: 0;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: none;
  accent-color: red;
  border-radius: 0.1em;
  -webkit-appearance: none;
  appearance: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: red;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    cursor: pointer;
  }
`;

const StyledProgressValue = styled.div`
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ width }) => `${width}%`};
  background: red;
  height: 100%;
  border-radius: 0.1em;
`;

const StyledLoadedTime = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 0.1em;
  width: ${({ width }) => `${width}%`};
  background: rgba(255, 255, 255, 0.5);
`;

export {
  StyledProgressBar,
  StyledCurrentTime,
  StyledLoadedTime,
  StyledProgressValue,
};
