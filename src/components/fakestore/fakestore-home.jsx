import axios from "axios";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";



export function FakestoreHome(){

    const [categories, setCategories] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const navigate = useNavigate();

    useEffect(() =>{


        if(cookies['username']){
            axios.get(`https://fakestoreapi.com/products/categories`)
            .then(Response =>{
                setCategories(Response.data);
            })
        }else{
            navigate('/');
        }       
    }, [])

    function handleSignout(){
        removeCookie('username');
        navigate("/");
    }


    return(
        <div>
            <h5 className="d-flex justify-content-between"><span>Fakestore Home</span><span>{cookies['username']}</span><span><button onClick={handleSignout} className="btn btn-warning">Signout</button></span></h5>
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