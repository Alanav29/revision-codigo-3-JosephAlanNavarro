// Tenemos un li de productos

const productos = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./taco-negro.jpg",
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./taco-azul.jpg",
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./bota-negra.jpg",
  },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./zapato-rojo.jpg",
  },
];

// Cambio nombre variables
const listaProductosRef = document.querySelector("#lista-de-productos");
const busquedaInput = document.querySelector("#input-busqueda");

//Se cambia var por let y se renombran variables y se colocan en la funcion mostar productos
const mostarProductos = (productos) => {
  for (let i = 0; i < productos.length; i++) {
    let nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("producto");

    let tituloProducto = document.createElement("p");
    tituloProducto.classList.add("titulo");
    tituloProducto.textContent = productos[i].nombre;

    let imagen = document.createElement("img");
    imagen.setAttribute("src", productos[i].img);

    nuevoDiv.appendChild(tituloProducto);
    nuevoDiv.appendChild(imagen);

    listaProductosRef.appendChild(nuevoDiv);
  }
};

// Correcion de funcion filtrado
const filtrado = (productos, texto) => {
  return productos.filter(
    (item) => item.tipo.includes(texto) || item.color.includes(texto)
  );
};

mostarProductos(productos);

const botonDeFiltro = document.querySelector("#boton-busqueda");

botonDeFiltro.onclick = function () {
  while (listaProductosRef.firstChild) {
    listaProductosRef.removeChild(listaProductosRef.firstChild);
  }

  const texto = busquedaInput.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  mostarProductos(productosFiltrados);

  // Se comenta esta parte ya que se puede reutilizar la funcion mostrar prodcutos
  // for (let i = 0; i < productosFiltrados.length; i++) {
  //   var d = document.createElement("div");
  //   d.classList.add("producto");

  //   var ti = document.createElement("p");
  //   ti.classList.add("titulo");
  //   ti.textContent = productosFiltrados[i].nombre;

  //   var imagen = document.createElement("img");
  //   imagen.setAttribute("src", productosFiltrados[i].img);

  //   d.appendChild(ti);
  //   d.appendChild(imagen);

  //   li.appendChild(d);
  // }
};
