function removeInput(Id) {
    const spaces = document.querySelectorAll("." + Id + "-coef br");
    spaces[spaces.length - 1].remove();

    const inputs = document.querySelectorAll("." + Id + "-coef input[type='text']");
    inputs[inputs.length - 1].remove();


    const labels = document.querySelectorAll("." + Id + "-coef label");
    labels[labels.length - 1].remove();

    if (Id[0] == "a") {

        nextACoeff = Id[0] + (parseFloat(nextACoeff.slice(1)) - 1);

    } else if (Id[0] == "b") {

        nextBCoeff = Id[0] + (parseFloat(nextBCoeff.slice(1)) - 1);

    } else if (Id[0] == "z") {

        nextZero = Id[0] + (parseFloat(nextZero.slice(1)) - 1);

    } else if (Id[0] == "p") {

        nextPole = Id[0] + (parseFloat(nextPole.slice(1)) - 1);

    } else {

        console.log("Strange Error!")

    }
    ReadAndPlot()
}
document.getElementById("a-coef-remove").addEventListener("click", function() {
    removeInput("a")
});

document.getElementById("b-coef-remove").addEventListener("click", function() {
    removeInput("b")
});

document.getElementById("poles-remove").addEventListener("click", function() {
    removeInput("poles")
});

document.getElementById("zeros-remove").addEventListener("click", function() {
    removeInput("zeros")
});

// ZP button
document.getElementById("Zpmap").addEventListener("click", function() {
    if (actualInput == "zpk") {
        ReadAndPlot(ReadType = 'zpk', OutputType = 'zpmap');

        document.getElementById("Zpmap").value = "ZP map"
        document.getElementById("Zpmap").style.padding = "1% 30%"

    } else {
        document.getElementById("Zpmap").value = "ZP map (!Change to Z-P input)"
        document.getElementById("Zpmap").style.padding = "1% 5%"
    }

});