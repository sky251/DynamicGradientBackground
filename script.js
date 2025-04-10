let btn1 = document.getElementById("myButton")
let btn2 = document.getElementById("myButton2")
let leftBtn = document.getElementsByClassName("leftButton")[0]
let rightBtn = document.getElementsByClassName("rightButton")[0]
let rgb = "#051937"
let rgb2 = "#008793"


const getHexValue = () => {
    let color = "#"
    let hexValue = "0123456789abcdef"
    for (i = 0; i < 6; i++) {
        color = color + hexValue[Math.floor(Math.random() * 16)];
    }
    return color
}


const handleBtn1 = () => {
    rgb = getHexValue()
    btn1.innerText = rgb
    btn1.style.backgroundColor = rgb
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb}, ${rgb2})`
    rightBtn.innerText = rgb
    
}
const handleBtn2 = () => {
    rgb2 = getHexValue()
    btn2.innerText = rgb2
    btn2.style.backgroundColor = rgb2
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb}, ${rgb2})`
    leftBtn.innerText = rgb2
}


btn1.addEventListener("click", handleBtn1)
btn2.addEventListener("click", handleBtn2)