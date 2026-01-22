import React from 'react'
import Sectiontitle from '../section-title'
import strory1 from '../../images/events/1.jpg'
import strory2 from '../../images/events/2.jpg'
import strory3 from '../../images/events/3.jpg'
import LocationMap from '../LocationModal/LocationModal'

import './style.css'

const Location = () => {
    return (


        <div id="event" className="service-area section-padding">
            <div className="container">
                <Sectiontitle section={'When & Where'} />
                <div className="service-area-menu">
                    <div className="Ceremony-wrap">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ceromony-img">
                                    <img src={strory1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ceromony-content">
                                    <h3>Wedding Church Ceremony</h3>
                                    <span>Saturday, 21 March 26, 9.00 AM-11.00 AM</span>
                                    <span>Nairobi Kenya, Brookhaven Grounds</span>
                                    <p>Come and celebrate with us!</p>
                                    <LocationMap buttonClass={'location-btn'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="ceromony-content ceromony-content2">
                                <h3>Wedding Deco Reveal</h3>
                                <span>Saturday, 21 March 26, 11.30 AM-12.30 PM</span>
                                <span>Nairobi Kenya, Brookhaven Grounds</span>
                                <p>Come and celebrate with us!</p>
                                <LocationMap buttonClass={'location-btn'} />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={strory2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={strory3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ceromony-content">
                                <h3>Reception Party</h3>
                                <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                                <span>256 Apay Road,Califonia Bong, London</span>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                                <LocationMap buttonClass={'location-btn'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location;