import taralindLogo from '../images/taralind.png'
import React from "react";
import { connect } from 'react-redux';
import { changeLanguage } from '../actions'
import {
  ICELANDIC,
  ENGLISH
} from '../constants/languageCodes';

class Header extends React.Component{
  onIcelandic = (e) => {
    e.preventDefault()
    this.props.changeLanguage(ICELANDIC)
  }

  onEnglish = (e) => {
    e.preventDefault()
    this.props.changeLanguage(ENGLISH)
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="navbar-brand">
              <img src={taralindLogo} alt="logo" width="100" height="40" />
            </div>
            {/*
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mt-4" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item text-center">
                  <button type="button" onClick={this.onIcelandic} className="header-button nav-link active btn btn-link btn-sm">Íslenska</button> 
                </li>
                <li className="nav-item text-center">
                  <button type="button" onClick={this.onEnglish} className="header-button nav-link active btn btn-link btn-sm">English</button>
                </li>
              </ul>
            </div>
            */}
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(null, { changeLanguage })(Header);