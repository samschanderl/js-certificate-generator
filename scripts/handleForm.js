const date = new Date()

// Form fields
const form = document.querySelector('#form')
const formContainer = document.querySelector('.form-container')
const firstName = document.querySelector('#fname') 
const lastName = document.querySelector('#lname') 
const courseName = document.querySelector('#course-choice').value

// event listener
form.addEventListener('submit', (e) => {
    e.preventDefault()

    // pass the parameters to the certificate url
    var url = new URL("http://127.0.0.1:5501/certificate.html?")

    const fullName = firstName.value + "-" + lastName.value

    window.location.href = `${url}name=${fullName}&course=${courseName}`

})
