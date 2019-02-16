/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
function comenzar()
{
//Genero el número RANDOM entre 1 y 100
	    numeroSecreto= Math.floor((Math.random()*100)+1);
		//alert(numeroSecreto );
		
		contadorIntentos=0;

        console.log(contadorIntentos);
	    

}

function verificar()
{
	var numeroIngresado;
	var mensaje;

	contadorIntentos=contadorIntentos + 1;


	numeroIngresado= numero.value;
	

	//alert(numeroIngresado);

	intentos.value=contadorIntentos;

	if(numeroIngresado==numeroSecreto){
		mensaje="Usted es un ganador y lo hiciste en: " +contadorIntentos + " intentos";
	}
	switch (intentos)
    {
       case "1": 
            mensaje= "Estas en Modo Diablo porque le pegaste a la primera";
            break;
        case "2":
            mensaje= "Sos bueno le pegaste en la segunda";
            break;
        case "3":
            mensaje= "Bastante suerte!";
            break;
        case "4":
            mensaje= "Sos bueno";
            break;
        case "5":
            mensake= "Tardaste";
            break;
 }
	alert(mensaje);
	else
	{
		if (numeroIngresado< numeroSecreto)

			mensaje="Te falta...";
		else
		{
			if(numeroIngresado>numeroSecreto){
				mensaje="Te pasaste...";
			}
		}
	}
    
 
}