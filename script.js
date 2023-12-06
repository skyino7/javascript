// alert("Welcome To Javascript");

// document.write("Welcome To Javascript");

// console.log("Welcome To Javascript");

var x = 10;
var fname = "Seth";

document.write("My name is " + fname + ", I am " + x + " years old.");
console.log(fname + " " + x)

// alert(x);

arr = ['Hello', 'Test', 'School']
for (i = 0; i < arr.length; i++)
    console.log(arr[i])


let z = 10;

if (z > 5)
{
    let y = 20;
    console.log(y);
}

// console.log(y);

let arr1 = [];
let rows = 4;
let columns = 3;

// creating two-dimensional array
for (let i = 0; i < rows; i++) {
  arr1[i] = [];
  for (let j = 0; j < columns; j++) {
    arr1[i][j] = j;
  }
}

document.writeln(arr1);
// console.log(arr);