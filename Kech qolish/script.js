let vaqtdi = +prompt("Darsga kelgan vaqtingizni kiriting (8.00):")
let KVaqtdi = 8.00


let javobi = document.querySelector("#kech__qolish")
if (KVaqtdi >= vaqtdi) {
    javobi.innerHTML = "Darsga o'z vaqtdida keldingiz! \n Rahmat!"
}
else {
    if (KVaqtdi < vaqtdi)
        javobi.innerHTML = "Darsga kech qoldingiz, adminga uchrashing! \n Rahmat!"
}

