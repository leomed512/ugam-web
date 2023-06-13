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

    node.addEventListener('animationend', handleAnimationEnd, { once: true });
  });

const animateThis = document.querySelector('#animateButton')
if (animateThis) {
  animateThis.addEventListener('click', () => { animateCSS('#contactAnimation', 'rubberBand') })
}

function sendMail() {
  let nameC = document.getElementById("contactName").value;
  let emailC = document.getElementById("contactEmail").value;
  let messageC = document.getElementById("contactMessage").value;
  if (nameC == "" || emailC == "" || messageC == "") {
    alert("No se puede enviar un mensaje vacío!")
  } else {
    let params = {
      name: nameC,
      email: emailC,
      message: messageC,
    }

    const serviceID = "UGAM_Testing";
    const templateID = "template_v6l8cxd";

    emailjs.send(serviceID, templateID, params)
      .then(
        res => {
          document.getElementById("contactName").value = "";
          document.getElementById("contactEmail").value = "";
          document.getElementById("contactMessage").value = "";
          alert("Tu mensaje ha sido enviado!")
        }
      )
      .catch((err) => {
        console.log(err);
        alert("Algo ha salido mal durante el envío de su mensaje, por favor intente de nuevo.")
      });
  }
}
