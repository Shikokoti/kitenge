import React from 'react'
import {Link} from 'react-router-dom'
import strory1 from '../../images/story/meet.png'
import strory2 from '../../images/story/date.png'
import strory3 from '../../images/story/engagement.png'
import strory4 from '../../images/story/love.png'
import './style.css'


const Story = () =>{
    return(
        <div id="story" className="story-area section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <h2>Our Story</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="story clearfix">
                            <div className="story-top"></div>
                            <div className="content-wrapper">
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory1} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>How we met</h2>
                                        <span className="date">Jan 09, 2020</span>
                                        <p>We met in the most ordinary of moments, which quietly turned into something extraordinary.</p>
                                        <div className="story-button">
                                            {/* <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory2} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our First Date </h2>
                                        <span className="date">April 25, 2020</span>
                                        <p>We skipped the pressure and went straight to Milano’s for ice cream. Safe to say, it worked.</p>
                                        <div className="story-button">
                                            {/* <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory3} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our Marriage Proposal</h2>
                                        <span className="date">Dec 12, 2022</span>
                                        <p>A Friday evening, our favorite people, and a moment we’ll cherish forever.
 💍 </p>
                                        <div className="story-button">
                                            {/* <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory4} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our Engagement</h2>
                                        <span className="date">Dec 17, 2022</span>
                                        <p>On December 17th, 2022, we took another beautiful step toward 🤍.</p>
                                        <div className="story-button">
                                            {/* <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="story-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Story;