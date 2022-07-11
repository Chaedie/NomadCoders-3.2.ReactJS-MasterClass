import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const rotateAnimation = keyframes`
  0% {
    transform : rotate(0deg);
  }
  50% {
    transform : rotate(360deg);
    border-radius: 100px
  }
  100%{
    transform : rotate(720deg);
    border-radius: 0;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 2s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 70px;
    }
    &:active {
      opacity: 0;
    }
  }
  /* span:hover {
    font-size: 70px;
  }
  span:active {
    opacity: 0;
  } */
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <p>🤣</p>
      </Box>
    </Wrapper>
  );
}

export default App;
