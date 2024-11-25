import styled from "styled-components";

const Father =  styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  background-color: ${(props) => props.bgColor};
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal"></Box>
      <Box bgColor="tomato"></Box>
      <Circle bgColor="pink"></Circle>
    </Father>
  );
}

export default App;
