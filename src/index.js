class Carro {
  constructor(marca, modelo, color, destino, cambios, velocidad, parqueo) {
    this.marca = marca;
    this.color = color;
    this.cambios = cambios;
    this.modelo = modelo;
    this.velocidad = velocidad;
    this.destino = destino;
    this.parqueo = parqueo;
  }
  encender() {
    console.log(
      `El coche ${this.marca} ${this.modelo} ${this.color} esta encendiendo el motor...`
    );
    return this;
  }
  arrancar() {
    setTimeout(
      () =>
        console.log(
          `El coche se encuentra en primera e inicia su marcha hacia: ${this.destino}`
        ),
      3000
    );
    return this;
  }
  velocitys() {
    //por alguna razon no itera los datos guardados sino el total de cambios :/
    for (var i = 0; i < this.cambios.length; i++) {
      console.log(
        `Se presiona el closs y con la palanca de cambios se insertan el cambio: ${this.cambios[i]}`
      );
    }
    return this;
  }
  frenar() {
    setTimeout(
      () => console.log(`Desacelerando... el ${this.marca} está en neutro`),
      5000
    );
    return this;
  }
  estacionar() {
    setTimeout(
      () => console.log(`El auto se estaciona en: ${this.parqueo}`),
      6000
    );
    return this;
  }
}

var xMarca = prompt(`Ingrese la marca del coche: `);
var xModel = prompt(`Ingrese el modelo del coche: `);
var xColor = prompt(`Ingrese el color del coche: `);
var xDestino = prompt(`Ingrese el lugar de llegada: `);
var nCambios = prompt("Ingrese cuantos cambios metera a realizar: ");
var cambios = [];
var cambio;
for (var i = 0; i < nCambios; i++) {
  cambio = prompt(`Ingrese el cambio #${i + 1}:`);
  cambios.push(cambio);
}
var xVelocidad = prompt("Ingrese la velocidad del coche en km/h: ");
var parking = prompt("Ingrese el parking: ");
const xCoche = new Carro(
  xMarca,
  xModel,
  xColor,
  xDestino,
  nCambios,
  xVelocidad,
  parking
);
console.log(xCoche.encender());
console.log(xCoche.arrancar());
setTimeout(() => console.log(xCoche.velocitys()), 4000);
console.log(xCoche.frenar());
console.log(xCoche.estacionar());
