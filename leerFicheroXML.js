function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let alumnos = xmlDoc.querySelectorAll("libro")
	for(let i=0; i<libro.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libro[i].textContent + "</p>"
	
}

let capa = document.querySelector("div:nth-child(1)") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("leerFicheroXML.xml","xml");
}
