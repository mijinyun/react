import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //페이지에서 자주 바뀌는것은 state로 하는게 좋음.
  //state는 등호로 변경하면 안된다!!

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);  
  // let [글제목2, b] = useState('여자 코트 추천');  
  // let [글제목3, c] = useState('성인 코트 추천');  
  let [따봉,따봉변경] = useState([0,0,0]); //따봉변경 = state변경용 함수 (이걸 써야 html 재렌더링이 잘됨!)

  let [modal,setModal] = useState(false);  //:스위치역할

  const titleChange = () => {
    let copy = [...글제목];
    copy[0] = '여자 코트 추천';
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4> ReactBlog </h4>
      </div>
      {/* 여기는 숙제~! -해결! */}
      <button onClick={ () => {
        let rearray = [...글제목];
        rearray.sort();
        글제목변경(rearray);
      }}>가나다순정렬</button>

      <button onClick={titleChange
        // 글제목변경(['여자 코트 추천','강남 우동 맛집','파이썬 독학']); // 이러면 확장성이 떨어짐..데이터 많아지면 어쩔래?
        // let copy = [...글제목]; // 그냥 let copy-글제목;이라 하면 안됨.
        // copy[0] = '여자 코트 추천';
        // 글제목변경(copy);
      }>글수정</button>

      {/* <div className = 'list'>
        <h4>{ 글제목[0]} <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
        <p>9월 21일 발행</p>
      </div>
      <div className = 'list'>
        <h4>{ 글제목[1] }</h4>
        <p>9월 22일 발행</p>
      </div>
      <div className = 'list'>
        <h4 onClick={() => { modal == true ? setModal(false) : setModal(true)}}>{ 글제목[2] }</h4>
        <p>9월 23일 발행</p>
      </div> */}
      
      {
        글제목.map(function(a , i){
          return (
            <div className = 'list'>
              <h4 onClick={() => {setModal(!modal)}}>{ a }</h4>
              <h4>{글제목[i]} <span onClick={() => {
                let copy = [...따봉];
                copy[i] += 1;
                따봉변경(copy)}}
                >👍</span> {따봉[i]}</h4>
              <p>9월 22일 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal color={'skyblue'} 글제목={글제목} titleChange={titleChange}/> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{background: props.color}}>
        <h4>{props.글제목[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={props.titleChange}>글수정</button>
    </div>
  )
}

export default App;
