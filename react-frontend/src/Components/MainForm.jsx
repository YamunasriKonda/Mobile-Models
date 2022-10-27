import React, { Component } from "react";


class MainForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            brand: '',
            model: '',
            review: '',
            year: '',
            price: '',
        }
    }

    handleBrandInput(event) {
        console.log(event.target.value)
        this.setState({ brand: event.target.value })
    }

    saveDetails() {
        console.log("Entering Save");
        console.log('brand -----'+this.state.brand);
        const object = {
            brand: this.state.brand,
            modelNo: this.state.model,
            review: this.state.review,
            year: this.state.year,
            price: this.state.price
        };
        console.log("json: "+JSON.stringify(object))
        const url = "http://localhost:4400/create"
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(object),
            headers:{"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    getdetails() {
        console.log("Entering fetch");
        const url = "http://localhost:4400/get/Apple"
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    updateDetails() {
        console.log("Entering Update");
        const url = "http://localhost:4400/update/"+this.state.brand
        fetch(url,
            {
                method:'PUT',
                body: JSON.stringify({review: this.state.review})
            })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    deleteDetails() {
        console.log("Entering Delete");
        const urlDelete = "http://localhost:4400/delete/Apple"
        fetch(urlDelete,{method:'DELETE'})
        .then(response => response.json())
        .then(data => console.log(data))
    }

    handleModelInput(event) {
        console.log(event.target.value)
        this.setState({ model: event.target.value })
    }

    logModelValue() {
        console.log(this.state.model);
    }

    handleReviewInput(event) {
        console.log(event.target.value)
        this.setState({ review: event.target.value })
    }
    logReviewValue() {
        console.log(this.state.review);
    }

    handleYearInput(event) {
        console.log(event.target.value)
        this.setState({ year: event.target.value })
    }
    logYearValue() {
        console.log(this.state.year);
    }

    handlePriceInput(event) {
        console.log(event.target.value)
        this.setState({ price: event.target.value })
    }
    logPriceValue() {
        console.log(this.state.price);
    }

    render() {
        return (<div>
            <div>Brand *: {this.state.brand}</div>
            <input onChange={this.handleBrandInput.bind(this)}></input>
            <div>Model:{this.state.model} </div>
            <input onChange={this.handleModelInput.bind(this)}></input>
            <div>Review:{this.state.review} </div>
            <input onChange={this.handleReviewInput.bind(this)}></input>
            <div>Year: {this.state.year} </div>
            <input onChange={this.handleYearInput.bind(this)}></input>
            <div>Price: {this.state.price} </div>
            <input onChange={this.handlePriceInput.bind(this)} ></input>
            <div> </div>

            <div>
                <button onClick={this.getdetails.bind(this)}> Search </button>
                <button onClick={this.saveDetails.bind(this)}>Create </button>
                <button onClick={this.updateDetails.bind(this)}> Update </button>
                <button onClick={this.deleteDetails.bind(this)}> Delete </button>
            </div>

        </div>
        )
    }


}

export default MainForm;