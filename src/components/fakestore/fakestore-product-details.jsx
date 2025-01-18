import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export function FakestoreProductDetails(){

        const [product, setProduct] = useState({id:0, title:'', price:'', category:'', image:'', rating:{rate:0, count:0}});
        let params = useParams();

        useEffect(()=>{
            axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(Response=>{
                setProduct(Response.data);
            })
        },[params.id])
    

    return(
        <div>
            <h5>Details</h5>
            <dl>
                <img src={product.image} height='300' width='300' alt="" />
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
                <dt>Rating</dt>
                <dd>
                    <span className="badge bg-success text-white"> {product.rating.rate} <span className="bi bi-star-fill"></span></span> [{product.rating.count}]
                </dd>
            </dl>
            <Link to={`/products/${product.category}`}>Back To Products</Link>
        </div>
    )
}