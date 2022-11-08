function trocaImg(){
	let contador = 0
	if(contador == 0){
		document.getElementById("legislacao").src = "bull3.jpeg";
		contador++;
	}else{
		document.getElementById("legislacao").src = "legislacao.jpg";
		contador--;
	}
	trocaImg.repeat(100);
}

function trocaHtml(){
	let sms = "Foto que mandamos para a Bragantec!!"
	document.getElementById("txResultado").innerHTML = sms;
	
}


