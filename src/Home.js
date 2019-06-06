import React, { Component } from 'react';
import ProductDetails from './ReactCollapsible';
import Carousell from './Carousel';

class Home extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <ProductDetails />
                <Carousell />
            </div>
        );
    }
}

export default Home;