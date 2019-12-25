
import './style/Item.css'
import axios from 'axios';

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class Item extends Component {
    constructor() {

        super();
        this.state = {
            items: [],
            i: 0,
            y: 1,
            z: 2
        }

    }
    componentDidMount() {

        axios.get('http://localhost:3001/product/allProduct')
            .then(item => {

        
                var array = item.data
                var i = array.length;
                while (i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let tmp = array[i];
                    array[i] = array[j];
                    array[j] = tmp;
                }
                this.setState({
                    items: array
                })
               


            })
            .catch(err => { console.log(err) })

    }
    increaseIndex = (e) => {
    
        if (this.state.z < 999) {
        this.setState({
            i: (this.state.i) + 1,
            y: (this.state.y) + 1,
            z: (this.state.z) + 1,
        })
    }
    else{
        this.setState({
            i: 0,
            y: 1,
            z: 2
        }) 
    }
    }
    decreaseIndex = (e) => {
      
        if (this.state.i > 0) {
            this.setState({
                i: (this.state.i) - 1,
                y: (this.state.y) - 1,
                z: (this.state.z) - 1,
            })
        } else {
            this.setState({
                i: 997,
                y: 998,
                z: 999
            })

        }

    }
    render() {
        const elemento = this.state.items
        
        if (elemento[999]) {

            return (
                
                <div className='section'>
                    
                    <div className='productCard' onClick={this.increaseIndex} >
                    
                        <img alt="right item"  src={elemento[this.state.z].image} />
                        <img alt="right arrow" className='imageArrow'src="https://image.flaticon.com/icons/png/512/130/130882.png" />
                            <h4>{elemento[this.state.z].brand} </h4>
                            <h5>{elemento[this.state.z].name} </h5>
                            <h4 className="price">{elemento[this.state.z].price} € </h4>
                     
                    </div>
                   
                    <div className='productCard' id='selectedProduct'>
                        <div className='imageContainer'>
                        <   img alt="center item" src={elemento[this.state.y].image} />
                        </div>
                            <h4>{elemento[this.state.y].brand} </h4>
                            <h5>{elemento[this.state.y].name} </h5>
                            <h4 className="price">{elemento[this.state.y].price} € </h4>
                      
                    </div>
                    

                    <div className='productCard' onClick={this.decreaseIndex}>
                    <img alt="left arrow " className='imageArrow'src="https://image.flaticon.com/icons/png/512/130/130884.png"/>
                        <img alt="left item " src={elemento[this.state.i].image}  />
                            <h4>{elemento[this.state.i].brand} </h4>
                            <h5>{elemento[this.state.i].name} </h5>
                            <h4 className="price">{elemento[this.state.i].price} € </h4>
                     
                    </div  >
                </div>

            );

        }
        else {
            return (
                <p>
                    Cargando...
                </p>
            )
        }

    }
}

export default Item;

