/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var ingreseSueldo;
	var Aumento;
	
	primerNumero=document.getElementById('sueldo').value;
	
	primerNumero= parseInt(primerNumero);
	
  
    Aumento= ((10*primerNumero)/100)+primerNumero;
	
	aumento= resultado.value;
 
}