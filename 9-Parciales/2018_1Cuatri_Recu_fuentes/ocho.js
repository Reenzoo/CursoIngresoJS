function mostrar()
{
	var pais;
	var superficie;
	var contador;
	var respuesta;
	var superficieMinima;
	var superficieMaxima;

	contador=0;
	respuesta="si";
	superficieMinima=0;
	superficieMaxima=500;

 	while(respuesta=="si")
 	{
 		contador=contador+1;
 		pais= prompt("#"+contador+" ¿Cual es su pais?");
		superficie= prompt("#"+contador+" ¿Cual es la superficie de su pais? (entre 0 y 500)");
		superficie=parseInt(superficie);
		respuesta=prompt("¿Desea continuar?");
 	}
	
}
