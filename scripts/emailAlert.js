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