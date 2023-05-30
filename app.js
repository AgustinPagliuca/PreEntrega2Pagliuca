
let objeto = 2000

alert("Quisieras comprar esta remera por tan solo $2000?")

let pregunta = Number(prompt("Ingrese el monto exacto a pagar"))

if(objeto === pregunta){
    alert("Compra exitosa")
} else {
    alert("Compra rechazada")
}


alert("Solo quedan 4 unidades!")

let unidades = 0 

while (unidades <= 4) {
    alert(unidades)
    unidades++
}

alert("No quedan mas unidades!")

function Remeras(talle, precio, cuotas) {
    this.talle = talle
    this.precio = precio
    this.cuotas = cuotas
    this.descuento = function () {
        console.log("Precio en efectivo" + " " + this.precio)
    }
}

const Remeras1= new Remeras("L", 5000, 3)
const Remeras2= new Remeras("S", 4500, 3)

console.log(Remeras1)

Remeras1.descuento()