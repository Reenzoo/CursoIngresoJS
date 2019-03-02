	if (combustibleTipo!="Solido" && combustibleTipo!="Liquido")
		{
			alert("Error, ingrese uno de las dos opciones");
		}

//2)    
	if (contador==1)
		{
			velocidadMinima=velocidadKilometros;
		}

//3)*
	if (velocidadKilometros>=100 && combustibleTipo=="Liquido")
	{
		cantidadcombustibleliquido++;
	}

	if (maximocombustiblesolido<velocidadKilometros && combustibleTipo="Solido")
	{
		maximocombustiblesolido=velocidadKilometros
	}
////////***/
