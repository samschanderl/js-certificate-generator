const date = new Date().toLocaleDateString()
const canvas = document.querySelector('#canvas')

// Form fields
const form = document.querySelector('#form');
const formContainer = document.querySelector('.form-container');
// const fullName = document.querySelector('#full-name');
const fullName = "Schanderl"
// const courseName = document.querySelector('#course-choice').value;
const courseName = "Baking Essentials"

// canvas context
const ctx = canvas.getContext('2d');

const image = new Image()
image.src = "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149455413/settings_images/xr0o5dSoTV2TK0jbbdHW_certificate.png"
image.onload = function() {
    drawImage()
}

function drawImage() {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

    // write student name text
    ctx.font = '26px arial';
    ctx.fillStyle = '#494949';
    const courseName = "Baking Essentials"
    
    // get the right width depending on text length
    const nameWidth = ctx.measureText(fullName).width;
    const nameStartWidth = (canvas.width - nameWidth) / 2;

    ctx.fillText(fullName, nameStartWidth, 157);

    // write course name
    ctx.font = '22px arial';
    ctx.fillStyle = '#494949';
    const courseWidth = ctx.measureText(courseName).width;
    const courseStartWidth = (canvas.width - courseWidth) / 2;
    ctx.fillText(courseName, courseStartWidth, 210);

    // write the date name
    ctx.font = '16px arial';
    ctx.fillStyle = '#494949';
    ctx.fillText(date, 290, 270);
}

// event listener
// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     // pass the parameters to the certificate url
//     var url = new URL("http://127.0.0.1:5501/certificate.html?")

//     const fullName = firstName.value + "-" + lastName.value

//     window.location.href = `${url}name=${fullName}&course=${courseName}`

// })

// listen for input
fullName.addEventListener('input', () => {
    drawImage()
})