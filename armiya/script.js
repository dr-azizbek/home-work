let boy = +("160")
let vazn = +("55")

let boyKirit = +prompt("Harbiy xizmatga qabul qilish: \n Bo'yingizni kriting:")
let vaznKirit = +prompt("Vazningizni kiriting:")

let qabul = document.querySelector("h1")
if (boy <= boyKirit && vazn <= vaznKirit && boy - vazn <= 10) {
    qabul.innerText = "Harbiy xizmatga qabul qilinasiz! \n Rahmat!"
}
else (
    qabul.innerHTML = "Harbiy xizmatga qabul qilinmaysiz! \n Rahmat!"
)