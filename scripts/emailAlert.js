const alertPlaceholder = document.getElementById('emailAlertmessage')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('emailAlertButton')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Nuestro equipo se pondrá en contacto contigo muy pronto para atender tu mensaje!', 'success')
  })
}

const elementAnimate = document.querySelector('#contactAnimation');



const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

  const animateThis = document.querySelector('#animateButton')
if (animateThis) {
  animateThis.addEventListener('click', () => { animateCSS('#contactAnimation', 'rubberBand')})
}
  

