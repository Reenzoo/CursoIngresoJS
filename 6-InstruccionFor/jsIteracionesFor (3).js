function mostrar()
{

	//var repetciones = prompt("ingrese el número de repeticiones");
	var numeroIngresado;
	var numeroAnterior;
	var acumulador;

	acumulador=0
	
	
	numeroIngresado= prompt("Ingrese un numero");
	numeroIngresado= parseInt(numeroIngresado);


	for (numeroAnterior=numeroIngresado-1;numeroAnterior>0;numeroAnterior-- )
	{
		if(numeroIngresado % numeroAnterior == 0)
		{
			console.log(numeroAnterior);
			acumulador= acumulador+numeroAnterior;
		}
		
	}

	if (numeroIngresado==acumulador)
	{
		console.log("Numero Perfecto");
	}
	else 
	{
		console.log("No es Numero Perfecto");
	}


}//FIN DE LA FUNCIÓN