function gestionarFicheroXML(xmlDoc){
	
	let capaVacia = document.querySelector("#xml")
	let msgs = xmlDoc.querySelectorAll("msg")
	for(let i=0; i<msgs.length; i++)
		if (i % 2 == 0){
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='color borde impar'>" + msgs[i].textContent + "</p>";
		}
		else{
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='borde par'>" + msgs[i].textContent + "</p>";
		}
		
}
	setInterval(CargarFichero, 2000)
		function CargarFichero(){
  			loadDocA("conversacion.xml","xml")
}

