let contador = 0
function trocaImg(){
	if(contador == 0){
		alert('oi')
		document.getElementById("legislacao").src = "legislacao.jpg";
		contador++;
	}else{
		document.getElementById("legislacao").src = "bull3.jpeg";
		contador--;
	}
}