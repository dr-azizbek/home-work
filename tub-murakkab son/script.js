let a = +prompt("Sonni tub yoki murakkab ekanligini aniqlash. \ n Sonni kiriting:")
let n = 0

for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
        n++
    }
}
let result = document.getElementById("tub")
if (n == 2) {
    result.innerHTML = a + " soni tub son hisoblanadi."
}
else {
    result.innerHTML = a + " soni murakkab son hisoblanadi."
}