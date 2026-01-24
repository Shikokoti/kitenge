import React from 'react'
import {Link} from 'react-router-dom'
import couple1 from '../../images/couple/1.jpg'
import couple2 from '../../images/couple/2.jpg'
import couple3 from '../../images/couple/3.jpg'
import './style.css'

const Couple2 = () => {
    return(
        <div id="couple" className="couple-area section-padding pb-70">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <h2>Two Hearts, One Journey</h2>
                    </div>
                </div>
                <div className="couple-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 couple-single">
                            <div className="couple-wrap2">
                                <div className="couple-img3">
                                    <img src={couple1} alt=""/>
                                </div>
                                <div className="couple-text">
                                    <div className="couple-content">
                                        <h4>Michelle Makena</h4>
                                        <p>Join us to our beautiful wedding celebration.</p>
                                    </div>
                                    <div className="social-icon">
                                        <ul className="d-flex">
                                            <li><Link to="/home2"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link to="/home2"><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link to="/home2"><i className="fa fa-google-plus"></i></Link></li>
                                            <li><Link to="/home2"><i className="fa fa-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 couple-single">
                            <div className="couple-img2">
                                <img src={couple3} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 couple-single md-0">
                            <div className="couple-wrap2">
                                <div className="couple-wd50">
                                     <img src={couple2} alt=""/>
                                </div>
                                <div className="couple-text">
                                    <div className="couple-content">
                                        <h4>Ellis Lunayo</h4>
                                        <p>Hi I am Ellis Lunayo. Welcome to our D Day. </p>
                                    </div>
                                    <div className="social-icon">
                                        <ul className="d-flex">
                                            <li><Link to="/home2"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link to="/home2"><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link to="/home2"><i className="fa fa-google-plus"></i></Link></li>
                                            <li><Link to="/home2"><i className="fa fa-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
    )
}

export default Couple2;