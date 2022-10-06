import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/detail';
import Product from './product';
import Cart from './routes/Cart'


function App() {

  let [shoes,setShoes] = useState(data);
  let navigate = useNavigate();

  

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">MyShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail')}} >Detail</Nav.Link>
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
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>} />
        <Route path='/cart' element={<Cart />} />
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
