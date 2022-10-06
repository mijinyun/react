import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';
import Detail from './detail';



function App() {

  let [shoes,setShoes] = useState(data);

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">MyShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to='/'>홈</Link>
      <Link to='/detail'>상세페이지</Link>

      
      <Routes>
        <Route path='/' element= {
          <>
          <div className='main-bg'></div>
          </>
        }/>
        <Route path='/detail' element={<Detail shoes={shoes}/>} />
      </Routes>
    </div>
  );
}

export default App;
