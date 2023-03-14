const codeElement = document.createElement('pre');

async function init() {
    try {
        let urlInputElement = document.querySelector('.url-input')
        let url = urlInputElement.value
        const response = await fetch(url)
        const html = await response.text()

        if (html) showResponse(html)
    } catch (error) {
        alert(error)
    }
}

function showResponse(response) {
    document.body.appendChild(codeElement);
    codeElement.textContent = response;
}

function copyCode() {
    navigator.clipboard.writeText(codeElement.textContent)
        .then(result => alert("copied!"))
        .catch(error => alert("could not copy!"))
}