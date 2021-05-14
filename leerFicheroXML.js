function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let alumnos = xmlDoc.querySelectorAll("libro")
	for(let i=0; i<libro.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libro[i].textContent + "</p>"
	
}
	loadDocA("leerFicheroXML.xml","xml");
