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
  & > * {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 1em;
  }
  &:hover {
    input {
      &::-webkit-slider-thumb {
        width: 10px;
        height: 10px;
      }
    }
  }
`;

const StyledCurrentTime = styled.input`
  z-index: 3;
  background: none;
  &::-webkit-slider-thumb {
    position: relative;
    right: ${({ value, max }) => (value < max / 2 ? "1px" : "-1px")};
    background-color: red;
    border: 0px;
    width: 0px;
    height: 0px;
    transition: 0.3s ease-in;
    &:hover {
      filter: contrast(50%);
    }
  }
`;

const StyledProgressValue = styled.div`
  z-index: 2;
  background: red;
`;

const StyledLoadedTime = styled.div`
  z-index: 1;
  background: rgba(255, 255, 255, 0.5);
`;

export {
  StyledProgressBar,
  StyledCurrentTime,
  StyledLoadedTime,
  StyledProgressValue,
};
