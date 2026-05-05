// alert("vSpringboard welcomes you");

// TASK
// Ask user for a number using an input field.
// Print the full multiplication table of that number (1 to 10).
// Display it on the page, not just console.
// Each line: "7 x 1 = 7", "7 x 2 = 14" etc.

const myInput = document.getElementById('myInput')
const mySubmit = document.getElementById('mySubmit')
const preview = document.getElementById('preview')

mySubmit.onclick = () => {
    for (let index = 1; index <= 10; index++) {
        preview.innerHTML += `<br> ${myInput.value} x ${index} = ${Number(myInput.value) * index}`;
    }
}