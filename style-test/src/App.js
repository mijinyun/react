import styled from 'styled-components';

let Box = styled.div`
    padding: 20px;
    color: grey;
    `;

  let YellowBtn = styled.button`
    background: yellow;
    color: black;
    padding: 10px;
    `;

  let Btn = styled.button`
    background: ${props => props.bg};
    color: black;
    padding: 10px;
  `;

  let Btn2 = styled.button`
    background: ${props => props.bg =='red'? 'red' : 'pink'};
    color: black;
    padding: 10px;
  `;

function App() {

  return (
    <div>
      <Box>
        <YellowBtn>버튼</YellowBtn>
        <Btn bg="blue">props버튼1</Btn>
        <Btn bg="green">props버튼2</Btn>
        <Btn2 bg='red'>조건문 props버튼1</Btn2>
        <Btn2 bg='blue'>조건문 props버튼2</Btn2>
      </Box>
    </div>
  );
}

export default App;
