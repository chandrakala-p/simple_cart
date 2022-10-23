import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import BuyPage from './Components/BuyPage';


import Cart from './Components/Cart';



function App() {

  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id
    })

    if (isAlreadyAdded !== -1) {
      toast("item already in the cart", {
        type: "error"
      });
      return;
    }
    setCartItem([...cartItem, item]);

  }


  const buyNow = () => {
    setCartItem([])
    toast("purchase complete", { type: "success" });
  }

  const removeItem = item => {
    setCartItem(cartItem.filter(removeItem => removeItem.id !== item.id))
  }



  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
