function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	//un solo alert
	var nota;
	var mensaje;
	nota=Math.floor(Math.random()*10)+1;
    
    if(nota>8)
    {
      mensaje=("Excelente su nota es " +nota);
    }
     else 
    {
     if(nota>3)
     {
       mensaje=("Aprobo su nota es " +nota);
          		
     }
      else
     {
       mensaje=("Vamos, la proxima se puede su nota es " +nota);
        }

             alert(mensaje);
             console.log(nota);
}}//FIN DE LA FUNCION