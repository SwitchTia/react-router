import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";


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
                        <h1>Product list</h1>
                    </div>

                    <div className="container  flex wrap">
                        {productsList.map((actress) => (
                            <div className="col card" key={actress.id}>
                                
                                <ProductCard 
                                name={actress.name} 
                                image={actress.image}
                                birth_year={actress.birth_year} 
                                nationality={actress.nationality}
                                biography={actress.biography}
                                most_famous_movies={actress.most_famous_movies.join(", ")}
                                awards={actress.awards}
                                />
                            </div>
                        ))}

                        {actorsList.map((product) => (
                            <div className="col card" key={product.id}>
                                
                                <Card 
                                id={product.id} 
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
