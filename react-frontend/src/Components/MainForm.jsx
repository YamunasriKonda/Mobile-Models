import React, {Component} from "react";
import axios from 'axios';

class MainForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            brand: '',
            model: '',
            review:'',
            year:'',
            price:'',
        }
    }
 
    handleBrandInput(event){
        console.log(event.target.value)
        this.setState({brand:event.target.value})
    }

    searchData(){
        console.log(this.state.brand);
    }   

    handleModelInput(event){
        console.log(event.target.value)
        this.setState({model:event.target.value})

  
    }
      logModelValue(){
        console.log(this.state.model);
      }  

      handleReviewInput(event){
        console.log(event.target.value)
        this.setState({review:event.target.value})

  
    }
      logReviewValue(){
        console.log(this.state.review);
      }  

      handleYearInput(event){
        console.log(event.target.value)
        this.setState({year:event.target.value})

  
    }
      logYearValue(){
        console.log(this.state.year);
      }  

      handlePriceInput(event){
        console.log(event.target.value)
        this.setState({price:event.target.value})

  
    }
      logPriceValue(){
        console.log(this.state.price);
      }  

    render(){
        return (<div>
        <div>Brand *: {this.state.brand}</div>
        <input onChange={this.handleBrandInput.bind(this)}></input>
        <div>Model:{this.state.model} </div>
        <input onChange={this.handleModelInput.bind(this)}></input>
        <div>Review:{this.state.review} </div>
        <input onChange={this.handleReviewInput.bind(this)}></input>
        <div>Year: {this.state.year} </div>
        <input onChange={this.handleReviewInput.bind(this)}></input>
        <div>Price: {this.state.price} </div>
        <input onChange={this.handlePriceInput.bind(this)} ></input>
        <div> </div>

        <div>
        <button> Search </button>
        <button>Create </button>
        <button> Update </button>
        <button> Delete </button>
        </div>
    
        </div>
        )
    }
    

}

export default MainForm;