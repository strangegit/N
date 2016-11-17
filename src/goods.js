import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import goods from './style/goods.css';

class Goods extends Component {
  componentWillAppear() {
    console.log(12)
  }
  componentWillEnter(callback) {
        callback();
        console.log('will enter');
    }

  render() {

    const items = this.props.items.filter((item) => {
      let loc = this.props.location.pathname;
      if (item.fields.category === loc.slice(7) || loc === "/goods")
        return true
      return false
    })

    return (
        <div>
          <div className="nav is-hidden-mobile">
            <div className={`nav-left ${goods.cats}`}>
              <Link to="/goods" activeOnlyWhenExact activeClassName={goods.activeLink} className={`nav-item ${goods.category}`}>Все</Link><span className={`nav-item ${goods.category}`}>·</span>
              <Link to="/goods/masks" activeOnlyWhenExact activeClassName={goods.activeLink} className={`nav-item ${goods.category}`}>Маски</Link><span className={`nav-item ${goods.category}`}>·</span>
              <Link to="/goods/covers" activeOnlyWhenExact activeClassName={goods.activeLink} className={`nav-item ${goods.category}`}>Чехлы</Link><span className={`nav-item ${goods.category}`}>·</span>
              <Link to="/goods/brooches" activeOnlyWhenExact activeClassName={goods.activeLink} className={`nav-item ${goods.category}`}>Броши</Link><span className={`nav-item ${goods.category}`}>·</span>
              <Link to="/goods/other" activeOnlyWhenExact activeClassName={goods.activeLink} className={`nav-item ${goods.category}`}>Другое</Link>
            </div>
            <Link to="/faq?action" className="nav-right nav-item" style={{flexGrow: 0}}>
              <svg width="90px" className={goods.special} height="38px" viewBox="0 0 90 38">
                <defs>
                  <polygon id="path-1" points="0 2.58116632e-15 90 0 90 32 0 32 19.0402671 16"></polygon>
                </defs>
                <g id="Group-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <use fill="currentColor" fillRule="evenodd" xlinkHref="#path-1"></use>
                  <text id="Акция" fontFamily="PTSans-Bold, PT Sans" fontSize="18" fontWeight="bold" fill="#FFFFFF">
                    <tspan x="29" y="21">Акция</tspan>
                  </text>
                </g>
              </svg>
            </Link>
          </div>
          {items.length && <div className={`tile is-ancestor is-marginless ${goods.cards}`}>
            {items.map((item) =>
              <Link to={`/goods/${item.fields.category}/${item.fields.id}`} key={item.fields.category+item.fields.id} className={`tile is-3 ${goods.card}`}>
                <div className="tile is-child">
                  <figure className="image">
                    <img src={item.fields.photos.find((photo) => photo.fields.title === "main").fields.file.url} alt={item.fields.category}/>
                    <figcaption className={`has-text-centered ${goods.price}`}>{item.fields.price} ₽</figcaption>
                  </figure>
                </div>
              </Link>
            )}
          </div>}
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
    }
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.rooty.items.items
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Goods)
