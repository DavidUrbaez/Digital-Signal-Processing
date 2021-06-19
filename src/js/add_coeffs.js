document.getElementById("a-coef-add").addEventListener("click", function() {
    const parent = document.getElementById("a-coef-add").parentNode;
    const older_parent = parent.parentNode;

    let label = document.createElement("label");
    label.for = 'a3';
    label.innerHTML = 'a3: ';
    older_parent.insertBefore(label, parent)


    let input = document.createElement("input");
    input.type = 'text';
    input.id = 'a3';

    older_parent.insertBefore(input, parent)

    let space = document.createElement("br")
    older_parent.insertBefore(space, parent)
});



document.getElementById("b-coef-add").addEventListener("click", function() {
    const parent = document.getElementById("b-coef-add").parentNode;
    const older_parent = parent.parentNode;

    let label = document.createElement("label");
    label.for = 'b3';
    label.innerHTML = 'b3: ';
    older_parent.insertBefore(label, parent)


    let input = document.createElement("input");
    input.type = 'text';
    input.id = 'b3';

    older_parent.insertBefore(input, parent)

    let space = document.createElement("br")
    older_parent.insertBefore(space, parent)
});