import { useEffect, useState } from "react";
import axios from "axios";
import './mouse-events.css'

export function MouseEvents(){
     
      const [product, setProduct] = useState({title:"", price:0, rating:{ratings:0, rate:0, reviews:0}, offers:[], image:''});
      
      function LoadData(){

        axios.get('product.json').then(Response=>{
          setProduct(Response.data);
        })

      }
    
      useEffect(()=>{
          LoadData();
      },[])

     return(
        <div className="container-fluid">
            <div className="mt-4 row">
               <div className="col-4">
                 <img width="100%" src={product.image} height="450" />
               </div>
               <div className="col-8">
                    <div className="fs-4">{product.title}</div>
                    <div className="mt-2">
                       <span className="badge bg-success"> {product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                       <span className="text-secondary fw-bold"> {product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews.toLocaleString()} reviews </span>
                    </div>
                    <div className="mt-4 fw-bold fs-1">
                         {product.price}
                    </div>
                    <div className="mt-4">
                        <h5>Available Offers</h5> 
                        <ul className="list-unstyled">
                          {
                              product.offers.map(offer=> <li className="bi bi-tag-fill text-success my-3" key={offer}> <span className="text-secondary">{offer}</span> </li>)
                          }
                        </ul>
                    </div>
               </div>
            </div>
        </div>
     )
}