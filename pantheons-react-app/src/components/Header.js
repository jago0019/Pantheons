// src/components/Header.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
        <header>
            <div className="main-header">
                <Link to="/"><h1>Pantheon</h1></Link>
                <div className="hamburger">
                    <svg
                    id="hamburger-button"
                    onClick={this.toggleMenu}
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--yellow)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-menu"
                    >
                    <path stroke="none" d="M0 0h24v24H0z"   fill="none" />
                    <path d="M4 8l16 0" />
                    <path d="M4 16l16 0" />
                    </svg>
                    <ul id="hamburger-content" className={isMenuOpen ? 'open' : ''}>
                        <Link to="/norse"><li><p>Norse</p></li></Link>
                        <Link to="/greek"><li><p>Greek</p></li></Link>
                        <Link to="/egyptian"><li><p>Egyptian</p></li></Link>
                    </ul>
                </div>
            </div>

            <div className="subheader">
                <ul>
                    <Link to="/norse"><li><p>Norse</p></li></Link>
                    <Link to="/greek"><li><p>Greek</p></li></Link>
                    <Link to="/egyptian"><li><p>Egyptian</p></li></Link>
                </ul>
            </div>
        </header>
    );
  }
}

export default Header;
