// alert("vSpringboard welcomes you");

// TASK 1
// Create a page with:
// - An input field for name
// - A button
// - When button is clicked, show "Hello, [name]!" on the page in a p tag

// TASK 2
// Same thing using prompt()
// console.log() "Hello, [name]!"
// Both in the same file, clearly commented.

let name = prompt("Enter Name: ");
console.log(`"Hello, ${name}!`)

const myInput = document.getElementById('myInput')
const mySubmit = document.getElementById('mySubmit')
const preview = document.getElementById('preview')

mySubmit.onclick = () => {
    preview.innerText = myInput.value;
}