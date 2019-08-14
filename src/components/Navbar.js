import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.png";
import { ButtonContainer } from './Button';
import styled from 'styled-components';

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} style={{ width: "100px" }} alt="logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="navitem ml-5">
            <Link to="/" className="nav-link">
              产品
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            购物车
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar
