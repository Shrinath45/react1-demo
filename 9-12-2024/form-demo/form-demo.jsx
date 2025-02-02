import { useState } from "react";

export function FormDemo(){

    const [product, setProduct] = useState({Id:0, Name: '', Price:0, Stock:false, City:''})
    

    function handleRegisterClick(e){
        e.preventDefault();
    }

    function handleIdChange(e){
        setProduct({
            Id: e.target.value,
            Name: product.Name,
            Price: product.Price,
            Stock: product.Stock,
            City: product.City
        })
    }
    function handleNameChange(e){
        setProduct({
            Name: e.target.value,
            Id: product.Id,
            Price: product.Price,
            Stock: product.Stock,
            City: product.City
        })
    }
    function handlePriceChange(e){
        setProduct({
            Price: e.target.value,
            Id: product.Id,
            Name: product.Name,
            Stock: product.Stock,
            City: product.City
        })
    }
    function handleStockChange(e){
        setProduct({
            Stock: e.target.checked,
            Id: product.Id,
            Name: product.Name,
            Price: product.Price,
            City: product.City
        })
    }
    function handleCityChange(e){
        setProduct({
            City: e.target.value,
            Id: product.Id,
            Name: product.Name,
            Price: product.Price,
            Stock: product.Stock
        })
    }



    return(
        <div className="container-fluid">
            <h2>Register Product</h2>
            <form onSubmit={handleRegisterClick}>
            <dl>
                <dt>Product Id</dt>
                <dd><input type="text" value={product.Id} onChange={handleIdChange} /></dd>
                <dt>Name</dt>
                <dd><input type="text" value={product.Name} onChange={handleNameChange}/></dd>
                <dt>Price</dt>
                <dd><input type="number" value={product.Price} onChange={handlePriceChange}/></dd>
                <dt>Stock</dt>
                <dd><input type="checkbox" value={product.Stock} onChange={handleStockChange}/> <label htmlFor="">Available</label></dd>
                <dt>Shiped To</dt>
                <dd>
                    <select name="" id="" value={product.City} onChange={handleCityChange}>
                        <option value="">Select City</option>
                        <option value=""></option>
                        <option value="">Select City</option>
                    </select>
                </dd>
            </dl>
            <button onClick={handleRegisterClick}>Submit</button>
            </form>
        </div>
    )
}