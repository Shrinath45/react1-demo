import react, { useState } from "react"


export function FormDemo(){

    const [Product, setProduct] = useState({Id:0, Name:'', Price:0, Stock:false, City:''});

    const [nameError, setNameError] = useState('');
    const [cityError, setCityError] = useState('');

    function handleIdChange(e){
        setProduct({
            Id: e.target.value,
            Name: Product.Name,
            Price: Product.Price,
            Stock: Product.Stock,
            City: Product.City

        })
    }
    function handleNameChange(e){
        setProduct({
            Id: Product.Id,
            Name: e.target.value,
            Price: Product.Price,
            Stock: Product.Stock,
            City: Product.City

        })
    }

    function handlePriceChange(e){
        setProduct({
            Id: Product.Id,
            Name: Product.Name,
            Price: e.target.value,
            Stock: Product.Stock,
            City: Product.City

        })
    }

    function handleStockChange(e){
        setProduct({
            Id: Product.Id,
            Name: Product.Name,
            Price: Product.Price,
            Stock: e.target.value,
            City: Product.City

        })
    }

    function handleCityChange(e){
        setProduct({
            Id: Product.Id,
            Price: Product.Price,
            Stock: Product.Stock,
            Name: Product.Name,
            City: e.target.value

        })
    }

    function handleRegisterClick(e){
        e.preventDefault();
        console.log(Product);
    }

    function handleNameBlur(e){
        if(e.target.value === ""){
            setNameError('Product Name is Required')
        }else{
            setNameError('');
        }
    }


    return(
        <div className="container-fluid">
            <form onSubmit={handleRegisterClick}>
            <h2>Register Product</h2>
            <dl>
                <dt>Product ID</dt>
                <dd><input type="number" value={Product.Id} onChange={handleIdChange}/></dd>
                <dt>Name</dt>
                <dd><input type="text" onBlur={handleNameBlur} value={Product.Name}  onChange={handleNameChange}/></dd>
                <dd className="text-danger">{nameError}</dd>
                <dt>Price</dt>
                <dd><input type="number" value={Product.Price} onChange={handlePriceChange}/></dd>
                <dt>Stock</dt>
                <dd><input type="checkbox" checked={Product.Stock} onChange={handleStockChange}/><label>Available</label></dd>
                <dt>Shipped To:</dt>
                <dd>
                    <select value={Product.City} onChange={handleCityChange}>
                        <option>Select City</option>
                        <option>Nanded</option>
                        <option>Pune</option>
                    </select>
                </dd>

            </dl>
            <button type="submit">Register</button>
            </form>
        </div>
    )
}