let factorial = 1;
let contador = 1;
while (contador < 10){
    factorial *= (contador + 1);
    contador++;
    if (contador >= 10){
        break;
    }
}