let oylik = +prompt("Oylik maosh 350$ \n Olgan maoshinggizni kiriting :")
let m = 300
let result = document.getElementById("oylik")
let kam = m - oylik
let kop = oylik - m
if (m = oylik) {
    result.innerHTML = "Oylik maoshni to'liq olibsiz!"
}
// if (m < oylik)
//     result.innerHTML = kam + "$ kam maosh olibsiz!"
else {
    (m > oylik)
    result.innerHTML = kop + "$ ko'p maosh olgansiz!"
}
