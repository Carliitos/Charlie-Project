var nombre = prompt("Introdueix un nombre");

if(isNaN(nombre)){
    alert("S'ha introduït un nombre");
    if(nombre<10){
    alert("El nombre té una xifra");
    }else alert("El nombre té més d'una xifra");
    }else{
    alert("no s'ha introduït un nombre");
}