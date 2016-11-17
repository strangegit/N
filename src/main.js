import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import main from './style/main.css';

class Main extends Component {

  componentDidMount() {
    this.refs.main.onwheel = () => this.props.dispatch({type: "NAVIGATE", location: {pathname: '/goods'}, action: 'PUSH'});
  }

  render() {
    return (
        <div ref="main" className="column columns is-marginless is-paddingless">
          <div className="column is-half is-paddingless">
          <picture>
            <source srcSet="main.webp, main.webp 2x" type="image/webp" className={main.image}/>
            <source srcSet="main.jpeg, main.jpeg 2x" type="image/jpeg" className={main.image}/>
            <img src="main.jpeg" className={main.image} alt="NKNR"/>
          </picture>
          </div>
          <div className="column is-half is-paddingless">
          <div className={main.main}>
            <div className={`is-hidden-mobile ${main.name}`}>Anastasia Kriazhevskaia</div>
            <div>
              <div className={main.text_maski}>Маски</div>
              <div className={main.text_other}>Чехлы, броши,</div>
              <div className={main.text_other}>другое на заказ</div>
              <Link to='/goods' className={`is-hidden-tablet has-text-centered ${main.buttonwr}`}>
                <div className={`button is-large is-warning ${main.button}`}>в каталог</div>
              </Link>
            </div>
            <div className={`is-hidden-mobile ${main.number}`}>23</div>
          </div>
          </div>
        </div>
    );
  }
}

export default connect()(Main)
