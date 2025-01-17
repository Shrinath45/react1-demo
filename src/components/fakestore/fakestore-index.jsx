import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreProduct } from "./fakestore-product";
import { FakestoreProductDetails } from "./fakestore-product-details";



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
                        <Route path="/" element={<FakestoreHome /> }  />
                        <Route path="products/:category" element={<FakestoreProduct /> }  />
                        <Route path="details/:id" element={<FakestoreProductDetails /> }  />
                    </Routes>

                </section>
            </BrowserRouter>
        </div>
    )
}