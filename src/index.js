import _ from 'lodash';
import printMe from './print.js';

// navigator.serviceWorkerContainer.register('service-worker.js').then(function(reg){


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
    // navigator.serviceWorkerContainer.register('service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');


  btn.innerHTML = '点击这里，然后查看 console！';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());