document.getElementById("add-complex-pole").onclick = function() {
    zeros_complex.push(new Draggable(width / 2, height / 2, 15, 'o', true));
};

document.getElementById("remove-complex-pole").onclick = function() {
    zeros_complex.pop();
};