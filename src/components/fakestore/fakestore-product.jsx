
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export function FakestoreProduct(){

    let [products, setProducts] = useState([{id:0, title:'', price:'', category:'', image:'', rating:{rate:0, count:0}}]);
    let params = useParams();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(Response =>{
            setProducts(Response.data);
        })
    }, [])

    return(
        <div>
            <h3>{params.category.toUpperCase()} PRODUCTS</h3>
            <main className="d-flex flex-wrap ">
                {
                    products.map(product=>
                        <div className="card m-2 p-2" style={{width:'200px'}}>
                            <Link to={`/details/${product.id}`}>
                            <img src={product.image} height="100" className="card-img-top" alt="" />
                            </Link>
                        </div>
                    )
                }
            </main>
            <Link to="/"> back To categories</Link>
        </div>
    )
}