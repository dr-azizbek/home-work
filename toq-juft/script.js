let a = +prompt("Soninggizni juft yoki toq ekanligini bilish.\n Sonni kiriting:");


let result = document.getElementById("toq-juft")



if (a % 2 == 0) {
    result.innerHTML = a + " soni juft son hisoblanadi."
}
else {
    result.innerHTML = a + " toq son hisoblanadi."
}
