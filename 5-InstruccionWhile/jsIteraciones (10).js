function mostrar()
{

	var contador;
	var acumulador;
	var sumarPositivo;
	var sumarNegativo;
	var cantPositivo;
	var cantNegativos;
	var cantCeros;
	var cantNumerosPares;
	var proPosi;
	var proNega;
	var diferencia;
	var respuesta="si";

	contador=0;
	acumulador=0;
	sumarPositivo=0;
	sumarNegativo=0;
	cantPositivo=0;
	cantNegativos=0;
	cantNumerosPares=0;
	proPosi=0;
	proNega=0;
	
	while (respuesta!="no")
	{
		contador=contador+1;
		numero=prompt("Ingrese el numero "+contador+"# :" );
		numero=parseInt(numero);
		acumulador=acumulador+numero;

		if(numero>0)
		{
			sumarPositivo=sumarPositivo+numero;
		}
		else
		{	if(numero==0)
			{
				cantCeros=cantCeros+1;
			}
			else
			{
				sumarNegativo=sumarNegativo+numero;
			
			}
			
			respuesta=prompt("Inegre no para salir");
			
		}
	}

	document.write("1-Suma de los negativos." + "<br>"
					"2-Suma de los positivos." + "<br>"
					"3-Cantidad de positivos" + "<br>"
					"4-Cantidad de negativos." + "<br>"
					"5-Cantidad de ceros." + "<br>"
					"6-Cantidad de números pares." + "<br>"
					"7-Promedio de positivos. " + "<br>"
					"8-Promedios de negativos. " + "<br>"
					"9-Diferencia entre positivos y negativos" + "<br>")






		
		


}//FIN DE LA FUNCIÓN