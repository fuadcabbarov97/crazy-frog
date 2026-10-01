let frog = document.querySelector(".frog")
let xal = 0
let h1 = document.querySelector("h1")
frog.addEventListener("click", () => {
    xal++
    let random = Math.floor(Math.random() * 90)
    let random1 = Math.floor(Math.random() * 90)
    frog.style.top = random + "%"
    frog.style.left = random1 + "%"
    let random2 = Math.floor(Math.random() * 90)
    frog.style.top =

        h1.innerHTML = xal


})