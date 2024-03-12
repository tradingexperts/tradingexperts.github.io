const scriptURL = 'https://script.google.com/macros/s/AKfycbxbLo7uIc8aa27XPrHpcFke5uYL9VJs-uIrccvkTv0-X-5XVsqDOWwEvTn-v5eS3qvlOQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})