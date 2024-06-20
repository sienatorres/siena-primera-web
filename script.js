function recomendarLibro() {
	var genero = document.getElementById("genero").value;
	var tematica = document.getElementById("tematica").value;
    var edad = document.getElementById("edad").value;
    var recomendacion = "hola";

    if (genero === "novela") {
		if (tematica === "romantica") {
			if (edad<19) {
				recomendacion="Gente normal, de Sally Rooney"
			}
			else if (edad<36) {
				recomendacion="Donde estas mundo bello, de Sally Rooney"
			}
			else if (edad>35) {
				recomendacion="Orgullo y prejuicio, de Jane Austen"
			}
		}
		else if (tematica === "historica") {
			if (edad<19) {
				recomendacion="Historia de dos ciudades, de Charles Dickens"
			}
			else if (edad<36) {
				recomendacion="El mago del kremlin, de Da Empoli"
			}
			else if (edad>35) {
				recomendacion="Limonov, de Carrere"
			}
		}
		else if (tematica === "policial") {
			if (edad<19) {
				recomendacion="El sabueso de los Baskerville, de Arthur Conan Doyle"
			}
			else if (edad<36) {
				recomendacion="A sangre fria, de Truman Capote"
			}
			else if (edad>35) {
				recomendacion="La cena, de Herman Koch"
			}
		}
	}
	else if (genero === "cuento") {
		if (tematica === "romantica") {
			if (edad<19) {
				recomendacion="Canto del amor triunfante, de Turgueniev"
			}
			else if (edad<36) {
				recomendacion="Una vez en Europa, de John Berger"
			}
			else if (edad>35) {
				recomendacion="Vecinos, de Carver"
			}
		}
		else if (tematica === "historica") {
			if (edad<19) {
				recomendacion="La muerte en Sri Lanka, de Carrere"
			}
			else if (edad<36) {
				recomendacion="Vanadio, de Primo Levi"
			}
			else if (edad>35) {
				recomendacion="Palido caballo, palido jinete, de Katherine Anne Porter"
			}
		}
		else if (tematica === "policial") {
			if (edad<19) {
				recomendacion="La carta robada, de Edgard Allan Poe"
			}
			else if (edad<36) {
				recomendacion="El jardin de senderos que se bifurcan, de Borges"
			}
			else if (edad>35) {
				recomendacion="Las hermanas Vane, de Nabokov"
			}
		}
	}

	document.getElementById("recomendarLibro").style.display="block";
    document.getElementById("laRecomendacion").textContent = recomendacion;
}


let itemsCarrito=[];

function AgregarAlCarrito(NombreProducto,precio) {
    let esta=itemsCarrito.find(item => item.nombre === NombreProducto);

    if (esta) {
        esta.cantidad++;
        esta.PrecioTotal=esta.cantidad*precio;
    } else {
        itemsCarrito.push({
            nombre: NombreProducto,
            precio: precio,
            cantidad: 1,
            PrecioTotal: precio
        });
    }
    MostrarCarrito();
}

function MostrarCarrito() {
    const itemsCarritoDiv=document.getElementById('itemsCarrito');
    itemsCarritoDiv.innerHTML='';

    itemsCarrito.forEach(item => {
        const itemDiv=document.createElement('div');
        itemDiv.innerHTML= `
            <p>${item.nombre} - $${item.precio} - Cantidad: 
                <input type="number" value="${item.cantidad}" min="1" onchange="actualizarCantidad('${item.nombre}', this.value)">
                <button onclick="EliminarDelCarrito('${item.nombre}')">Eliminar</button>
            </p>
            <p>Total: $${item.PrecioTotal}</p>
        `;
        itemsCarritoDiv.appendChild(itemDiv);
    });

    const PrecioTotalSpan=document.getElementById('PrecioTotal');
    const PrecioTotal=itemsCarrito.reduce((acc, item) => acc + item.PrecioTotal, 0);
    PrecioTotalSpan.textContent=PrecioTotal;
}

function actualizarCantidad(NombreProducto, NuevaCantidad) {
    let esta=itemsCarrito.find(item => item.nombre===NombreProducto);

    if (esta) {
        esta.cantidad=parseInt(NuevaCantidad);
        esta.PrecioTotal=esta.cantidad*esta.precio;
    }

    MostrarCarrito();
}

function EliminarDelCarrito(NombreProducto) {
    itemsCarrito=itemsCarrito.filter(item => item.nombre!==NombreProducto);
    MostrarCarrito();
}

function checkout() {
    alert('Compra finalizada. Gracias por su compra!');
    itemsCarrito=[];
    MostrarCarrito(); 
}

MostrarCarrito();
