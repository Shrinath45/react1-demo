import logo from './logo.svg';
import './App.css';
import { Login } from './login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container-fluid'>
       <BrowserRouter>
          <header className='bg-light p-3 mt-3 mb-4 border border-1 border-secondary'>
              <nav className='d-flex justify-content-between'>
                 <div className='fs-5 fw-bold'>Shopper.</div>
                 <div>
                  <span className='mx-2'> <Link to="/">Home</Link> </span>
                  <span className='mx-2'> <Link to="kids"> Kids Fashion</Link> </span>
                  <span className='mx-2'> <Link to="women"> Women Fashion </Link> </span>
                  <span className='mx-2'> <Link to="men">Men Fashion </Link> </span>
                </div>
                <div>
                   <Link className='bi bi-person-fill' to="login"> Signin </Link>
                </div>
              </nav>
          </header>
          <section>
              <Routes>
                  <Route path='/' element={<div><h2>Shopper Home</h2><p>Offers on Men, Women and Kids fashion</p></div>} />
                  <Route path='men' element={<div><h3>Men's Fashion</h3> <img src="men-fashion.jpg" width="200" height="200" alt=''/> </div>} />
                  <Route path='women' element={<div><h3>Women Fashion</h3> <img src="women-shop.jpg" width="200" height="200" alt=''/> </div>} />
                  <Route path='kids' element={<div><h3>Kids's Fashion</h3> <img src="kids-fashion.jpg" width="200" height="200" alt=''/> </div>} />
                  <Route path='login' element={<Login />} />
                  <Route path='*' element={<div><h4 className='text-danger'>Not Found</h4><p>Requested category not found</p></div>} />
              </Routes>
          </section>
       </BrowserRouter>
    </div>
  );
}

export default App;