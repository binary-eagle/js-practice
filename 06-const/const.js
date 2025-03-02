// const = a variable tha can't be changed

const pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a cicle");
radius = Number(radius);
circumference = 2 * pi * radius;
let result = document.getElementById("myH1")
result = result.textContent = circumference.toFixed(4);