// import _ from 'lodash';

// function component() {
//   let element = document.createElement('div');

//   // lodash（目前通过一个 script 引入）对于执行这一行是必需的
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }
// function getComponent() {
async function getComponent() {
  // return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
  //   var element = document.createElement('div');

  //   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  //   return element;

  // }).catch(error => 'An error occurred while loading the component');
  var element = document.createElement('div');
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;

}

// document.body.appendChild(component());
getComponent().then(component => {
  document.body.appendChild(component);
})