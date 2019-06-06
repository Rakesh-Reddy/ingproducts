import React, { Component } from 'react';
import axios from 'axios';

class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productGroupId: props.match.params.productGroupId,
            listdata: []
        }
    }

    componentDidMount() {
        this.productData().then(response => {
            this.setState({ listdata: response.data });
            console.log('response', response);
            console.log('data', this.state.listdata);
        })
    }

    productData = () => {
        return new Promise((resolve, reject) => {
            axios.get(`http://10.117.189.197:9090/INGProduct/api/productGroups/${this.state.productGroupId}/products`).then(function (response) {
                console.log(response)
                resolve(response);
                console.log('details', response)
            }).catch(function (error) {
                reject(error);
            })
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.listdata.map((list, i) => {
                        return (
                            <div>
                                <div className="pt-3" onClick={this.redirecToPage}>
                                    {list.productName}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default ProductDetail;