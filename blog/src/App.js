import './App.css';
import { useState } from 'react';

function App() {
  //페이지에서 자주 바뀌는것은 state로 하는게 좋음.
  //state는 등호로 변경하면 안된다!!

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);  
  let [따봉,따봉변경] = useState([0,0,0]); 

  let [modal,setModal] = useState(false);  //:스위치역할
  let [title,setTitle] = useState(0);
  let [입력값,입력값변경] = useState('');

  let [날짜, 날짜변경] = useState(['1월 4일','3월 2일','2월 8일']);

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
      
      {
        글제목.map(function(a , i){
          return (
            <div className = 'list'>
              <h4 key={i} onClick={() => {setModal(!modal); setTitle(i)}}>{ a }
              <span onClick={(e) => {
                e.stopPropagation();
                let copy = [...따봉];
                copy[i] += 1;
                따봉변경(copy)}}
                >👍</span> {따봉[i]}</h4>
              <p><span>{날짜[i]}</span>발행</p>
              <button onClick={() => { 
                let copy = [...글제목];
                //copy 여기서 원하는 자료 삭제
                copy.splice(i,1);
                글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input id="input" onChange={(e) => { 입력값변경(e.target.value);}}></input>
      <button onClick={() => {

        // 응용1. 입력값 없으면 발행 막기
        if (document.getElementById('input').value.length == 0 ){
          return false;
        }

        let copy = [입력값, ...글제목];
        console.log(copy);
        글제목변경(copy);

        // 응용2. 글제목 추가되면 따봉도 같이 추가되게 하기
        let good = [...따봉];
        good.push(0);
        따봉변경(good);

        // 응용3. 현재 날짜 추가하기~
        let today = [...날짜];
        let date = new Date();
        let uploadDate = date.getMonth() + '월 ' + date.getDay() + '일' 
        today.unshift(uploadDate);
        날짜변경(today);

      }}>글발행</button>

      {
        modal == true ? <Modal color={'skyblue'} title={title} 글제목={글제목} titleChange={titleChange}/> : null
      }


    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{background: props.color}}>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={props.titleChange}>글수정</button>
    </div>
  )
}




export default App;
