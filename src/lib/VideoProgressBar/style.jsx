import styled from "styled-components";

const StyledProgressBar = styled.div`
  width: 100%;
  height: 3px;
  margin: 0;
  color: red;
  background-color: lightgray;
`;

const StyledCurrentTime = styled.div`
  width: ${(props) => `${props.width}%`};
  height: 100%;
  background-color: red;
`;
export { StyledProgressBar, StyledCurrentTime };
