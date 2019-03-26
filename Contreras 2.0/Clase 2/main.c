#include <stdio.h>
#include <stdlib.h>
#include "contreras.h"

int main()
{
    int x;
    int y;
    int z;
    int respuesta;


    printf("Ingrese un numero: ");
    scanf("%d", &x);

    printf("Ingrese otro numero: ");
    scanf("%d", &y);

    printf("Ingrese un ultimo numero: ");
    scanf("%d", &z);

    respuesta= obtenerMaximo(x, y, z);

    printf("El numero maximo es: %d\n", respuesta);

    system("pause");
    return 0;
}

