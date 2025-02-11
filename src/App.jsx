import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import VegItems from './VegItems';
import NonVegItems from './NonVegItems';
import Orders from './Orders';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Milk from './Milk';


import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart';
import NotFound from './NotFound';
import { logout } from './Store';
import Login from './Login';





function App() { 

  const cart = useSelector(state => state.Cart); 
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);

  let dispatch=useDispatch();
  let {isAuthenticated,user}=useSelector(state=>state.auth);

  return (
    <>
      <BrowserRouter>
        <nav className='navbar'>
          <Link to="/home" className="home">Home</Link>
          <Link to="/Veg" className="veg">VegItems</Link>
          <Link to="/NonVeg" className="nonveg">NonVegItems</Link>
          <Link to="/Milk" className="milk">Milk</Link>
          <Link to="/cart" className="cart">Cart <span>{totalItems}</span></Link>
          <Link to="/orders" className="orders">Orders</Link>
          <Link to="/aboutus" className="aboutus">About Us</Link>
          <Link to="/contactus" className="contactus">Contact Us</Link>
          {/* <Link to="*" className="contactus">Not Found</Link> */}
          { isAuthenticated?(
            <>
            <span className='welcome'>Welcome {user}..!</span>
            <button onClick={()=>dispatch(logout())}>Logout</button>
            </>
          )
          :
          <Link to={"/login"}>Login</Link>

          }
          </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Veg" element={<VegItems />} />
          <Route path="/NonVeg" element={<NonVegItems />} />
          <Route path="/Milk" element={<Milk />} />
          <Route path="/cart" element={<Cart/>} />  
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
           <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

