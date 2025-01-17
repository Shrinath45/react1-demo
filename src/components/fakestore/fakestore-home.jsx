import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";



export function FakestoreHome(){

    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(Response =>{
            setCategories(Response.data);
        })
    }, [])


    return(
        <div>
            <h5>Fakestore Home</h5>
            <ul className="list-unstyled">
                {
                    categories.map(category=> 
                        <li key={category} className="bg-dark text-white p-2 my-3 w-25"> <Link className="btn btn-dark w-100" to={`/products/${category}`}>{category.toUpperCase()} </Link> </li>
                        )
                }
            </ul>
        </div>
    )
}