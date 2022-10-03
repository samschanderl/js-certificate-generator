// Output fields
const outputContainer = document.querySelector('.output-container')
const downloadBtn = document.querySelector('#download-btn')

// get placeholder values
const studentName = document.querySelector('.certificate__student-name')
const courseName = document.querySelector('.certificate__course-name')
const dateField = document.querySelector('.certificate__date')

window.addEventListener('load', () => {
    // get params from url
    const { dateOutput, nameParam, courseParam } = getUrlParams()

    // insert the parameters into placeholder fields
    studentName.innerHTML = nameParam
    courseName.innerHTML = courseParam
    dateField.innerHTML = dateOutput

})

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault()

    // create the HTML
    const certificateHTML = createHTML()

    const certificate = document.getElementById('certificate')

    // creating and saving pdf
    downloadDiv(certificateHTML, certificate)

    // testing
    console.log('downloading...')
})

function downloadDiv(template, div) {
    const pdf = new jsPDF('landscape');
    // pdf.fromHTML(template);
    // pdf.save('div.pdf');

    pdf.addHTML(div,function() {
    pdf.save('web.pdf');
});
}

function getUrlParams() {
        // create current date
        const now = new Date()
        const dateOutput = now.toDateString()
    
        // get the information from the query string
        var queryString = window.location.search
        const urlParams = new URLSearchParams(queryString) 
        const nameParam = urlParams.get('name').replace("-", " ")
        const courseParam = urlParams.get('course').replaceAll("-", " ")

        return { dateOutput, nameParam, courseParam }
}

function createHTML() {
    const { dateOutput, nameParam, courseParam } = getUrlParams()

    // creating the HTML template for the download
    const certificateHTML = `
        <div style="display:flex; flex-direction:column; justify-content:center; background: green;">
            <p style="font-size:24px">Certificate of Completion</p>
            <p style="font-size:20px">${nameParam}</p>
            <p>has successfully completed</p>
            <p style="font-size:20px">${courseParam}</p>
            <p>${dateOutput}</p>
        </div>
        <a style="background:orange; border-radius:10px; href="" id="download-btn" class="btn">Download</a>
        `
    return certificateHTML
}