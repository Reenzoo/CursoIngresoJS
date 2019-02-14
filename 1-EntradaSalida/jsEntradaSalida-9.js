/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var primerNumero;
	var total;
	var mostrarAumento
	

	primerNumero= sueldo.value;
	total= resultado.value;

	primerNumero=document.getElementById('sueldo').value;
	total=document.getElementById('resultado').value;

	primerNumero= parseInt(primerNumero);
    total= parseInt(total);

    mostrarAumento= ((10*primerNumero)/100);
	
	RESULTADO(primerNumero+mostrarAumento);
 
}