import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";


export default function Products() {

    const [productsList, setProductsList] = useState([]);
   
    
    useEffect(() => {
        fetchAllProducts();
    }, [])

    function fetchAllProducts() {
        axios.get("https://fakestoreapi.com/products")
        .then((resp) => {
      setProductsList(resp.data);
    });
    }

    return (
        <>
            <main>
                <div className="container">
                    <div className="text-center mb-20">
                        <h1>See our products:</h1>
                    </div>

                    <div className="container flex wrap">
                        {productsList.map((product) => (
                            <div className="col card" key={product.id}>
                                
                                <ProductCard 
                                title={product.title} 
                                image={product.image}
                                price={product.price}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </>
    )
}
