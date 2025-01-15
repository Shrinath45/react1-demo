import React from "react";

export class DemoComponent extends React.PureComponent
{
    constructor(){
        super();
        this.state = {
            msg: ""
        }
        
    }

    handleInsertClick(){
        this.setState({msg: "Record Inserted Successfully"});
    }
    handleDeleteClick(){
        this.setState({msg: "Record Deleted"});
    }

    componentDidMount(){
        this.setState({title: "Select a Category", theme: 'bg-primary text-white'});
    }

    render(){
        return(
            <div className="container-fluid">
                <button onClick={() => this.handleInsertClick()} className="btn btn-primary">Insert</button>
                <button onClick={() => this.handleDeleteClick()} className="btn btn-danger ms-2">Delete</button>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}