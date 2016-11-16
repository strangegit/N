import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import item from './style/item.css';
import './style/slick.scss';
import './style/slick-theme.scss';

class Item extends Component {

  constructor(props) {
    super(props);
    let initial = this.props.basket.find((item) => JSON.parse(item).fields.id === +this.props.params.id) ? "В корзине" : "Купить";
    this.state = {button: initial};
  }

  render() {
    let good = this.props.items.length ? this.props.items.find((item) =>
      item.fields.id === +this.props.params.id
    ) : {fields: {photos: null, category: null, price: null, description: null}};
    return (
      <div className={item.main}>
        <div className={item.slider}> {good.fields.photos && <Slider infinite={good.fields.photos.length > 1} accessibility draggable={good.fields.photos.length > 1} arrows={good.fields.photos.length > 1 && window.matchMedia("(min-width: 768px)").matches} dots={good.fields.photos.length > 1} lazyLoad>
          {good.fields.photos.map((photo) =>
            <img key={photo.sys.id} src={photo.fields.file.url} alt="фото товара"/>
          )}
        </Slider>}
        </div>
        <div className={item.category}><span className={item.name}>{good.fields.category}</span> <span className={item.price}>{good.fields.price} ₽</span></div>
        <div className={item.description}>{good.fields.description}</div>
        <div id="button" className={`button is-warning ${item.button} ${this.props.basket.find((item) => JSON.parse(item).fields.id === +this.props.params.id) && "is-disabled"}`} onClick={() => {
          let el = document.getElementById("floating");
          el.classList.remove(item.zoom);
          void el.offsetWidth;
          el.classList.add(item.zoom);
          this.props.toBasket(good);
          this.setState({button: "В корзине"});
        }}>{this.state.button}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.rooty.router.location,
    items: state.rooty.items.items,
    basket: state.rooty.basket.basket
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toBasket: (item) => {
      dispatch({
        type: 'TO_BASKET',
        item
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
