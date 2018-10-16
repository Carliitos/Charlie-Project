var major = 0;

for(var i=0; i<3;i++){
    var n = parseInt(prompt("Introdueix un nombre"));
    if(major<n) major=n;
}

alert("El número major és: "+major);