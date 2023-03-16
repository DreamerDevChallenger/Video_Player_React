import styled from "styled-components";

const StyledProgressBar = styled.div`
  margin: 0;
  height: 4px;
  transition: height 0.05s;
  width: 98%;
  top: -15px;
  left: 1%;
  position: absolute;
`;

const StyledCurrentTime = styled.input`
  width: 100%;
  z-index: 1;

  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  position: relative;
  &:focus {
    box-shadow: none;
    outline: none;
    pointer-events: none;
  }
  &::-webkit-slider-runnable-track {
    background: red;
    content: " ";
    height: 3px;

    appearance: none;
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    cursor: pointer;
    background: red;
    width: 10px;
    height: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 5);
    position: relative;
    top: -50%;
    transform: translate(0, -25%);
    border-radius: 100%;
    &:hover {
      filter: contrast(0.75);
    }
    appearance: none;
  }
`;
export { StyledProgressBar, StyledCurrentTime };
