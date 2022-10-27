import React, {Component} from "react";

class MainForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            brand: '',
        }
    }

    handleBrandInput(event){
        console.log(event.target.value)
        this.setState({brand:event.target.value})
    }

    logBrandValue(){
        console.log(this.state.brand);
    }

    render(){
        return (<div>
        <div>Brand *: {this.state.brand}</div>
        <input onChange={this.handleBrandInput.bind(this)}></input>
        <div>Model: </div>
        <input ></input>
        <div>Review: </div>
        <input ></input>
        <div>Year: </div>
        <input ></input>
        <div>Price: </div>
        <input ></input>
        <div> </div>
        <div>
        <button onClick={this.logBrandValue.bind(this)}> Search </button>
        <button> Create </button>
        <button> Update </button>
        <button> Delete </button>
        </div>
        </div>
        )
    }
    

}

export default MainForm;