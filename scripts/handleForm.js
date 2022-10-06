const date = new Date().toLocaleDateString()
const canvas = document.querySelector('#canvas')

// Form fields
const form = document.querySelector('#form');
const formContainer = document.querySelector('.form-container');

const generateBtn = document.querySelector('#generate-btn');
const downloadBtn = document.querySelector('#download-btn');
const loadingSpinner = document.querySelector('#loader');
let showSpinner = false;

// canvas context
const ctx = canvas.getContext('2d');

// create image and load it
const image = new Image();
image.crossOrigin = 'anonymous';
image.src = '/img/certificate.png'

// listen for input
form.addEventListener('submit', (e) => {
    e.preventDefault();
    toggleSpinner();
    setTimeout(() => {
        drawImage();
        toggleSpinner();
        //make download button and canvas element visible
        downloadBtn.style.display = 'block';
        canvas.style.display = 'block';
    }, 1500)
})

// listen for download button
downloadBtn.addEventListener('click', (e) => {
    const fullName = document.querySelector('#full-name').value;
    const fullNameFormatted = fullName.replaceAll(' ', '-')
    // create a link of the canvas image so it can be downloaded
    downloadBtn.href = canvas.toDataURL();
    downloadBtn.download = `Certificate-${fullNameFormatted}-${courseName}`;
})

// insert the certificate image and add the text
function drawImage() {
    const fullName = document.querySelector('#full-name').value;
    const courseName = document.querySelector('#course-choice').value;
    const courseNameFormatted = courseName.replaceAll('-', ' ');
    

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

    // write student name text
    ctx.font = '70px Poppins';
    ctx.fillStyle = '#696969';
    const nameWidth = ctx.measureText(fullName).width;
    const nameStartWidth = (canvas.width - nameWidth) / 2;

    ctx.fillText(fullName, nameStartWidth, 670);

    // write course name
    ctx.font = '65px Poppins';
    ctx.fillStyle = '#696969';
    const courseWidth = ctx.measureText(courseNameFormatted).width;
    const courseStartWidth = (canvas.width - courseWidth) / 2;
    ctx.fillText(courseNameFormatted, courseStartWidth, 920);

    // write the date name
    ctx.font = '45px Poppins';
    ctx.fillStyle = '#696969';
    ctx.fillText(date, 1060, 1150);
}

function toggleSpinner() {
    showSpinner = !showSpinner
    showSpinner ? loadingSpinner.style.display = 'block' : loadingSpinner.style.display = 'none';
}