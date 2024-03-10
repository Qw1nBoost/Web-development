let checkButton = document.getElementById("check-btn");
let input = document.getElementById("text-input");


checkButton.addEventListener("click", () => {
    f = true;
    start = 0;
    end = input.value.length - 1;
    while (end > start) {
        input.value[start].toUpperCase() != input.value[end].toUpperCase() ? f = true : start++, end--;
    }
    f == true ? alert("Palindrom") : alert("Not Palindrom");
});

