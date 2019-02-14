/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	   var primerNumero;
       var segundoNumero;
       var sumar;

       primerNumero= numeroUno.value;
       segundoNumero= numeroDos.value;

       primerNumero= parseInt(primerNumero);
       segundoNumero= parseInt(segundoNumero);


       sumar=primerNumero + segundoNumero;

       alert("el resultado es: "+sumar);
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resta;

	primerNumero= numeroUno.value;
	segundoNumero= numeroDos.value;

	primerNumero= parseInt(primerNumero);
	segundoNumero= parseInt(segundoNumero);

	resta= primerNumero - segundoNumero;

	alert("el reultado es: "+resta);
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var multiplicar;

	primerNumero= numeroUno.value;
	segundoNumero= numeroDos.value;

	primerNumero= parseInt(primerNumero);
	segundoNumero= parseInt(segundoNumero);

	multiplicar= primerNumero * segundoNumero;

	alert("El resultado es: "+multiplicar);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var dividir;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero= parseInt(primerNumero);
	segundoNumero= parseInt(segundoNumero);

	dividir= primerNumero / segundoNumero;

	alert ("El resultado es: "+dividir);
}

