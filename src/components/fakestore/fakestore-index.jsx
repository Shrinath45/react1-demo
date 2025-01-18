import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreProduct } from "./fakestore-product";
import { FakestoreProductDetails } from "./fakestore-product-details";
import { FakestoreLogin } from "./fakestore-login";



export function FakestoreIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="d-flex justify-content-between border border-2 p-2 ">
                    <div className="fs-4 fw-bold">Fashion</div>
                    <div>
                        <nav>
                            <span className="mx-4">Home</span>
                            <span className="mx-4">Electronics</span>
                            <span className="mx-4">Jewelery</span>
                        </nav>
                    </div>
                </header>

                <section className="mt-4">
                    <Routes>
                        <Route path="/" element={<FakestoreLogin /> }  />
                        <Route path="home" element={<FakestoreHome /> }  />
                        <Route path="products/:category" element={<FakestoreProduct /> }>
                            <Route path="details/:id" element={<FakestoreProductDetails /> } />
                        </Route>
                        
                    </Routes>

                </section>
            </BrowserRouter>
        </div>
    )
}