import React from "react";

export class DemoComponent extends React.PureComponent
{
    constructor(){
        super();
        this.state = {
            categories : ["All", "Electronics", "Fashion"],
            title: "Categories List"
        }
    }

    componentDidMount(){
        this.setState({title: "Select a Category"});
    }

    render(){
        return(
            <div className="container-fluid">
                <h2>{this.state.title}</h2>
                <select>
                    {
                        this.state.categories.map(category=><option key={category}>{category}</option>)
                    }
                </select>
            </div>
        )
    }
}