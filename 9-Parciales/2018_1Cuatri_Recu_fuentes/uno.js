function mostrar()
{
   
     var mascota1;
     var mascota2;
     var peso1;
     var peso2;
     var sumar;

     mascota1=prompt("¿Como se llama?","India");
     mascota2=prompt("¿Como se llama?","Pelufo");
     
     peso1=prompt("¿Cuanto pesa?","50");
     peso2=prompt("¿Cuanto pesa?","40");

     peso1=parseInt(peso1);
     peso2=parseInt(peso2);


     sumar=peso1 + peso2;

     alert("Se llaman "+mascota1+" y "+mascota2 +" y los dos juntos pesan: "+sumar +" kilos ");






}