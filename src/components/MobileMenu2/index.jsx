import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MobileMenu2 extends Component {
  state = {
    isMenuShow: false,
    isOpen: false,
  };

  menuHandler = () => {
    this.setState({ isMenuShow: !this.state.isMenuShow });
  };

  setIsOpen = () => {
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
                Harry & Nancy
              </Link>
            </h2>
          </div>

          <ul className="responsivemenu">
            {/* HOME WITH BOOTSTRAP COLLAPSE */}
            <li>
              <p
                onClick={this.setIsOpen}
                className="d-flex justify-content-between align-items-center"
              >
                Home
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </p>
            </li>

            <div className={`collapse ${isOpen ? "show" : ""}`}>
              <ul>
                <li><Link to="/">Home Style 1</Link></li>
                <li><Link to="/home2">Home Style 2</Link></li>
                <li><Link to="/home3">Home Style 3</Link></li>
                <li><Link to="/home4">Home Style 4</Link></li>
              </ul>
            </div>

            <li><Link to="/home" onClick={this.menuHandler}>Couple</Link></li>
            <li><Link to="/home" onClick={this.menuHandler}>Story</Link></li>
            <li><Link to="/home" onClick={this.menuHandler}>People</Link></li>
            <li><Link to="/home" onClick={this.menuHandler}>Events</Link></li>
            {/* <li><Link to="/home" onClick={this.menuHandler}>Gallery</Link></li> */}
            <li><Link to="/home" onClick={this.menuHandler}>Rsvp</Link></li>
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
