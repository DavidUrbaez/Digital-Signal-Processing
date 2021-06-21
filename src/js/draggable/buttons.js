document.getElementById("add-complex-pole").onclick = function() {
    poles_complex.push(new Draggable(width / 2, height / 2, 15, 'x', true));
};

document.getElementById("remove-complex-pole").onclick = function() {
    poles_complex.pop();
};

document.getElementById("add-real-pole").onclick = function() {
    poles_real.push(new Draggable(width / 2, height / 2, 15, 'x', false));
};

document.getElementById("remove-real-pole").onclick = function() {
    poles_real.pop();
};

// Zeros

document.getElementById("add-complex-zero").onclick = function() {
    zeros_complex.push(new Draggable(width / 2, height / 2, 15, 'o', true));
};

document.getElementById("remove-complex-zero").onclick = function() {
    zeros_complex.pop();
};

document.getElementById("add-real-zero").onclick = function() {
    zeros_real.push(new Draggable(width / 2, height / 2, 15, 'o', false));
};

document.getElementById("remove-real-zero").onclick = function() {
    zeros_real.pop();
};

////////////////////////////////////////////////////////////////////////////


const allbuttons = document.querySelectorAll('.zpk-controls .add,.zpk-controls .remove');


for (const button of allbuttons) {
    button.addEventListener('click', function(event) {
        ReadAndPlot('zpk-map', actualOutput);
    })
}