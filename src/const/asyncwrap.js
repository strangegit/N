import AsyncComponent from '../async.js';

export const Goods = AsyncComponent(() =>
  new Promise((resolve) => {
    require.ensure([], () => {
      resolve(require('../goods.js'));
    }, "goods")
  }).then(module => module.default)
);
export const Main = AsyncComponent(() =>
  new Promise((resolve) => {
    require.ensure([], () => {
      resolve(require('../main.js'));
    }, "welcome")
  }).then(module => module.default)
);
export const Item = AsyncComponent(() =>
  new Promise((resolve) => {
    require.ensure([], () => {
      resolve(require('../item.js'));
    }, "item")
  }).then(module => module.default)
);
export const SendMe = AsyncComponent(() =>
  new Promise((resolve) => {
    require.ensure([], () => {
      resolve(require('../sendme.js'));
    }, "sendme")
  }).then(module => module.default)
);
export const Faq = AsyncComponent(() =>
  new Promise((resolve) => {
    require.ensure([], () => {
      resolve(require('../faq.js'));
    }, "faq")
  }).then(module => module.default)
);
export const About = AsyncComponent(() =>
  new Promise((resolve) => {
    require.ensure([], () => {
      resolve(require('../about.js'));
    }, "about")
  }).then(module => module.default)
);
export const Thanks = AsyncComponent(() =>
  new Promise((resolve) => {
    require.ensure([], () => {
      resolve(require('../thanks.js'));
    }, "thanks")
  }).then(module => module.default)
);
