import React from "react";
import { DataCard } from "../controlled-somponent/data-card";
export class DemoComponent extends React.PureComponent
{
    constructor(){
        super();
        this.state = {
            
        }
    }

   

    render(){
        return(
            <div className="container-fluid">
                <h2>Product Details</h2>
              <DataCard cardTitle='Samsung TV' items={['LED', 'QLED', 'OLED']}/>
            </div>
        )
    }
}