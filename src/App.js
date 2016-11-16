import React, { Component } from 'react';
import { Match } from 'react-router';
import Router from 'react-router-addons-controlled/ControlledBrowserRouter';
import contentful from 'contentful';
import { connect } from 'react-redux';

import SidePanel from './sidepanel.js';
import AsyncComponent from './async.js';
import Floating from './floating.js';
import Hamburger from './hamburger.js';

import './style/bulma.sass';
import app from './style/app.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    let client = contentful.createClient({
      space: 'sbnu8g5dcr73',
      accessToken: 'c5cf4128c9da49848b0b6d666df3f06dd396df8610a922bcd7ac273c4b8359f8'
    });
    client.getEntries({content_type: "item", order: "fields.id"})
    .then((res) => this.props.dispatch({type: "SAVE_ITEMS", items: res.toPlainObject().items}));
  }

  onChange(location, action) {
    if (action === 'SYNC') {
      this.props.dispatch({
        type: "NAVIGATE",
        location,
        action: this.props.action
      })
    }
    else {
      this.props.dispatch({
        type: "NAVIGATE",
        location,
        action
      })
    }
  }

  render() {
    console.log(this.props)
    const Goods = AsyncComponent(() =>
      new Promise((resolve) => {
        require.ensure([], () => {
          resolve(require('./goods.js'));
        }, "goods")
      }).then(module => module.default)
    );
    const Main = AsyncComponent(() =>
      new Promise((resolve) => {
        require.ensure([], () => {
          resolve(require('./main.js'));
        }, "welcome")
      }).then(module => module.default)
    );
    const Item = AsyncComponent(() =>
      new Promise((resolve) => {
        require.ensure([], () => {
          resolve(require('./item.js'));
        }, "item")
      }).then(module => module.default)
    );
    const SendMe = AsyncComponent(() =>
      new Promise((resolve) => {
        require.ensure([], () => {
          resolve(require('./sendme.js'));
        }, "sendme")
      }).then(module => module.default)
    );
    const Faq = AsyncComponent(() =>
      new Promise((resolve) => {
        require.ensure([], () => {
          resolve(require('./faq.js'));
        }, "faq")
      }).then(module => module.default)
    );
    const About = AsyncComponent(() =>
      new Promise((resolve) => {
        require.ensure([], () => {
          resolve(require('./about.js'));
        }, "about")
      }).then(module => module.default)
    );
    const Thanks = AsyncComponent(() =>
      new Promise((resolve) => {
        require.ensure([], () => {
          resolve(require('./thanks.js'));
        }, "thanks")
      }).then(module => module.default)
    );

    return (
      <Router history={this.props.history} location={this.props.location} action={this.props.action} onChange={this.onChange}>
        <div>
          <Hamburger/>
          <div className={`${app.marginforall} columns is-gapless`}>
          <div className="column is-narrow is-hidden-mobile" style={{minWidth: 100}}>
            <SidePanel/>
          </div>
          <div className="column">
              <Match exactly pattern="/" component={Main}/>
              <Match exactly pattern="/goods/:category?" component={Goods}/>
              <Match exactly pattern="/goods/:category/:id" component={Item}/>
              <Match exactly pattern="/about" component={About}/>
              <Match exactly pattern="/faq" component={Faq}/>
              <Match exactly pattern="/thanks" component={Thanks}/>
              <Match exactly pattern="/sendme" component={SendMe}/>
          </div>
            <Floating/>
          </div></div>
        </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.rooty.router.location,
    action: state.rooty.router.action,
    items: state.rooty.items.items
  }
}

export default connect(mapStateToProps)(App)
