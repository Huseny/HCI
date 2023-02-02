let btn1 = document.getElementById("1")
let btn2 = document.getElementById("2")
let btn3 = document.getElementById("3")

let tab1 = document.getElementById("tab1")
let tab2 = document.getElementById("tab2")
let tab3 = document.getElementById("tab3")


btn1.addEventListener("click", function() {
    tab1.style.display = "block"
    tab2.style.display = "none"
    tab3.style.display = "none"
})
btn2.addEventListener("click", function() {
    tab2.style.display = "block"
    tab3.style.display = "none"
    tab1.style.display = "none"
})
btn3.addEventListener("click", function() {
    tab3.style.display = "block"
    tab2.style.display = "none"
    tab1.style.display = "none"
})