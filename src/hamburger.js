import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';
import Radium from 'radium';

import {action as toggleMenu} from 'redux-burger-menu';

import hamburger from './style/hamburger.css';

const RadiumLink = Radium(Link);
const Mmenu = reduxBurgerMenu(Menu)

class Hamburger extends Component {

  render() {

    const loc = this.props.location.pathname;
    let borderColor = "#E2E0E0";
    if (loc === "/" || loc === "/thanks" || loc === "/about")
      borderColor = "transparent";
    else if (loc === "/sendme")
      borderColor = "white";

      const styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '26px',
          top: '14px',
          zIndex: '3',
          color: 'white'
        },
        bmBurgerBars: {
          background: '#373a47'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenu: {
          background: this.props.location.pathname === "/sendme" ? "#66DCC5" : "white",
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
    const Ham = () => <div style={{color: loc === "/sendme" ? "white" : "#4A4A4A"}}>
    <svg width="30px" height="30px" viewBox="0 0 14 10">
      <g id="menugrey" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Page-1" fill="currentColor">
            <g id="menu">
                <path d="M13.4,4 L0.6,4 C0.048,4 0,4.447 0,5 C0,5.553 0.048,6 0.6,6 L13.4,6 C13.952,6 14,5.553 14,5 C14,4.447 13.952,4 13.4,4 Z M13.4,8 L0.6,8 C0.048,8 0,8.447 0,9 C0,9.553 0.048,10 0.6,10 L13.4,10 C13.952,10 14,9.553 14,9 C14,8.447 13.952,8 13.4,8 Z M0.6,2 L13.4,2 C13.952,2 14,1.553 14,1 C14,0.447 13.952,0 13.4,0 L0.6,0 C0.048,0 0,0.447 0,1 C0,1.553 0.048,2 0.6,2 Z" id="Shape"></path>
            </g>
        </g>
      </g>
    </svg>
  </div>

    return (
      <div className="is-hidden-tablet">
        <Mmenu customBurgerIcon={ <Ham/> } customCrossIcon={false}  width={ "60vw" } className="" styles={styles}>
          <div className={`menu-label ${hamburger.cat}`}>
            <RadiumLink to="/goods" activeOnlyWhenExact style={{color: loc === "/sendme" ?  "white" : "#4A4A4A"}} onClick={() => this.props.toggleMenu()}>Товары</RadiumLink>
          </div>
          <ul className="menu-list">
          <li><RadiumLink to="/goods/masks" style={{color: loc === "/sendme" ?  "white" : "#4A4A4A"}} className={hamburger.link} activeOnlyWhenExact onClick={() => this.props.toggleMenu()}>Маски</RadiumLink></li>
          <li><RadiumLink to="/goods/covers" style={{color: loc === "/sendme" ?  "white" : "#4A4A4A"}} className={hamburger.link} activeOnlyWhenExact onClick={() => this.props.toggleMenu()}>Чехлы</RadiumLink></li>
          <li><RadiumLink className={hamburger.link} style={{color: loc === "/sendme" ?  "white" : "#4A4A4A"}} onClick={() => this.props.toggleMenu()} to="/goods/brooches" activeOnlyWhenExact>Броши</RadiumLink></li>
          <li><RadiumLink className={hamburger.link} style={{color: loc === "/sendme" ?  "white" : "#4A4A4A"}} to="/goods/other" activeOnlyWhenExact onClick={() => this.props.toggleMenu()}>Другое</RadiumLink></li>
          </ul>
          <ul>
          <li className={`menu-label ${hamburger.cat}`}>
            <Link to="/faq" activeOnlyWhenExact style={{color: loc === "/sendme" ?  "white" : "#4A4A4A"}} onClick={() => this.props.toggleMenu()}>FAQ</Link>
          </li>
          <li className={`menu-label ${hamburger.cat}`}>
            <Link to="/about" activeOnlyWhenExact style={{color: loc === "/sendme" ?  "white" : "#4A4A4A"}} onClick={() => this.props.toggleMenu()}>О нас</Link>
          </li>
        </ul>
        </Mmenu>
        <div className={hamburger.wrapburger} style={{borderBottom: `1px solid ${borderColor}`, backgroundColor: loc === "/sendme" ? "#66DCC5" : "white"}}>
          <Link to="/goods"><div style={{color: loc === "/sendme" ?  "white" : "#4A4A4A"}} className={hamburger.nknr}>NKNR</div></Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    push: (location) => {
      dispatch({
        type: 'NAVIGATE',
        location: { pathname: location },
        action: 'PUSH'
      })
    },
    toggleMenu: () => {
      dispatch(toggleMenu());
    }
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state.rooty.basket.basket,
    location: state.rooty.router.location,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger)
