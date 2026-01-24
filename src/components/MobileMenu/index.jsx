import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import "./style.css";

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: false,
  };

  menuHandler = () => {
    this.setState({ isMenuShow: !this.state.isMenuShow });
  };

  setIsOpen = (e) => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;

    return (
      <div>
        <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
          <div className="close" onClick={this.menuHandler}>
            <i className="fa fa-close"></i>
          </div>

          <div className="logo2">
            <h2>
              <Link to="/home" onClick={this.menuHandler}>
                Makena & Ellis
              </Link>
            </h2>
          </div>

          <ul className="responsivemenu">
            {/* HOME WITH BOOTSTRAP COLLAPSE */}
            <li>
              <a
                href="/"
                onClick={this.setIsOpen}
                className="d-flex justify-content-between align-items-center"
                aria-expanded={isOpen}
              >
                Home
                <i className="fa fa-angle-right"></i>
              </a>
            </li>

            <div className={`collapse ${isOpen ? "show" : ""}`}>
              <ul>
                <li><Link to="/">Home Style 1</Link></li>
                <li><Link to="/home2">Home Style 2</Link></li>
                <li><Link to="/home3">Home Style 3</Link></li>
                <li><Link to="/home4">Home Style 4</Link></li>
              </ul>
            </div>

            <li><AnchorLink href="#couple" onClick={this.menuHandler}>Couple</AnchorLink></li>
            <li><AnchorLink href="#story" onClick={this.menuHandler}>Story</AnchorLink></li>
            <li><AnchorLink href="#people" onClick={this.menuHandler}>People</AnchorLink></li>
            <li><AnchorLink href="#event" onClick={this.menuHandler}>Events</AnchorLink></li>
            {/* <li><AnchorLink href="#gallery" onClick={this.menuHandler}>Gallery</AnchorLink></li> */}
            <li><AnchorLink href="#rsvp" onClick={this.menuHandler}>Rsvp</AnchorLink></li>
            {/* <li><Link to="/blog" onClick={this.menuHandler}>Blog</Link></li>
            <li><Link to="/blog-details" onClick={this.menuHandler}>Blog Details</Link></li> */}
          </ul>
        </div>

        <div className="showmenu" onClick={this.menuHandler}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}
