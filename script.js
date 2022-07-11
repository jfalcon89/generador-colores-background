const colores = [1, 2, 3, 4, 5, 6, 7, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += colores[generadorNumeroRandom()]
    }
    console.log(hexColor)


    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function generadorNumeroRandom() {
    return Math.floor(Math.random() * colores.length);
}