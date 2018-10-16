var nota1 = parseInt(prompt("Introdueix una nota"));
var nota2 = parseInt(prompt("Introdueix una nota"));
var nota3 = parseInt(prompt("Introdueix una nota"));

var mitjana=(nota1+nota2+nota3)/3;

if(mitjana>=4){
    alert("regular");
}else{
    alert("suspes");
}