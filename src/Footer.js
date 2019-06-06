import React from 'react';
import INGLOGO from './INGLOGO.png';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div>
            <div className="row" style={{ backgroundColor: "#ff6200" }}>
                <div className="col-sm-4 pt-5">
                    <img src={INGLOGO} alt="ING Banking Application" />
                </div>
                <div className="col-sm-4 text-white pt-5 text-left">
                    <b>ABOUT US</b><br />
                    <br />
                    We understand that unexpected change can make things take a turn for the better.
                    That’s why it’s good to know that ING Wholesale Banking is welcoming a growing number of clients to experience the benefits of its unique way of working
                </div>
                <div className="col-sm-4">
                    <div className="text-white  pt-5 pb-4">
                        <b>Follow US</b>
                        <br />
                        <br />
                        <div className="col-sm-12">
                            <SocialIcon url="http://twitter.com//ing_news?lang=en" />
                            <SocialIcon url="http://google.com/" />
                            <SocialIcon url="http://instragram.com" />
                            <SocialIcon url="http://facebook.com//ING/" />
                            <SocialIcon url="http://youtube.com//user/ing" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer; 