import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {DataContext} from '../Context'
import '../css/Products.css'

export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products} = this.context;
        return (
            <div id="product">
               {
                   products.map(products => (
                         <div className="card" key={products._id}>
                                <Link to={`/products/${products._id}`}>
                                    <img src={products.src} alt="" />
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link to={`/products/${products._id}`}>{products.title}</Link>
                                    </h3>
                                    <span>${products.price}</span>
                                    <p>{products.description}</p>
                                    <button onClick={() =>this.context.addCart(products._id)}>Add to Cart</button>
                                </div>
                         </div>
                   ))
               }
            </div>
        )
    }
}

export default Products
