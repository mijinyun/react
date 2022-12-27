import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { createContext, useEffect, useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Product from './product';
import { useQuery } from 'react-query';
import axios from 'axios';
import { lazy,Suspense } from 'react';

//lazy import : 필요해질때 import
// import Detail from './routes/detail';
// import Cart from './routes/Cart'
const Detail = lazy(() => import('./routes/detail.js'));
const Cart = lazy(() => import('./routes/Cart.js'));



export let Context1 = createContext(); //셋팅1. context를 만들어주는 것 - context1 = state보관함.


function App() {

  useEffect(() => {
    if (localStorage.getItem('watched'  != undefined)) {
      localStorage.setItem('watched', JSON.stringify([]));
    }
  },[])


  let [shoes,setShoes] = useState(data);
  let [재고] = useState([10,11,12]); //detail, tabContent에서 쓰고싶으면? - context api 써보기
  let navigate = useNavigate();

  //react-query 이용해서 ajax요청
  let result = useQuery('작명', () => {
    return axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
      return a.data;
    }),
    { staleTime : 2000 } //타이머 기능.
  })
  

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">MyShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail')}} >Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart')}} >Cart</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            { result.isLoading ? '로딩중입니다.' : result.data.name}
            </Nav>
        </Container>
      </Navbar>

      <Link to='/'>홈</Link>
      <br />
      <Link to='/detail'>상세페이지</Link>

      
      <Routes>
        <Route path='/' element= {
          <>
          <div className='main-bg'></div>

          <button onClick={() => { 
            let copy = [...shoes];
            copy.sort((a,b) => {
              if ( a.title.toLowerCase() > b.title.toLowerCase()) return 1;
              else if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
              else return 0;
            });

            console.log(copy);
            setShoes(copy);
          }}>가나다순정렬</button>

          <div className="container">
          <div className="row">
            { shoes.map((a, i)=>{
              return <Product shoes={shoes[i]} i={i}></Product>
              })}
            </div>
          </div> 
          </>
        }/>

        <Route path='/event' element={<Event />}>
          <Route path='one' element={<h5>첫 주문시 양배추즙 서비스</h5>} />
          <Route path='two' element={<h5>생일기념 쿠폰받기</h5>} />
        </Route>
        <Route path='/detail/:id' element={
          <Suspense fallback={<div>로딩중임</div>}>
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes}/> 
                {/* 여기안의 모든 컴포넌트는 재고, shoes 사용가능해짐 */}
            </Context1.Provider>
          </Suspense>
            //셋팅2. <Context>로 원하는 컴포넌트 감싸기
            //셋팅3. value={{state1, state2...}} 이렇게 보내주면 됨.
            } />
            <Route path='/cart' element={
            <Suspense fallback={<div>로딩중임</div>}>
              <Cart />
            </Suspense>
          } />
        <Route path='*' element={<div>없는 페이지</div>}/>
      </Routes>
    </div>
  );
}

function Event () {
  return (
    <>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </>
  )
}

export default App;
