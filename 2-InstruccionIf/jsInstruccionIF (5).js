function mostrar()
{
//tomo la edad  
    var edad;
    var mensaje;
    
    edad= document.getElementById('edad').value;
    edad= parseInt(edad);
   
    else (edad>18) 
            {
               if (edad<13)
               {
               	mensaje="No es adolecente";
               }
            	
            }

    alert(mensaje);

}//FIN DE LA FUNCIÓN