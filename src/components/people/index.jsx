import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sectiontitle from "../section-title";

import groom1 from "../../images/groomsmen-bridesmaid/groom.png";
import groom2 from "../../images/groomsmen-bridesmaid/groom.png";
import groom3 from "../../images/groomsmen-bridesmaid/groom.png";
import groom4 from "../../images/groomsmen-bridesmaid/groom.png";
import groom5 from "../../images/groomsmen-bridesmaid/groom.png";
import groom6 from "../../images/groomsmen-bridesmaid/groom.png";

import bride1 from "../../images/groomsmen-bridesmaid/bride.png";
import bride2 from "../../images/groomsmen-bridesmaid/bride.png";
import bride3 from "../../images/groomsmen-bridesmaid/bride.png";
import bride4 from "../../images/groomsmen-bridesmaid/bride.png";
import bride5 from "../../images/groomsmen-bridesmaid/bride.png";
import bride6 from "../../images/groomsmen-bridesmaid/bride.png";

import "./style.css";

const People = () => {
  const [activeTab, setActiveTab] = useState("groom");

  // Groomsmen Data
  const groomsmen = [
    { name: "Brian Lunayo", role: "GROOMSMAN", img: groom1 },
    { name: "Abdi Aziz Noor", role: "GROOMSMAN", img: groom2 },
    { name: "Rashid Mbakara", role: "GROOMSMAN", img: groom3 },
    { name: "Mitch Okello", role: "GROOMSMAN", img: groom4 },
    { name: "Stephen Muthama", role: "GROOMSMAN", img: groom5 },
    { name: "Erick Houl", role: "GROOMSMAN", img: groom6 },
    { name: "Diego Harkamisco", role: "GROOMSMAN", img: groom6 },
  ];

  // Bridesmaids Data
  const bridesmaids = [
    { name: "Tamara Mwendwa", role: "BRIDESMAID", img: bride1 },
    { name: "⁠Faith Waqo", role: "BRIDESMAID", img: bride2 },
    { name: "Sharon Lunayo", role: "BRIDESMAID", img: bride3 },
    { name: "Ralia Adaan Noor", role: "BRIDESMAID", img: bride4 },
    { name: "Jane Muthama", role: "BRIDESMAID", img: bride5 },
    { name: "Naomi Kinuthia", role: "BRIDESMAID", img: bride6 },
    { name: "Maryline Chelimo", role: "BRIDESMAID", img: bride6 },
  ];

  return (
    <div id="people" className="person-area section-padding pb-70">
      <div className="container">
        <Sectiontitle section="Groomsmen & Bridesmaids" />

        <div className="person-area-menu">
          {/* TABS */}
          <ul className="nav nav-tabs person-btn justify-content-center">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "groom" ? "active" : ""}`}
                onClick={() => setActiveTab("groom")}
              >
                Groomsmen
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "bride" ? "active" : ""}`}
                onClick={() => setActiveTab("bride")}
              >
                Bridesmaids
              </button>
            </li>
          </ul>

          {/* TAB CONTENT */}
          <div className="tab-content pt-4">
            {/* GROOMSMEN */}
            {activeTab === "groom" && (
              <div className="tab-pane fade show active">
                <div className="row">
                  {groomsmen.map((person, i) => (
                    <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                      <div className="person-wrap">
                        <div className="person-img">
                          <img src={person.img} alt={person.name} />
                          <div className="social-list">
                            <ul>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-facebook-f" />
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-twitter" />
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-skype" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="person-content">
                          <h3>{person.name}</h3>
                          <span>{person.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BRIDESMAIDS */}
            {activeTab === "bride" && (
              <div className="tab-pane fade show active">
                <div className="row">
                  {bridesmaids.map((person, i) => (
                    <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                      <div className="person-wrap">
                        <div className="person-img">
                          <img src={person.img} alt={person.name} />
                          <div className="social-list">
                            <ul>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-facebook-f" />
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-twitter" />
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-skype" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="person-content">
                          <h3>{person.name}</h3>
                          <span>{person.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
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
