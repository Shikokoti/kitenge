import React from 'react';
import './style.css';
import LocationMap from '../LocationModal/LocationModal';

const Welcome = () => {
    return (
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Welcome to our big day</h2>
                            <p>
                                Join us as we celebrate love, commitment, and the start
                                of a beautiful journey together.
                            </p>

                            {/* Scroll to RSVP Section */}
                            <div className="btn">
                                <a href="#rsvp">RSVP</a>
                            </div>

                            <LocationMap buttonClass={'location-btn'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
