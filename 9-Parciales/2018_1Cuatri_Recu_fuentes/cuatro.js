function mostrar()
{
	var precio1;
	var precio2;
	var precio3;
	var precio4;
	var mensaje;
	var desc;
	var resultado;
	

	precio1= prompt("Ingrese el primer precio");
	precio2= prompt("Ingrse el segundo precio");
	precio3= prompt("Ingrese el tecer precio");
	precio4= prompt("Ingrese el cuarto precio");



	if (precio1>=precio2 && precio1>=precio3 && precio1>=precio4)	
	{
		mensaje= precio1
	}
 	else 
 	{
 		if (precio2>=precio1 && precio2>=precio3 && precio2>=precio4)
 		{
 			mensaje= precio2
 		}
 		else
 		{
 			if(precio3>=precio1 && precio3>=precio2 && precio3>=precio4)
 			{
 				mensaje= precio3
 			}
 			else 
 			{
 				if(precio4>=precio1 && precio4>=precio2 && precio4>=precio3)
 				{
 					mensaje= precio4
 				}
 			}
 		}
 	}
    	alert("El precio mayor es: "+mensaje);

    	if (precio1>100 && precio2>100 && precio3>100 && precio4>100)
    	{
    		desc=10;
    	}
    	else 
    	{
    		if (precio1>50 && precio2>50 && precio3>50 && precio4>50)
    		{
    			desc=5;
    		}
    		else 
    		{
    			if (precio1<=50 && precio2<=50 && precio3<=50 && precio4<=50)
    			{
    				desc=15;
    			}
    		} 
    	}
	
	resultado=(precio1*desc/100);
	resultado=(precio2*desc/100);
	resultado=(precio3*desc/100);
	resultado=(precio4*desc/100);

	alert(resultado);


}

