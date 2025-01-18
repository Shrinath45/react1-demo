
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, Outlet, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie";
export function FakestoreProduct(){
    let navigate = useNavigate();
    let [products, setProducts] = useState([{id:0, title:'', price:'', category:'', image:'', rating:{rate:0, count:0}}]);
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    let params = useParams();


    useEffect(()=>{
        if(cookies['username']){
            axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
            .then(Response =>{
                setProducts(Response.data);
            })
        }else{
            navigate("/");
        }


    }, [])

    function handleBackClick(){
        navigate("/home")
    }

    return(
        <div>
            <h3>{params.category.toUpperCase()} PRODUCTS</h3>
            <div className="row">
                <div className="col-6">
                    <main className="d-flex flex-wrap ">
                        {
                            products.map(product=>
                                <div className="card m-2 p-2" style={{width:'200px'}}>
                                    <Link to={`details/${product.id}`}>
                                    <img src={product.image} height="100" className="card-img-top" alt="" />
                                    </Link>
                                </div>
                            )
                        }

                        
                    </main>
                    <div>
                            <button onClick={handleBackClick} className="btn btn-warning p-2">Back to categories</button>
                    </div>
                </div>

                <div className="col-6">
                    <Outlet />
                </div>

            </div>
        </div>
    )
}