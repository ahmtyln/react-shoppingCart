import "./style.css";
import Rating from '../rating/Rating';
import { CartState } from '../context/Context';

function Filters() {

    const {productState:{byStock,byFastDelivery,sort,byRating},productDispatch} = CartState();

    console.log(byStock,byFastDelivery,sort,byRating);

    return <div className='filters'>
        <div className="title">Filter Products</div>
        <div className="form-check" onChange={() => productDispatch({
                type:"SORT_BY_PRICE",
                payload: "lowToHigh",
            })} 
        checked={sort==="lowToHigh" ? true : false}    
            >
            <input className="form-check-input" type="radio" name="group1" id="flexRadioDefault1" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Ascending
            </label>
        </div>
        <div className="form-check" onChange={() => productDispatch({
                type:"SORT_BY_PRICE",
                payload: "highToLow",
            })} 
        checked={sort==="highToLow" ? true : false} >
            <input className="form-check-input" type="radio" name="group1" id="flexRadioDefault2" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
                Descending
            </label>
        </div>
        <div className="form-check form-check-inline" onChange={() => productDispatch({
                type:"FILTER_BY_STOCK",
            })} 
        checked={byStock}>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Include Out Of Stock
                </label>
        </div>
        <div className="form-check form-check-inline"  onChange={() => productDispatch({
                type:"FILTER_BY_DELIVERY",
            })} 
        checked={byFastDelivery}>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Fast Delivery Only
                </label>
        </div>
        <div>
            <label style={{paddingRight:10}}>Rating: </label>
            <Rating rating={byRating} onClick={(i) => productDispatch({
                type:"FILTER_BY_RATING",
                payload: i+1,
            })} style={{cursor:"pointer"}} />
        </div>
        <button type="button" className="btn btn-light" onClick={() => productDispatch({
                type:"CLEAR_FILTERS",
            })} >Clear Filters</button>
    </div>;
}

export default Filters;
