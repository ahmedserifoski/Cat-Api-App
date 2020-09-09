let button = document.getElementById("button")
let image = document.getElementById("image")



async function randomCat() {
    let response = await fetch("https://api.thecatapi.com/v1/images/search")
    let catData = await response.json()
    
    image.src = catData[0].url
    button.innerHTML = "Next kitty"
}

button.addEventListener("click", randomCat)

