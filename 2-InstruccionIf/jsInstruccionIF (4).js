function mostrar()
{
//tomo la edad  
    var edad;
    var mensaje;
    
    edad= document.getElementById('edad').value;
    edad= parseInt(edad);
    if(edad<18)
    {
    	if(edad>12)
    	{
    		mensaje="Es adolecente";
    	}
    }

    alert(mensaje);

}//FIN DE LA FUNCIÓN