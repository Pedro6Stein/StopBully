let contador = 0
function trocaImg(){
	alert('oi');
	if(contador == 0){
		document.getElementById("legislacao").src = "legislacao.jpg";
		contador++;
	}else{
		document.getElementById("legislacao").src = "bull3.jpeg";
		contador--;
	}
}