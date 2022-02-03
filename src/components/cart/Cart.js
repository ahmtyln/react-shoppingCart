import React, { useState, useEffect } from 'react';
import { CartState } from "../context/Context";
import Rating from '../rating/Rating';
import "./style.css";
import { AiFillDelete } from "react-icons/ai"

function Cart() {
  const { state: { cart }, dispatch } = CartState()

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
  }, [cart])
  return <div className='home'>
    <div className='productContainer'>
      <ul className="list-group">
        {
          cart.map((prod) => {
            return <li key={prod.id} className="list-group-item">

              <div className="row align-items-start">
                <div className="col-2">
                  <img src={prod.image} alt={prod.name} className='img img-fluid img-thumbnail' />
                </div>
                <div className="col-4">
                  <span>{prod.name}</span>
                </div>
                <div className="col-2">
                  <span>$ {prod.price}</span>
                </div>
                <div className="col-2">
                  <Rating rating={prod.ratings} />
                </div>
                <div className="col-1 selectContainer">
                  <select className="form-select" aria-label="Default select example" value={prod.qty} onChange={(e) => dispatch({type:"CHANGE_CART_QTY",payload:{id:prod.id, qty:e.target.value}})}>
                    {[...Array(prod.inStock).keys()].map((x) => (<option key={x + 1}>{x + 1}</option>))}
                  </select>
                </div>
                <div className="col-1">
                  <button onClick={() => {
                    dispatch({ type: "REMOVE_FROM_CART", payload: prod })
                  }} type="button" className="btn btn-danger"><AiFillDelete fontSize="20px"
                  style={{ cursor: "pointer" }}/></button>
                </div>
              </div>
            </li>
          })
        }
      </ul>
    </div>
    <div className="filters summary">
      <span className="title">Subtotal ({cart.length}) items</span>
      <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
      <button type="button" disabled={cart.length === 0} className="btn btn-primary">Proceed to Checkout</button>
    </div>
  </div>;
}

export default Cart;
