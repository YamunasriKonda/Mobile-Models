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
            result:'',
        }
    }

    saveDetails = async() => {
        console.log("Entering Save");
        const object = {
            brand: this.state.brand,
            modelNo: this.state.model,
            review: this.state.review,
            year: this.state.year,
            price: this.state.price
        };
        const url = "http://localhost:4400/create"
        const rec = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(object),
            headers:{"Content-type": "application/json; charset=UTF-8"}
        });
        const data = await rec.json();
        this.setState({result: JSON.stringify(data)})
    }

    async getdetails() {
        console.log("Entering fetch");
        const url = "http://localhost:4400/get/"+this.state.brand
        const rec = await fetch(url);
        const data = await rec.json();
        this.setState({result: JSON.stringify(data)});
    }

    async updateDetails() {
        console.log("Entering Update"+ this.state.brand);
        const url = "http://localhost:4400/update/"+this.state.brand
        console.log('body: '+ JSON.stringify({review: this.state.review}));
        const object = {
            brand: this.state.brand,
            modelNo: this.state.model,
            review: this.state.review,
            year: this.state.year,
            price: this.state.price
        };
        const rec = await fetch(url,
            {
                method:'PUT',
                body: JSON.stringify(object),
                headers:{"Content-type": "application/json; charset=UTF-8"}
            });
        const data = await rec.json();
        this.setState({result: JSON.stringify(data)})
    }

    async deleteDetails() {
        console.log("Entering Delete");
        const urlDelete = "http://localhost:4400/delete/"+this.state.brand
        const rec = await fetch(urlDelete,{method:'DELETE'});
        const data = await rec.json();
        this.setState({result: JSON.stringify(data)})
    }

    handleModelInput(event) {
        console.log(event.target.value)
        this.setState({ model: event.target.value })
        this.setState({result: ''});
    }

    handleReviewInput(event) {
        console.log(event.target.value)
        this.setState({ review: event.target.value })
        this.setState({result: ''});
    }


    handleYearInput(event) {
        console.log(event.target.value)
        this.setState({ year: event.target.value })
        this.setState({result: ''});
    }

    handlePriceInput(event) {
        console.log(event.target.value)
        this.setState({ price: event.target.value })
        this.setState({result: ''});
    }
    
    handleBrandInput(event) {
        console.log(event.target.value)
        this.setState({ brand: event.target.value })
        this.setState({result: ''});
    }

    render() {
        return (<div>
            <div>Brand *: </div>
            <input onChange={this.handleBrandInput.bind(this)}></input>
            <div>Model:</div>
            <input onChange={this.handleModelInput.bind(this)}></input>
            <div>Review:</div>
            <input onChange={this.handleReviewInput.bind(this)}></input>
            <div>Year:  </div>
            <input onChange={this.handleYearInput.bind(this)}></input>
            <div>Price: </div>
            <input onChange={this.handlePriceInput.bind(this)} ></input>
            <div> </div>
            <div>
                <button onClick={this.getdetails.bind(this)}> Search </button>
                <button onClick={this.saveDetails.bind(this)}>Create </button>
                <button onClick={this.updateDetails.bind(this)}> Update </button>
                <button onClick={this.deleteDetails.bind(this)}> Delete </button>
            </div>
                <h3>Response to action performed</h3>
                <div style={{color:'blue'}}>{this.state.result}</div>
        </div>
        )
    }


}

export default MainForm;