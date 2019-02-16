function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;



switch (mesDelAño)
 {
    case "Julio":

    case "Agosto":
         mensaje="Abrigate que hace frio";
         break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
         mensaje="Ya pasamos el frio";
         break;
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Julio":
          mensaje= "Falta para el invierno"
          break;

}

alert(mesDelAño+": "+mensaje);


}//FIN DE LA FUNCIÓN