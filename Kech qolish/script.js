let vaqtdi = +prompt("Darsga kelgan vaqtingizni kiriting (8.00):")
let KVaqtdi2 = 8.20


let javobi = document.querySelector("#kech__qolish")
if (KVaqtdi2 >= vaqtdi) {
    javobi.innerHTML = "Darsga o'z vaqtdida keldingiz! \n Rahmat!"
}
else {
    if (KVaqtdi2 < vaqtdi)
        javobi.innerHTML = "Darsga kech qoldingiz, adminga uchrashing! \n Rahmat!"
}

