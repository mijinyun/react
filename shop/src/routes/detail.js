import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Product from '../product';
import { Nav } from 'react-bootstrap'


import {Context1} from './../App.js'; //App.js에서 보관함 가져오기.


const Detail = (props) => {

    let {재고} = useContext(Context1) //state사용2. useContext(Context) 보관함을 해체해주는것. 변수를 써주거나, disturcting 해서 쓰면 됨. {재고, shoes}

    useEffect(() => {
      setTimeout(() => {
        //내방식. 이거는 자바스크립방식이다 ㅠㅠ
        // document.querySelector('.alert').style.display = 'none';
        setAlert(false);
      },2000)
    },[])

    useEffect(() => {
      isNaN(txt) ? setWarning(true) : setWarning(false);
    })


    // < useEfFect 설명용 >
    let [ count , setCount ] = useState(0)
    let [alert, setAlert] = useState(true);
    let [ txt , setTxt] = useState();
    let [ warning, setWarning ] = useState(true);
    let [탭, 탭변경] =useState(0)

    let {id} = useParams();
    let keyId = props.shoes[id].id;
    
    // 위 KeyId 대신 아래처럼 해도된다. 
    // let 찾은상품 = props.shoes.find(function(x){ return x.id == id});
    // console.log(찾은상품);


    return(
    <>
      <div key={keyId} className="container">
        {
          alert == true ?
          <div className='alert alert-warning'>
          2초이내 구매시 할인
        </div> : null
        }

        {/* <useEffect 설명용> */}
        {count}

        {재고}
        <button onClick={()=> { setCount(count+1) }}>버튼</button>
        <div className="row">
          <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes" + ( keyId + 1 ) + ".jpg"} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            
            {
              warning == true ? <p> 경고! 숫자만 입력하세요</p> : null
            }

            <input type="text" onChange={(e)=> { setTxt(e.target.value) }}></input>
            <h4 className="pt-5">{props.shoes[keyId].title}</h4>
            <p>{props.shoes[keyId].content}</p>
            <p>{props.shoes[keyId].price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>


        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={() => 탭변경(0)}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={() => 탭변경(1)}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={() => 탭변경(2)}>버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent 탭={탭} shoes={props.shoes}/>

      </div>
    </>
    )
}

function TabContent({탭}) {

  let [fade, setFade] = useState('');
  let {재고} = useContext(Context1)

  useEffect(() => {
    setTimeout(() => { setFade('end')}, 10)
    return () => {
      setFade('')
    }
  },[탭])

  return (
    <div className={'start' + fade}>
      { [<div>{재고}</div>,<div>내용1</div>,<div>내용2</div>][탭]}
    </div>
  )


  // if (props.탭 === 0) {
  //   return <div>내용0</div>
  // }
  // if (props.탭 === 1 ) {
  //   return <div>내용1</div>
  // }
  // if (props.탭 === 2) {
  //   return <div>내용2</div>
  // }

  // return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.탭]  이렇게하면 더 간단하다!!!!!!!!!!!!!
}

export default Detail;