import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import './App.css';


const App = ({products}) => {
  const [cartList, setCartList] = useState([]);

  return (
    <Router>
      <div>
        <nav >
          <Link to="/Home" >Home</Link>
          <Link to="/cart" >Cart</Link>
          <Link to="/checkout" >Checkout</Link>
        </nav>
        <Switch>
          <Route path="/checkout">
            <Checkout products={products}/>
          </Route>
          <Route path="/cart">
            <Cart products={products} cartList={cartList} setCartList={setCartList}/>
          </Route>
          <Route path="/Home">
            {/* <Home products={products}/> */}
            <Home products={products} cartList={cartList} setCartList={setCartList}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
