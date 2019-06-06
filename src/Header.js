import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import INGLOGO from './INGLOGO.png';
import Analytics from './Analytics';

class Header extends Component {

    render() {
        return (
            <div className="row col-md-12" style={{backgroundColor:"#ff6200" , height:"85px"}}>
                <div className="col-md-4 pt-4 pb-5">
                    <Link style={{textDecoration:"none"}} to="/"><h2 className="text-white">ING Banking Application</h2></Link>
                    </div>
                    <div className="col-md-1 pt-3 pb-5">
                        <img className="fluid" width="100px" height="60px" src={INGLOGO} alt="" />
                    </div>
                    <div className="col-md-2 pt-4">
                        <Link className="text-white" style={{textDecoration:"none"}} to="/analytics">Analytics</Link>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-2 pt-4 pb-5">
                       <button className="btn text-white" style={{width:"150px" , height:"40px" , backgroundColor:"#ff6200"}}>English/Spanish</button>
                    </div>
            </div>
        );
    }
}

export default Header;
