function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#xml");
	let pelis = xmlDoc.querySelectorAll("pelicula");
	for(let i=0; i<pelis.length; i++){
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='cine'>" + pelis[i].textContent + "</p>";
	}
}
	loadDocA("cine.xml","xml");
	console.log(xmlDoc);
