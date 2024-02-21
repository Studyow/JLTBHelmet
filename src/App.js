import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Home from './pages/Home';
import Success from './pages/Success';
import CartProvider from './CartContext';
import Orders from './pages/Orders' 
import Design from './pages/Design' 
import FooterContent from './components/Footer_Content';
import BlogCards from './pages/BlogCards';
// import { browserHistory } from 'history';
// localhost:3000 -> Home
// localhost:3000/success -> Success

function App() {
  return (
    <CartProvider>
      <div className='makeSticky'>
      <Container sticky-top>
        <NavbarComponent fixed-top></NavbarComponent>
        {/* <browserHistory> */}
      </Container>
      </div>
      <Container fluid>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="orderstakers" element={<Orders />} />
            <Route path="design" element={<Design />} />
            <Route path="blogs" element={<BlogCards />} />
          </Routes>
        </Router>
        {/* </browserHistory> */}
      </Container>
      <Container fluid>
      <FooterContent/>
      </Container>
    </CartProvider>
  );
}

export default App;
