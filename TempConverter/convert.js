window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    document.getElementById("convertButton").addEventListener("click", buttonFunction);
    document.getElementById("cInput").addEventListener("input", clearFahrenheit);
    document.getElementById("fInput").addEventListener("input", clearCelsius);
}

function buttonFunction() {
    var c = document.getElementById("cInput").value;
    var f = document.getElementById("fInput").value;
    
    if (c!="" && f==""){
        var newF = convertCtoF(parseFloat(c))
        if (isNaN(newF)) {
            document.getElementById("errorMessage").innerHTML = c + " is not a number";
            return;
        }
        else {
            document.getElementById("errorMessage").innerHTML = "";
        }
        document.getElementById("fInput").value = newF;
        f = newF;
    }
    
    if (c=="" && f!=""){
        var newC = convertFtoC(parseFloat(f))
        if (isNaN(newC)) {
            document.getElementById("errorMessage").innerHTML = f + " is not a number";
            return;
        }
        else {
            document.getElementById("errorMessage").innerHTML = "";
        }
        document.getElementById("cInput").value = newC;
        f = parseFloat(f);
    }
    
    var image = document.getElementById("weatherImage");
    
    if (f < 32) {
        image.src = "cold.gif";
    }
    else if (f > 50) {
        image.src= "warm.gif"; 
    }
    else {
        image.src="cool.gif";
    }
}   

function clearFahrenheit() {
    document.getElementById("fInput").value = "";
}
function clearCelsius() {
    document.getElementById("cInput").value = "";
}
function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9.0/5.0 + 32;

}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5.0/9.0;
}
