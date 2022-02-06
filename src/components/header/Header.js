import React from 'react';
import "./Style.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"
import { CartState } from '../context/Context';
import { AiFillDelete } from "react-icons/ai"

function Header() {

  const { state: { cart }, dispatch, productDispatch } = CartState();

  return <nav className="navbar navbar-dark bg-dark">
    <div className="container">
      <Link to="/react-shoppingCart/" className="navbar-brand linkHeader">Shopping Cart</Link>
      <form className="d-flex formHeader">
        <input className="inputHeader form-control" type="search" placeholder="Search a Product" aria-label="Search" onChange={(e) => productDispatch({
                type:"FILTER_BY_SEARCH",
                payload: e.target.value,
            })}  />
        <div className="btn-group">
          <button type="button" className="btn btn-success btnHeader dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <FaShoppingCart />
            <span>{cart.length}</span>
          </button>
          <ul className="dropdown-menu">
            <div className="dropdown-item">
              {cart.length > 0 ? 
              
              (
                <div className='containerCart'>
                {cart.map((prod) => (
                  <span className="cartitem" key={prod.id}>
                    <img
                      src={prod.image}
                      className="cartItemImg"
                      alt={prod.name}
                    />
                    <div className="cartItemDetail">
                      <span>{prod.name}</span>
                      <span>$ {prod.price.split(".")[0]}</span>
                    </div>
                    <AiFillDelete
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })}
                    />
                  </span>
                ))}
                <Link to= "/react-shoppingCart/cart">
                  <button type="button" className="btn btn-primary">Go to Cart</button>
                </Link>
                </div>
            ) : (<span style={{ padding: 10 }}>Cart is Empty</span>)}
        </div>
      </ul>
    </div>
  </form>
    </div >
  </nav >;
}

export default Header;
