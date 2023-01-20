// Function to get two numbers and add them together
function addNums() {
    // Find the items in the HTML page, and get their values
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    // Compute these, and make sure you convert them to integers
    var result = parseInt(num1) + parseInt(num2);

    // If we got some output that isn't a number...
    if (isNaN(result)) {
        // Print an error on bad input
        document.getElementById("result").innerHTML = "Invalid input";
    } else {
        // Otherwise, add the result to the HTML document
        document.getElementById("result").innerHTML = result;
    }
}

// Add event listeners so the functions are called whenever the input changes
document.getElementById("num1").addEventListener("keyup", addNums);
document.getElementById("num2").addEventListener("keyup", addNums);
