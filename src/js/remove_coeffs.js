function removeInput(Id) {
    const spaces = document.querySelectorAll("." + Id + "-coef br");
    spaces[spaces.length - 1].remove();

    const inputs = document.querySelectorAll("." + Id + "-coef input[type='text']");
    inputs[inputs.length - 1].remove();


    const labels = document.querySelectorAll("." + Id + "-coef label");
    labels[labels.length - 1].remove();

    if (Id == "a") {
        nextACoeff = Id + (parseFloat(nextACoeff.slice(1)) - 1);
    } else if (Id == "b") {
        nextBCoeff = Id + (parseFloat(nextBCoeff.slice(1)) - 1);
    } else {
        console.log("Strange Error!")
    }
}
document.getElementById("a-coef-remove").addEventListener("click", function() { removeInput("a") });

document.getElementById("b-coef-remove").addEventListener("click", function() { removeInput("b") });