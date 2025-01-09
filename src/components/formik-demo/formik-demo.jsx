import React from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

export function FormikDemo(){


    

    const formik = useFormik({
        initialValues:{
            ProductID: 0,
            Name: '',
            Price:0,
            Stock:false,
            City: 'Select City',
            Mobile: ''
        },
        validationSchema: yup.object({
            ProductID:yup.number().required('Product ID is Required').min(1, 'Product ID cant be Zero'),
            Name: yup.string().required('Name Required').min(4, 'Name too short').max(10, 'Name too Long'),
            Mobile: yup.string().required('Mobile is Required').matches(/\+91\d{10}/, 'Invalid Mobile')


        }),
        onSubmit: (product)=>{
            console.log(product);
        }
    });


    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
            <h2>Register</h2>
            <dl>
                
                <dt>Product ID</dt>
                <dd><input type="number" name="ProductID" {...formik.getFieldProps('ProductID')}/></dd>
                <dd className="text-danger">{formik.errors.ProductID}</dd>
                <dt>Name</dt>
                <dd><input type="text" name="Name" onChange={formik.handleChange}/></dd>
                <dd className="text-danger">{formik.errors.Name}</dd>
                <dt>Price</dt>
                <dd><input type="number" name="Price" onChange={formik.handleChange}/></dd>
                <dt>Stock</dt>
                <dd><input type="checkbox" name="Stock" onChange={formik.handleChange}/><label>Available</label></dd>
                <dt>City</dt>
                <dd>
                    <select name="City" onChange={formik.handleChange}>
                        <option>Select City</option>
                        <option>Nanded</option>
                        <option>Pune</option>
                    </select>
                </dd>
                <dd className="text-danger">
                    {formik.errors.City}
                </dd>
                <dt>Mobile</dt>
                <dd><input type="text" name="Mobile" onChange={formik.handleChange}/></dd>
                <dd className="text-danger">
                    {formik.errors.Mobile}
                </dd>
            </dl>
            <button type="submit">Register</button>
            </form>
        </div>
    )
}