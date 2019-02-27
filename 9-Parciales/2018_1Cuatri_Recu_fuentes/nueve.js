//* serie de celulares
//---pedir marca
//---pedir el tamaño 
//---pedir precio

//1) Saber el mayor precio y la marca de ese mayor precio
//2) Promedio precio
//3) Cantidad de celulares mayores a $2000
//4) Celular, marca y tamaño del mas caro
//5) Celular, marca y tamaño del mas barato
//6) El primer celular que sale $1000 
//7) Precio del ultimo celular "LG"
function mostrar()
{
	var marca;
	var tamaño;
	var precio;
	var contador;
	var mayorPrecio;
	var mayorPrecioMarca;
	var promedio;
	var cantidadCelulares;
	var acumulador;
	var respuesta;

	contador=0;
	acumulador=0;
	respuesta="si";

	while (contador<3)
	{
		contador=contador+1;
		marca= prompt("¿Que marca del celular tiene? " +contador +" #");
		tamaño= prompt("¿Cual es el tamaño del celular? "+contador+" #");
		precio= prompt("¿Cual es el precio de su celular? "+contador+" #");
		tamaño= parseInt(tamaño);
		precio= parseInt(precio);
		acumulador=acumulador+contador;

		if ()
	}
	
		respuesta=prompt("Ingrese no para salir")


}

