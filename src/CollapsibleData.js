import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class CollapsibleData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listdata :[]
        }
    }
    // redirecToPage = (list) => {
    //     this.props.history.push('./productDetails/'+ list.productGroupId);
    // }

    handleClick= (list) => {
        console.log(list);
        this.productData(list.productGroupId).then(response => {
           this.setState({ listdata: response.data });
            //console.log('response', response);
            //console.log('data', this.state.listdata);
        })

    }
    
    productData = (productGroupId) => {
        return new Promise((resolve, reject) => {
            axios.get(`http://10.117.189.197:9090/INGProduct/api/productGroups/${productGroupId}/products`).then(function (response) {
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
                <div className="pb-2 pt-3 text-info">
                    {
                        this.props.listofProducts.map((list, i) => {
                            return (
                                <div>
                                    <div className="pt-3">
                                         <button onClick={()=>this.handleClick(list)}>{list.productGroupName}</button>
                                         <div>
                                            {
                                                this.state.listdata.map((item)=> {
                                                   return  <div>{item.productName}</div>
                                                })
                                            }
                                         </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

}

export default withRouter(CollapsibleData);