(() => {
  'use strict'

  //Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  //Loop submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()