import React, { Component } from 'react';
import { connect } from 'react-redux';

import about from './style/about.css';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {pos: 0}
  }

  componentDidMount() {
    this.refs.main.onwheel = () => {this.setState({pos: window.scrollY/window.innerHeight})}
  }

  render() {
    console.log(this.state.pos)
    return (
        <div ref="main" className={about.main} style={{  background: `linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0.7) 100%), url(./main.jpeg) repeat 0 0`}}><div className={about.text}>Меня зовут Настя Ладинцова. Я делаю изделия из кожи уже более 5 лет.

Все началось с подарочной книжной обложки “с глазами”. С течением времени у   моих творений начали появляться морщины и другие отличительные черты лица. Наконец около года назад была запущена коммерческая серия масок и чехлов под брендом ‘Ni kozhi ni rozhi’.

Я стараюсь не покупать новую кожу, так что для всей продукции используется кожа вторичной обработки.

Вы можете приобрести у меня практически любое изделие на заказ ✄</div></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.rooty.router.location,
  }
}

export default connect(mapStateToProps)(About)
