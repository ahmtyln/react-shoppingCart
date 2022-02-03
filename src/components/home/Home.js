import { CartState } from "../context/Context";
import SingleProducts from "../singleproducts/SingleProducts";
import "./style.css";
import Filters from "../filters/Filters";

const Home = () => {

    const { state: { products },
            productState:{byStock,byFastDelivery,sort,byRating,searchQuery} } = CartState();

    const transformProducts = () =>{
        let sortedProducts = products;

        if(sort){
            sortedProducts = sortedProducts.sort((a,b) =>(
                sort==="lowToHigh" ? a.price - b.price : b.price-a.price
            ))
        }

        if(!byStock){
            sortedProducts = sortedProducts.filter((prod) => prod.inStock)
        }

        if(byFastDelivery){
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
        }

        if(byRating){
            sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating)
        }

        if(searchQuery){
            sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery))
        }
        
        return sortedProducts;
    }

    return <div className="containerHome">
        <Filters />
        <div className="containerProducts">

            {
                transformProducts().map((prod) => {
                    return < SingleProducts key={prod.id} prod={prod} />
                })
            }


        </div>
    </div>;
}

export default Home;
