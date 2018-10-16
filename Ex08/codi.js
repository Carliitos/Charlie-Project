


do{
var n1 = parseInt(prompt("Introdueix la nota del primer examen"));
}while(!(n1<1000&&n1>=0));

if(n1<10){
    alert("El número es de una cifra");
}else if(n1<100){
    alert("El número es de 2 cifras");
}else if(n1<1000){
    alert("El número es de tres cifras");
}