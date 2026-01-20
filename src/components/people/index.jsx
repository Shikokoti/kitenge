import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sectiontitle from "../section-title";

import bride1 from "../../images/groomsmen-bridesmaid/1.jpg";
import bride2 from "../../images/groomsmen-bridesmaid/2.jpg";
import bride3 from "../../images/groomsmen-bridesmaid/3.jpg";
import bride4 from "../../images/groomsmen-bridesmaid/4.jpg";
import bride5 from "../../images/groomsmen-bridesmaid/5.jpg";
import bride6 from "../../images/groomsmen-bridesmaid/7.jpg";
import bride7 from "../../images/groomsmen-bridesmaid/6.jpg";
import bride8 from "../../images/groomsmen-bridesmaid/8.jpg";
import bride9 from "../../images/groomsmen-bridesmaid/9.jpg";
import bride10 from "../../images/groomsmen-bridesmaid/10.jpg";

import "./style.css";

const People = () => {
  const [activeTab, setActiveTab] = useState("groom");

  return (
    <div id="people" className="person-area section-padding pb-70">
      <div className="container">
        <Sectiontitle section="Groomsmen & Bridesmaid" />

        <div className="person-area-menu">
          {/* TABS */}
          <ul className="nav nav-tabs person-btn justify-content-center">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "groom" ? "active" : ""}`}
                onClick={() => setActiveTab("groom")}
              >
                Groomsman
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "bride" ? "active" : ""}`}
                onClick={() => setActiveTab("bride")}
              >
                Bridemaids
              </button>
            </li>
          </ul>

          {/* TAB CONTENT */}
          <div className="tab-content pt-4">
            {/* GROOMSMEN */}
            {activeTab === "groom" && (
              <div className="tab-pane fade show active">
                <div className="row">
                  {[bride1, bride2, bride3, bride4, bride5, bride6].map(
                    (img, i) => (
                      <div
                        className="col-lg-4 col-md-6 col-sm-6"
                        key={i}
                      >
                        <div className="person-wrap">
                          <div className="person-img">
                            <img src={img} alt="" />
                            <div className="social-list">
                              <ul>
                                <li><Link to="/"><i className="fa fa-facebook-f" /></Link></li>
                                <li><Link to="/"><i className="fa fa-twitter" /></Link></li>
                                <li><Link to="/"><i className="fa fa-skype" /></Link></li>
                              </ul>
                            </div>
                          </div>
                          <div className="person-content">
                            <h3>Mr Abraham</h3>
                            <span>Best Friend</span>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* BRIDESMAIDS */}
            {activeTab === "bride" && (
              <div className="tab-pane fade show active">
                <div className="row">
                  {[bride5, bride6, bride7, bride8, bride9, bride10].map(
                    (img, i) => (
                      <div className="col-lg-4 col-md-6" key={i}>
                        <div className="person-wrap">
                          <div className="person-img">
                            <img src={img} alt="" />
                            <div className="social-list">
                              <ul>
                                <li><Link to="/"><i className="fa fa-facebook-f" /></Link></li>
                                <li><Link to="/"><i className="fa fa-twitter" /></Link></li>
                                <li><Link to="/"><i className="fa fa-skype" /></Link></li>
                              </ul>
                            </div>
                          </div>
                          <div className="person-content">
                            <h3>Lily Brown</h3>
                            <span>Sister</span>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
