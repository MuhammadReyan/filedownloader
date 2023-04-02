const fileInput = document.querySelector("input")
const downloadBtn = document.querySelector('button')


downloadBtn.addEventListener("click", e => {
    e.preventDefault(); //   form submiting ke lye use hota
    downloadBtn.innerText = "Downloading File"
    fetchFile(fileInput.value)
})

function fetchFile(url) {

    // fetching file & returing reponse as blob
    fetch(url).then(res => res.blob()).then(file => {
        // url.createobjecturl create a url krta pass keye object ka
        let tempUrl = URL.createObjectURL(file)
        let atag = document.createElement('a')

        atag.href = tempUrl
        atag.download = url.replace(/^.*[\\\/]/, '')
        document.body.appendChild(atag)
        atag.click()
        atag.remove()
        URL.revokeObjectURL(tempUrl)
        downloadBtn.innerText = "Download File"

    }).catch(() => {
        downloadBtn.innerText = "Download File"

        alert('Failed to download file')
    })
}