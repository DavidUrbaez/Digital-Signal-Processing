let nextACoeff = "a3";

let nextBCoeff = "b3";

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

    older_parent.insertBefore(input, parent);

    let space = document.createElement("br");
    older_parent.insertBefore(space, parent);

    if (Id[0] == "a") {
        nextACoeff = Id[0] + (parseFloat(nextACoeff.slice(1)) + 1);
    } else if (Id[0] == "b") {
        nextBCoeff = Id[0] + (parseFloat(nextBCoeff.slice(1)) + 1);
    } else {
        console.log("Strange Error!")
    }


}
document.getElementById("a-coef-add").addEventListener("click", function() { insertInput('a-coef-add', nextACoeff) });

document.getElementById("b-coef-add").addEventListener("click", function() { insertInput('b-coef-add', nextBCoeff) });