let topParagraph = document.getElementById("topParagraph")
let bottomParagraph = document.getElementById("bottomParagraph")

let topText = document.getElementById("topText")
let topTextSlider = document.getElementById("topTextSlider")
let topTextColor = document.getElementById("topTextColor")

let bottomText = document.getElementById("bottomText")
let bottomTextSlider = document.getElementById("bottomTextSlider")
let bottomTextColor = document.getElementById("bottomTextColor")

let imageDropdown = document.getElementById("imageDropdown")

topText.addEventListener("input", showTopText)
topTextSlider.addEventListener("input", changeTopFontSize)
topTextColor.addEventListener("input",changeTopFontColor)

bottomText.addEventListener("input", showBottomText)
bottomTextSlider.addEventListener("input", changeBottomFontSize)
bottomTextColor.addEventListener("input", changeBottomFontColor)

imageDropdown.addEventListener("input", updateImage)

function showTopText() {
  topParagraph.innerHTML = topText.value
}

function changeTopFontSize() {
  topParagraph.style.fontSize = topTextSlider.value + "px"
}

function changeTopFontColor() {
  topParagraph.style.color = topTextColor.value
}

function showBottomText() {
  bottomParagraph.innerHTML = bottomText.value
}

function changeBottomFontSize() {
  bottomParagraph.style.fontSize = bottomTextSlider.value + "px"
}

function changeBottomFontColor() {
  bottomParagraph.style.color = bottomTextColor.value
}

function updateImage() {
  box.style.backgroundImage = `url("${imageDropdown.value}")`   
}



