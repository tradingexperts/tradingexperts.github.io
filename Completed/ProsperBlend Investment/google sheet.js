const scriptURL = 'https://script.google.com/macros/s/AKfycbzlydvnNsf6fQZ_ByTM0yNWUUHaGj5t3mONkQ_4sGdNqBxPQDN2dZM3n5vXrZvs5J0W/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})