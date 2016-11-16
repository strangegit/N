import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import floating from './style/floating.css';

class Floating extends Component {

  render() {
    return ( this.props.location.pathname === "/sendme" ? <a className={floating.main} id="floating" onClick={() => window.history.back()}><svg className={floating.floating} width="61px" height="61px" viewBox="0 0 61 61">
    <path d="M30.0932568,0 C13.4731449,0 0,13.4733361 0,30.0934481 C0,46.71356 13.4731449,60.1867049 30.0932568,60.1867049 C46.7133688,60.1867049 60.1865137,46.71356 60.1865137,30.0934481 C60.1865137,13.4733361 46.7133688,0 30.0932568,0 L30.0932568,0 Z" id="Shape" stroke="none" fill="#FFFFFF" fillRule="evenodd"></path>
    <g id="cross" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(17.000000, 16.000000)">
        <path d="M25.2396,26.9306667 C23.9733,28.1813333 21.9213,28.1813333 20.6577,26.9306667 L13.5,18.8506667 L6.3423,26.928 C5.076,28.1786667 3.024,28.1786667 1.7604,26.928 C0.4941,25.6773333 0.4941,23.6506667 1.7604,22.4026667 L9.207,14.0026667 L1.7577,5.59733333 C0.4914,4.34666667 0.4914,2.32266667 1.7577,1.072 C3.024,-0.178666667 5.0733,-0.178666667 6.3396,1.072 L13.5,9.15466667 L20.6577,1.072 C21.924,-0.178666667 23.9733,-0.178666667 25.2396,1.072 C26.5059,2.32266667 26.5059,4.34933333 25.2396,5.59733333 L17.793,14.0026667 L25.2396,22.4026667 C26.5059,23.6533333 26.5059,25.68 25.2396,26.9306667 Z" id="Shape" fill="#1ABC9C"></path>
    </g>
</svg></a> : this.props.basket.length ? <Link id="floating" className={floating.main} to={"/sendme"}><svg className={floating.floating} width="61px" height="61px" viewBox="0 0 61 61">
    <path d="M30.0932568,0 C13.4731449,0 0,13.4733361 0,30.0934481 C0,46.71356 13.4731449,60.1867049 30.0932568,60.1867049 C46.7133688,60.1867049 60.1865137,46.71356 60.1865137,30.0934481 C60.1865137,13.4733361 46.7133688,0 30.0932568,0 L30.0932568,0 Z" id="Shape" stroke="none" fill="#21BFEA" fillRule="evenodd"></path>
    <path d="M35.6111111,39.4444444 C35.6111111,40.8551111 36.7534444,42 38.1666667,42 C39.5773333,42 40.7222222,40.8551111 40.7222222,39.4444444 C40.7222222,38.0312222 39.5773333,36.8888889 38.1666667,36.8888889 C36.7534444,36.8888889 35.6111111,38.0312222 35.6111111,39.4444444 L35.6111111,39.4444444 Z M22.8333333,39.4444444 C22.8333333,40.8551111 23.9769444,42 25.3888889,42 C26.7982778,42 27.9444444,40.8551111 27.9444444,39.4444444 C27.9444444,38.0312222 26.7982778,36.8888889 25.3888889,36.8888889 C23.9769444,36.8888889 22.8333333,38.0312222 22.8333333,39.4444444 L22.8333333,39.4444444 Z M27.3656111,33.2753333 L41.5080556,29.235 C41.7776667,29.1570556 42,28.8657222 42,28.5833333 L42,21.5555556 L24.1111111,21.5555556 L24.1111111,19.5111111 C24.1111111,19.23 23.8798333,19 23.6012778,19 L19.5098333,19 C19.23,19 19,19.23 19,19.5111111 L19,21.5555556 L21.5555556,21.5555556 L23.9961111,33.0006111 L24.1111111,34.2055556 L24.1111111,36.3126111 C24.1111111,36.5924444 24.3411111,36.8237222 24.6222222,36.8237222 L41.4888889,36.8237222 C41.77,36.8237222 42,36.5911667 42,36.3126111 L42,34.3333333 L27.6275556,34.3333333 C26.1581111,34.3333333 26.1274444,33.6292778 27.3656111,33.2753333 L27.3656111,33.2753333 Z" id="Shape" stroke="none" fill="#FFFFFF" fillRule="evenodd"></path>
</svg></Link> : <Link className={floating.main} id="floating" to={"/sendme"}><svg className={floating.floating} width="61px" height="61px" viewBox="0 0 61 61">
    <path d="M30.0932568,0 C13.4731449,0 0,13.4733361 0,30.0934481 C0,46.71356 13.4731449,60.1867049 30.0932568,60.1867049 C46.7133688,60.1867049 60.1865137,46.71356 60.1865137,30.0934481 C60.1865137,13.4733361 46.7133688,0 30.0932568,0 L30.0932568,0 Z" id="Shape" stroke="none" fill="#21BFEA" fillRule="evenodd"></path>
    <path d="M18.725136,21 L42.2969691,21 C43.5471079,21 42.903671,22.6040963 42.2233078,23.0158345 C41.5429445,23.4260424 32.1253848,29.1192061 31.7742975,29.3304325 C31.4232101,29.5416588 30.9688055,29.6426803 30.5117222,29.6426803 C30.0544478,29.6426803 29.6000431,29.5416588 29.249147,29.3304325 C28.8980597,29.1192061 19.4803087,23.4260424 18.7999455,23.0158345 C18.1197735,22.6040963 17.4761451,21 18.725136,21 L18.725136,21 Z" id="Path" stroke="none" fill="#FFFFFF" fillRule="evenodd"></path>
    <path d="M43.0777798,38.2409722 C43.0777798,38.8991413 42.288742,39.8083333 41.6845274,39.8083333 L19.3932544,39.8083333 C18.7890398,39.8083333 18.000002,38.8991413 18.000002,38.2409722 L18.000002,26.8094914 C18.000002,26.5217336 17.9946448,26.1467302 18.5387824,26.4666311 C19.3115572,26.9196963 28.7756096,32.5011244 29.249147,32.7796984 C29.7224932,33.0582723 30.0544478,33.0917546 30.5117222,33.0917546 C30.9688055,33.0917546 31.30076,33.058272 31.7742975,32.7796984 C32.2478349,32.5011247 41.7662245,26.921227 42.5389994,26.4681618 C43.083137,26.1482609 43.0777798,26.5232643 43.0777798,26.811022 L43.0777798,38.2409722 L43.0777798,38.2409722 Z" id="Path" stroke="none" fill="#FFFFFF" fillRule="evenodd"></path>
</svg></Link>
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
    }
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state.rooty.basket.basket,
    location: state.rooty.router.location,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Floating)
