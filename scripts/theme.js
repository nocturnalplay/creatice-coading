// window.addEventListener("load", () => {
//     const theme = document.getElementById("theme")
//     theme.addEventListener('click', () => {
//         console.log("click")
//         if (theme.innerHTML === "dark") {
//             Theme("dark","light")
//         }else{
//             Theme("light","dark")
//         }
//     })
// })

// function Theme(value,ll) {
//     document.getElementById("body").attributes.theme.value = value
//     document.getElementById("theme").innerHTML=ll
// }
let check = false;
const scale = document.getElementById("scale")
const cube = document.getElementById("cube")
let rx = 0, ry = 0, prex = 0, prey = 0
window.addEventListener("pointerdown", (e) => {
    check = true
})
window.addEventListener("pointerup", (e) => {
    check = false
})
scale.addEventListener("mousemove", (e) => {
    const x = e.clientX
    const y = e.clientY
    if (x > prex) {
        rx+=2;
        prex = x
    } else if (prex > x) {
        rx-=2;
        prex = x
    }
    if (y > prey) {
        ry-=2;
        prey = y
    }
    else if (prey > y) {
        ry+=2;
        prey = y
    }
    console.log(y, "::", rx, ":", ry)
    if (check) {
        scale.style.cursor = "grabbing"
        cube.style.transform = `rotateX(${ry}deg) rotateY(${rx}deg)`
    }
})