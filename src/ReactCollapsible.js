import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import axios from 'axios';
import ReactCollapsible from './CollapsibleData';

class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listofProducts: [],
        }
    }

    componentDidMount() {
        this.initialData().then(response => {
            this.setState({ listofProducts: response.data });
            console.log('response', response);
            console.log('data', this.state.listofProducts);
        })
    }

    initialData = () => {
        const url="http://10.117.189.197:9090/INGProduct";
        return new Promise((resolve, reject) => {
            axios.get('http://10.117.189.197:9090/INGProduct/api/productGroups').then(function (response) {
                console.log(response)
                resolve(response);
                console.log('response', response)
            }).catch(function (error) {
                reject(error);
            })
        });
    }

    render() {
        return (
            <div className="pt-4 pb-5 pl-4">
                <div className="row col-md-8 border border-top" style={{ color: "#ff6200" }}>
                    <Collapsible trigger="Select Product groups">
                        <ReactCollapsible listofProducts={this.state.listofProducts} />
                        
                    </Collapsible>
                </div>
            </div>
        );
    }
}

export default ProductDetails;