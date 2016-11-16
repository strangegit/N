import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionItem } from 'react-sanfona';

import faq from './style/faq.css';

class Faq extends Component {

  render() {
    return (
        <Accordion className={faq.main} activeItems={[this.props.location.search]}>
          <AccordionItem titleClassName={faq.itemHeader} bodyClassName={faq.item} title="Доставка по Санкт-Петербургу" >
            <p>so</p>
          </AccordionItem>
          <AccordionItem className={faq.itemmargin} titleClassName={faq.itemHeader} bodyClassName={faq.item} title="Доставка по России и зарубеж" >
            <div>so</div>
          </AccordionItem>
          <AccordionItem className={faq.itemmargin} titleClassName={faq.itemHeader} bodyClassName={faq.item} title="Оплата" >
            <div>so</div>
          </AccordionItem>
          <AccordionItem className={faq.itemmargin} titleClassName={faq.itemHeader} bodyClassName={faq.item} title="Контакты" >
            <div>so</div>
          </AccordionItem>
          <AccordionItem className={faq.itemmargin} titleClassName={faq.itemHeader} bodyClassName={faq.item} slug={"?action"} title="Как получить маску бесплатно?" >
            <div>nkj</div>
          </AccordionItem>
        </Accordion>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.rooty.router.location,
  }
}

export default connect(mapStateToProps)(Faq)
