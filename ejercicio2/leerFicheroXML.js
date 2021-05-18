function gestionarFicheroXML(xmlDoc){
	
	let capaVacia = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("msg")
	for(let i=0; i<conversacion.length; i++)
		if (i % 2 == 0){
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='color borde impar'>" + conversacion[i].textContent + "</p>";
		}
		else{
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='borde par'>" + conversacion[i].textContent + "</p>";
		}
		
}
	loadDocA("conversacion.xml","xml");
