import _ from 'lodash';
import Print from './print.js';

function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');


  element.onclick = Print.bind(null, 'Hello webpack!');

  return element;
}

document.body.appendChild(component());