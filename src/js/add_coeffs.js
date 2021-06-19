let nextACoeff = "a4";

let nextBCoeff = "b4";


let nextZero = "z3";

let nextPole = "p3";

function insertInput(Id, Value) {
    const parent = document.getElementById(Id).parentNode;
    const older_parent = parent.parentNode;

    let label = document.createElement("label");
    label.for = Value;
    label.innerHTML = Value + ': ';
    older_parent.insertBefore(label, parent);


    let input = document.createElement("input");
    input.type = 'text';
    input.id = Value;
    input.value = '0';
    input.setAttribute('onchange', 'ReadAndPlot()')
        // input.onchange = ReadAndPlot;

    older_parent.insertBefore(input, parent);

    let space = document.createElement("br");
    older_parent.insertBefore(space, parent);

    if (Id[0] == "a") {

        nextACoeff = Id[0] + (parseFloat(nextACoeff.slice(1)) + 1);

    } else if (Id[0] == "b") {

        nextBCoeff = Id[0] + (parseFloat(nextBCoeff.slice(1)) + 1);

    } else if (Id[0] == "z") {

        nextZero = Id[0] + (parseFloat(nextZero.slice(1)) + 1);

    } else if (Id[0] == "p") {

        nextPole = Id[0] + (parseFloat(nextPole.slice(1)) + 1);

    } else {

        console.log("Strange Error!")

    }


}


document.getElementById("a-coef-add").addEventListener("click", function() {
    insertInput('a-coef-add', nextACoeff)
});

document.getElementById("b-coef-add").addEventListener("click", function() {
    insertInput('b-coef-add', nextBCoeff)
});



//

document.getElementById("poles-add").addEventListener("click", function() {
    insertInput('poles-add', nextPole)
});

document.getElementById("zeros-add").addEventListener("click", function() {
    insertInput('zeros-add', nextZero)
});