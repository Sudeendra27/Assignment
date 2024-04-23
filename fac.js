function calculateFactorial() {
  var number = parseInt(document.getElementById("numberInput").value);
  var factorial = 1;
  for (var i = 2; i <= number; i++) {
    factorial *= i;
  }
  // Display the factorial
  document.getElementById("output").innerText =
    "Factorial of " + number + " is: " + factorial;
}
