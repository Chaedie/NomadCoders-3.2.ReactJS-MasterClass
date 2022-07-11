import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 10rem;
  height: 10rem;
`;

const Circle = styled(Box)`
  border-radius: 5rem;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

const Text = styled.h3`
  color: white;
`;

function App() {
  return (
    <Father as="header">
      <Input></Input>
      <Input></Input>
      {/* <Box bgColor="teal">
        <Text>Let's start!</Text>
      </Box>
      <Circle bgColor="tomato" /> */}
      <Btn as="a" href="/">
        Log in
      </Btn>
    </Father>
  );
}

export default App;
