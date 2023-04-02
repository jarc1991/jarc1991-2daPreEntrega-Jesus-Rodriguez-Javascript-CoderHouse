let nombreCliente = prompt ("Ingrese su nombre").toUpperCase()

let contador = 0

while (contador <= 3) {

    if ((isNaN (nombreCliente)) && nombreCliente != " ") {

        alert ("Bienvenido a Adele´s Store " + nombreCliente + " " + "acá encontrarás toda la mercadería de la mejor cantante del siglo XXI")
        break

    } else {

        alert ("Debe ingresar un nombre de usuario")
        nombreCliente = prompt ("Ingrese su nombre nuevamente")
        contador++
        
    }

} 

let menu = "1- Para saber más sobre Adele. \n2- Merchandising. \n3- Camisas por color. \n4- Camisas entre $1000 y $1600. \n5- Camisas entre $2000 y $2500.\n6- Filtrar por discos. \n7- Agregar a carrito. \n8- Listar productos del carrito. \n0- Salir."
let opcion = 0
let carrito= []
let productos = [
    
  {
    id: 1,
    nombre: "camisaAdeleRoyalAlbertHall",
    categoria: "indumentariaConcierto",
    precio: 1000,
    stock: 3,
    color: "blanco",
  },
  {
    id: 2,
    nombre: "camisaAdeleLasVegas",
    categoria: "indumentariaConcierto",
    precio: 1400,
    stock: 5,
    color: "blanco",
  },
  {
    id: 3,
    nombre: "camisaAdeleGrammys",
    categoria: "indumentariaConcierto",
    precio: 1600,
    stock: 5,
    color: "blanco",
  },
  {
    id: 4,
    nombre: "CamisaAdele30",
    categoria: "indumentariaDisco",
    precio: 2500,
    stock: 5,
    color: "blanco",
  },
  {
    id: 5,
    nombre: "camisaAdele25",
    categoria: "indumentariaDisco",
    precio: 2000,
    stock: 5,
    color: "negro",
  },
  {
    id: 6,
    nombre: "camisaAdele21",
    categoria: "indumentariaConcierto",
    precio: 2400,
    stock: 5,
    color: "negro",
  },
  {
    id: 10,
    nombre: 19,
    categoria: "disco",
    precio: 3000,
    stock: 5,
  },
  {
    id: 11,
    nombre: 21,
    categoria: "disco",
    precio: 3200,
    stock: 5,
  },
  {
    id: 12,
    nombre: 25,
    categoria: "disco",
    precio: 3500,
    stock: 5,
  },
  {
    id: 13,
    nombre: 30,
    categoria: "disco",
    precio: 4000,
    stock: 5,
  }

]

do {

    if ((isNaN (nombreCliente)) && nombreCliente != " ") {

        mostrarMenu()
     } 

} while (opcion != 0)

function listarProductos(productos) {

    return productos.map(el => {

        return `ID: ${el.id} Nombre: ${el.nombre} Precio: ${el.precio}`

    }).join("\n")
  }

function mostrarMenu () {

        alert (menu)
        
        opcion = Number(prompt("Ingrese su opción: \n"))

        if (opcion === 1) {

            alert ("Adele Laurie Blue Adkins (Londres, 5 de mayo de 1988), conocida simplemente como Adele, es una cantautora y multinstrumentista británica. Es una de las artistas musicales con mayores ventas del mundo, con más de 120 millones de ventas entre discos y sencillo.")

        } else if (opcion === 2) {

            alert (listarProductos(productos))

        } else if (opcion === 3) {

            let colorElegido = prompt ("Escoja un color BLANCO o NEGRO").toLowerCase()

            let camisasBlancas = productos.filter(el => el.color === colorElegido)

                if (camisasBlancas.length === 0) {

                    alert("No existen productos con esa categoría")

                } else {

                    alert ("Los productos filtados por color son: \n" + listarProductos(camisasBlancas))        
                }
    
        } else if (opcion === 4) {

            let camisasFiltradas1 = productos.filter(el => el.precio <= 1600) 
            
                alert("Lista de productos filtrados por el precio entre $1000 y $1600: \n" + listarProductos(camisasFiltradas1))
                
        
        
        } else if (opcion === 5) { 

            let camisasFiltradas2 = productos.filter(el => el.precio >= 2000 && el.precio <= 2500) 
            
                alert("Lista de productos filtrados por el precio entre $2000 y $2500: \n" + listarProductos(camisasFiltradas2))


        } else if (opcion === 6) {

            let discosBuscados = productos.filter (el => el.categoria === "disco")

                alert (listarProductos (discosBuscados))

            let disco1 =  Number (prompt ("Ingrese el nombre del disco: "))

            let discoElegido = productos.filter(el => el.nombre === disco1)

                alert (listarProductos (discoElegido))
            
        } else if (opcion === 7) {

            let idMercaderia = Number(prompt("Seleccione id del producto: \n" + listarProductos(productos)))

            let productoBuscado = productos.find(el => el.id === idMercaderia)

                if (productoBuscado) {

                carrito.push (productoBuscado) 

                console.log (carrito)

                alert("Producto agregado correctamente")

                } else {

                alert("El id ingresado no corresponde a ningún producto listado")
                
                } 

        } else if (opcion === 8) { 

            alert ("Su lista de productos en el carrito es: \n" + listarProductos(carrito))

        }
    
    }
