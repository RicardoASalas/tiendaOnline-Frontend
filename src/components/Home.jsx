import React, { Component } from 'react'
import './style/Home.css'
import Item from './Item'
import Brand from './Brand'
import Sales from './Sales'
import Search from './Search'
import ProductList from './ProductList'

class Home extends Component {
    constructor(){
        super();
        this.state={

            element:[]
        }
    }
    getProductList(element){
        console.log("MOSTRAR FRASE!!!!!!!!!!")
        this.setState({
            element: element
        })
        console.log(this.state.element)
    }
    
    render() {
        
        return (
           
            <div>
                <h5 className="banner">All our products are genuine and original brand new.</h5>
                <Search getProductList={this.getProductList.bind(this)} />
                <ProductList sendList={this.state.element} />

                <div className="mainContainer">
                    <Item />
                    <Brand />
                </div>
                <p className="banner"><img src="http://www.allaboutcandc.com/uploads/1/0/4/6/10465076/published/great-deal-logo-header-8-18_1.png?1534784895" alt="" /></p>
                <div>
                    <Sales />
                    
                </div>

            </div>

        )
    }
}

export default Home;