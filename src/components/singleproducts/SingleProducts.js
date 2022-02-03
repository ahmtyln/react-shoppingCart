import React from 'react';
import { CartState } from '../context/Context';
import Rating from '../rating/Rating';

function SingleProducts({ prod }) {

    const { state: { cart }, dispatch } = CartState();

    return <div>
        <div className="card" style={{ width: 400, marginBottom: 10 }}>
            <img src={prod.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <div className="card-text"><span>$
                    {prod.price.split(".")[0]}</span>
                    {prod.fastDelivery ? (
                        <div>Fast Delivery</div>
                    ) : (
                        <div>5 Days Delivery</div>
                    )}
                </div>
                <Rating rating={prod.ratings} />
            </div>

            {
                cart.some(p => p.id === prod.id) ? (
                    <button onClick={() => {
                        dispatch({ type: "REMOVE_FROM_CART", payload:prod })
                    }} type="button" className="btn btn-danger">Remove From Cart</button>
                ) : (
                    <button onClick={() => {
                        dispatch({ type: "ADD_TO_CART", payload:prod })
                    }} type="button" className="btn btn-primary" disabled={!prod.inStock}>{!prod.inStock ? "Out of Stock" : "Add to Cart"}</button>
                )
            }
        </div>
    </div>;
}

export default SingleProducts;
