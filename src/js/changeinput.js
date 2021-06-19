function changeInput(element) {
    element1 = document.querySelector("#btn-coef");
    element2 = document.querySelector("#btn-zpk");
    element1.classList.toggle("active");
    element2.classList.toggle("active")

    CoeffValuesDiv = document.querySelector("section.content aside div.values");
    ZPKValuesDiv = document.querySelector("section.content aside div.values-zpk");

    if (element1.classList[0] == "active") {

        CoeffValuesDiv.style.display = "flex";
        ZPKValuesDiv.style.display = "none";
    } else {

        CoeffValuesDiv.style.display = "none";
        ZPKValuesDiv.style.display = "flex";
    }
}