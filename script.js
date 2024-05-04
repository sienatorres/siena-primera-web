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

