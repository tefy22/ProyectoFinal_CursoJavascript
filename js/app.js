
var calculadora={
	init: function () {
		document.onmousedown= this.eventoRTam;
		document.onmouseout= this.eventoATam;
		document.onclick=this.eventoNumeros;
		document.getElementById("mas").onclick=this.eventoSuma;
		document.getElementById("on").addEventListener("click",borrar);		
		document.getElementById("sign").addEventListener("click",numNegativo);	
		document.getElementById("igual").addEventListener("click",igual);
	},
	eventoRTam: function (event){
		reducirTam(event.target);
	},
	eventoATam: function (event){
		ampliarTam(event.target);
	},
	eventoNumeros: function(event){
		numeros(event.target.id);
	}
}

calculadora.init();// MUESTRA LOS CAMBIOS HECHOS

//REDUCIR EL TAMAÑO DE LAS TECLAS QUE SE PRESIONAN
function reducirTam (elemento){	
	elemento.setAttribute("style", "transform:scale(0.95,0.95)");
}

//AMPLIAR EL TAMAÑO DE LAS TECLAS QUE SE PRESIONAN
function ampliarTam (elemento){
	elemento.setAttribute("style", "transform:scale(1,1)");
}

//FUNCION PARA PINTAR LOS NUMEROS
function numeros(elemento) {

	var num= event.target.id;//Saca el id cuando se hace click en algun elemento del dom

	switch(num){
		case "0":
		var d=document.getElementById("display").innerHTML;//lo utilizo para devolver lo que contiene el span
		if(d=="0"){// si en d esta el cero entonces
			document.getElementById("display").innerHTML=0;
		}else if (d=="0."){
			document.getElementById("display").innerHTML+=0;
		}else{
			document.getElementById("display").innerHTML+=0;
		}			
		break;

		case "1":
		var d=document.getElementById("display").innerHTML;//lo utilizo para devolver lo que contiene el span
		if(d=="0"){
			document.getElementById("display").innerHTML=1;
		}else if (d=="0."){
			document.getElementById("display").innerHTML+=1;
		}else{
			document.getElementById("display").innerHTML+=1;
		}		
		break;

		case "2":
		var d=document.getElementById("display").innerHTML;//lo utilizo para devolver lo que contiene el span
		if(d=="0"){
			document.getElementById("display").innerHTML=2;
		}else if (d=="0."){
			document.getElementById("display").innerHTML+=2;
		}else{
			document.getElementById("display").innerHTML+=2;
		}
		break;

		case "3":
		var d=document.getElementById("display").innerHTML;//lo utilizo para devolver lo que contiene el span
		if(d=="0"){
			document.getElementById("display").innerHTML=3;
		}else if (d=="0."){
			document.getElementById("display").innerHTML+=3;
		}else{
			document.getElementById("display").innerHTML+=3;
		}
		break;

		case "4":
		var d=document.getElementById("display").innerHTML;//lo utilizo para devolver lo que contiene el span
		if(d=="0"){
			document.getElementById("display").innerHTML=4;
		}else if (d=="0."){
			document.getElementById("display").innerHTML+=4;
		}else{
			document.getElementById("display").innerHTML+=4;
		}
		break;

		case "5":
		var d=document.getElementById("display").innerHTML;//lo utilizo para devolver lo que contiene el span
		if(d=="0"){
			document.getElementById("display").innerHTML=5;
		}else if (d=="0."){
			document.getElementById("display").innerHTML+=5;
		}else{
			document.getElementById("display").innerHTML+=5;
		}
		break;

		case "6":
		var d=document.getElementById("display").innerHTML;//lo utilizo para devolver lo que contiene el span
		if(d=="0"){
			document.getElementById("display").innerHTML=6;
		}else if (d=="0."){
			document.getElementById("display").innerHTML+=6;
		}else{
			document.getElementById("display").innerHTML+=6;
		}
		break;

		case "7":
		var d=document.getElementById("display").innerHTML;//lo utilizo para devolver lo que contiene el span
		if(d=="0"){
			document.getElementById("display").innerHTML=7;
		}else if (d=="0."){
			document.getElementById("display").innerHTML+=7;
		}else{
			document.getElementById("display").innerHTML+=7;
		}
		break;

		case "8":
		var d=document.getElementById("display").innerHTML;//lo utilizo para devolver lo que contiene el span
		if(d=="0"){
			document.getElementById("display").innerHTML=8;
		}else if (d=="0."){
			document.getElementById("display").innerHTML+=8;
		}else{
			document.getElementById("display").innerHTML+=8;
		}
		break;

		case "9":
		var d=document.getElementById("display").innerHTML;//lo utilizo para devolver lo que contiene el span
		if(d=="0"){
			document.getElementById("display").innerHTML=9;
		}else if (d=="0."){
			document.getElementById("display").innerHTML+=9;
		}else{
			document.getElementById("display").innerHTML+=9;
		}
		break;

		case "punto":
		var d=document.getElementById("display").innerHTML;//lo utilizo para devolver lo que contiene el span
		if(d==0){
			document.getElementById("display").innerHTML="0.";
		}else if(d.indexOf(".")==-1){ //aqui se mira si ya se coloco el punto, no lo vuelva a colocar
			document.getElementById("display").innerHTML+=".";
		}
		break;

		case "mas":
		document.getElementById("display").innerHTML+="+";
		break;

		case "menos":
		document.getElementById("display").innerHTML+="-";
		break;

		case "dividido":
		document.getElementById("display").innerHTML+="/";
		break;

		case "por":
		document.getElementById("display").innerHTML+="*";
		break;
	}	

	acomodarDisplay();
}

//FUNCION PARA QUE LE COLOQUE EL MENOS ADELANTE
function numNegativo(){
	var d= document.getElementById("display").innerHTML;
	var resultado= (d*(-1));
	document.getElementById("display").innerHTML=resultado;
}

//FUNCION BORRAR
function borrar() {
	document.getElementById("display").innerHTML= "  ";
	document.getElementById("display").innerHTML= "0";
}

//FUNCION PARA QUE SOLO PERMITA 8 NUMEROS EN EL DISPLAY
function acomodarDisplay(){
	var cadena= document.getElementById("display").innerHTML;
	var numero= parseFloat(cadena);
	var limite=8;

	if (cadena.indexOf(".") != -1){
		limite++
	}
	if (cadena.indexOf("-")!= -1){
		limite++
	}

	if(cadena.length>limite){
		if (numero-numero.toFixed(0)==0) {
			document.getElementById("display").innerHTML= numero;
		}else{
			document.getElementById("display").innerHTML= parseFloat(cadena).toPrecision(8);
		}
	}
}

//FUNCION PARA CALCULAR LAS OPERACIONES
function igual(){
	var d= document.getElementById("display").innerHTML;
	var resultado=eval(d);

	document.getElementById("display").innerHTML= resultado;
}

