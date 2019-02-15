function mostrar()
{
  var compra;
  var descuento;
  var iva;

  compra= prompt("Tu compra es de "," 5000" );
  descuento= prompt("Y tenes 10% de descuento, que seria:",compra-(compra*10/100));
  iva= prompt("Pero inclueyendo el iva, te quedaria final: ",descuento+(descuento*5/100))
  


}
