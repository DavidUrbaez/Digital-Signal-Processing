let actualInput = 'coef';


// let actualOutput = 'time';

function changeInput(element) {
    element1 = document.querySelector("#btn-coef");
    element2 = document.querySelector("#btn-zpk");
    element1.classList.toggle("active");
    element2.classList.toggle("active")

    CoeffValuesDiv = document.querySelector("section.content aside div.values");
    ZPKValuesDiv = document.querySelector("section.content aside div.values-zpk");

    if (element1.classList[0] == "active") {
        actualInput = 'coef';
        CoeffValuesDiv.style.display = "flex";
        ZPKValuesDiv.style.display = "none";
    } else {
        actualInput = 'zpk';
        CoeffValuesDiv.style.display = "none";
        ZPKValuesDiv.style.display = "flex";
    }
}

function changeOutput(element) {
    element1 = document.querySelector("#btn-time");
    element2 = document.querySelector("#btn-freq");
    element1.classList.toggle("active");
    element2.classList.toggle("active");

    if (actualOutput == 'time') {
        actualOutput = 'freq';
    } else if (actualOutput == 'freq') {
        actualOutput = 'time';
    }
}

function changeOutput(element) {
    element1 = document.querySelector("#btn-time");
    element2 = document.querySelector("#btn-freq");
    element1.className = '';
    element2.className = '';
    element.className = 'active';

}