function revealPower() {
    // Please use a for loop with multiplication instead of an exponent
    var base = parseInt(document.getElementById("num1").value);
    var exp = parseInt(document.getElementById("num2").value);
    var result = 1;
    for (var i = 0; i<exp; i++)
    {
        result = result*base;
    }
   
    document.getElementById("result").innerHTML = result;

    
    document.getElementById("num1").addEventListener("keyup", revealPower);
    document.getElementById("num2").addEventListener("keyup", revealPower);
    // below this will all be empty
}