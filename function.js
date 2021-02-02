// OBJETO FOTOLIBRO
function Fotolibro(_cantidad, _tamaño, _formato, _encuadernacion) {
    this.cantidad = _cantidad;
    this.tamaño = _tamaño;
    this.formato = _formato;
    this.encuadernacion = _encuadernacion;

    this.DatosRollo = function (){
        return `Cantidad de fotos: ${this.cantidad} FOTOS
                Tamaño: ${this.tamaño} 
                Formato ${this.formato}
                Encuadernacion: ${this.encuadernacion}             `
    }
}
    // COMO LE DOY VALOR A LOS OBJETOS ? -- ASI ?

 /*           
    this.ValorCantidad = function (_cantidad) { 
        if (_cantidad === "32 Fotos") {
                let valor1 = 10;
                return valor1;
                    } else if (_cantidad === "48 Fotos") {
                        let valor2 = 20;
                            return valor2;
                            } else if (_cantidad === "64 Fotos")  {
                                let valor3 = 30;
                                    return valor3;
                                        } else (_cantidad === "--Seleccione--") {
                                            return console.log ("eliga una opcion")
                                        }
      }

*/
    

let Fotolibro1= new Fotolibro (32, "10*15", "Horizontal", "tapa Blanda");
let Fotolibro2= new Fotolibro (48, "15*20", "Vertical", "tapa Dura");

console.log(Fotolibro1.DatosRollo());
console.log(Fotolibro2.DatosRollo());

// SI ESTAN VACIOS LOS CAMPOS Y SE SELECCIONA EL BOTON "ARMAS"
// MOSTRAR ERROR -- No se si va vacio o con string "--seleccione--"
// EJERCICIO DE VALIDACION

/*
                if (_cantidad==="" || 
                    _tamaño===""){
                     mostrarError("#msj-error", "Seleccion una opcion, por favor");
                        //return

                }
*/


// -- DOM --

let Fotos = document.getElementById("fotos");

    console.log(Fotos.innerHTML); // estructura HTML
   //     console.log(fotos[0].innerHTML);
            console.log(Fotos.innerText); // front 

    let agregoFotos = document.createElement("option"); 
                agregoFotos.innerHTML = "84 Fotos";
             


let cantFotos = document.getElementById("cantidadFotos");
       cantFotos.appendChild(agregoFotos);
    
        console.log(cantFotos);   
          console.log(cantFotos.innerText); 
                console.log(cantFotos[4].innerText); 


cantFotos[0].innerText = "-- Eliga --   "; // Cambie leyenda de seleccion en Cant de fotos

// Fotos.parentNode.removeChild(Fotos); // ---- elimino Cant de fotos




        



// PRODUCTOS -- ROLLOS

var Rollo1 = "120;negativo Color, Revalado automatico";
var Rollo2 = "160;negativo Blanco y Negro, Revalado automatico";
var Rollo3 = "1200;negativo Color Metropolis, Revalado automatico";

var resultado1 = Rollo1.split(';');
var resultado2 = Rollo1.split(';');
var resultado3 = Rollo1.split(';');

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);


// OBJETO CARRITO

function SuCompra (argrollo) {
    this.rollo = argrollo;

}

/*

// no me salio 

let miCarrito = [];

 const comprasCarrito = 10

for (let index = 0; index < comprasCarrito; index++) {
    const element = new SuCompra("Compra número" + index);
    miCarrito.push(element);
}



console.log(miCarrito);

let milista = document.getElementById(`Micarrito`);

aa

for (let index = 0; index < comprasCarrito; index++) {

    let SuCompraList = document.createElement("li");
        
        let suCompra = miCarrito[index];  

            SuCompraList.appendchild(document.createTextNode(suCompra.nombre));

    milista.appendChild(SuCompraList);
}
*/


