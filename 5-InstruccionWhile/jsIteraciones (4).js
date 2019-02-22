function mostrar()
{
	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");
	while (numero<0 || numero>10)
	{
		numero = prompt("Error,ingrese un número entre 0 y 10.");
	}
 	alert("Bien ahi prro, alto numero--> "+numero);

}//FIN DE LA FUNCIÓN