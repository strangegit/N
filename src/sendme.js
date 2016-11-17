import React, { Component } from 'react';
import { connect } from 'react-redux';

import sendme from './style/sendme.css';

class SendMe extends Component {

  constructor(props) {
    super(props);
    this.state = {textarea: '', input: ''};
    this.handleTextarea = this.handleTextarea.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleTextarea(event) {
    this.setState({textarea: event.target.value});
  }

  handleInput(event) {
    this.setState({input: event.target.value});
  }

  render() {
    return (
      this.props.basket.length ? <div className={sendme.main}>
        <div className={sendme.title}>Сделать заказ</div>
        <div className={sendme.preview}>{this.props.basket.map((good) => <div onClick={() => this.props.fromBasket(good)} key={JSON.parse(good).fields.id} data-content={JSON.parse(good).fields.price+"₽ ✗"} className={sendme.wrap}><img alt="preview" className={sendme.img} src={JSON.parse(good).fields.photos.find((photo) => photo.fields.title === "main").fields.file.url}/></div>)}</div>
        <div className={sendme.nasum}>на сумму <span className={sendme.price}>{this.props.basket.reduce((sum, current) => (sum + JSON.parse(current).fields.price), 0)} ₽</span></div>
        <input autoFocus={window.matchMedia("(min-width: 768px)").matches} ref="email" value={this.state.input} onChange={this.handleInput} type="text" placeholder="Ваш телефон или e-mail" className={sendme.email}/>
        <div className={`button is-warning ${sendme.button} ${this.state.input ? null : "is-disabled"}`} onClick={() => {fetch("https://formspree.io/anastasiakryazhevskaya@gmail.com", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({message: this.props.basket.reduce((sum, cur) => sum + JSON.parse(cur).fields.id + " ", ""), _subject: "Заказ", email: this.refs.email.value})}); this.props.push("/thanks")}}>Заказать</div>
      </div> : <div className={sendme.main}>
        <div className={sendme.title}>Напишите нам</div>
        <textarea value={this.state.textarea} onChange={this.handleTextarea} autoFocus={window.matchMedia("(min-width: 768px)").matches} ref="textarea" className={sendme.textarea}></textarea>
        <div className={`button is-warning ${sendme.button} ${this.state.textarea ? null : "is-disabled"}`} onClick={() => {fetch("https://formspree.io/anastasiakryazhevskaya@gmail.com", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({message: this.refs.textarea.value, _subject: "Письмо"})}); this.props.push("/thanks")}}>Отправить</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state.rooty.basket.basket
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fromBasket: (item) => {
      dispatch({
        type: 'FROM_BASKET',
        item
      })
    },
    push: (location) => {
      dispatch({
        type: 'NAVIGATE',
        location: { pathname: location },
        action: 'PUSH'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMe)
