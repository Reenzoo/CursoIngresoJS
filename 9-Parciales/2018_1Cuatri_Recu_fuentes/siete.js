function mostrar()
{
	var respuesta;
	var velocidadKilometros;
	var combustibleTipo;
	var contador;
	var acumulador;
	var velocidadMinima;
	var velocidadMaxima;
	var combustibleSolido;
	var combustibleLiquido;
	var acumulador;
	var velocidadPromedio;
	var velocidadBaja;
	var velocidadAlta;
	

	respuesta="si";
	contador=0;
	velocidadMinima=0;
	velocidadMaxima=250;
	acumulador=0;
	combustibleLiquido="Liquido";
	combustibleSolido="Solido";
	velocidadPromedio=0;
	

 	while (respuesta=="si")
	{
		contador=contador+1;
		velocidadKilometros= prompt("#"+contador+ " ¿Cual es la velocidad del vehiculo? entre (0 y 250)");
		velocidadKilometros= parseInt(velocidadKilometros);
		combustibleTipo= prompt("#"+contador+ " ¿Cual es el tipo de combustible? (Solido o Liquido)");
		respuesta= prompt("¿Desea continuar?");
		acumulador=acumulador+1;
		
		velocidadPromedio=(velocidadKilometros+velocidadPromedio);
		velocidadPromedio=parseInt(velocidadPromedio);
		
		
		if (respuesta!="si")
		{
			break;
		}

	}

	velocidadPromedio=velocidadPromedio/acumulador;
	
	if (velocidadKilometros>=velocidadMinima && velocidadKilometros<=velocidadMaxima)
			{
				
				
				alert("La velocidad promedio de los vehiculos ingresado es: "+velocidadPromedio);

			}
			else
			{
				if (velocidadKilometros!=velocidadMinima && velocidadKilometros!=velocidadMaxima)
				{
					alert("Error, vuelva a ingresar los valores dentro del perimetro.")
				}
			}

	
	
}