let checkButton = document.getElementById("check-btn");
let input = document.getElementById("text-input");


checkButton.addEventListener("click", function () {
    f = true;
    start = 0;
    end = input.value.length - 1;
    while (end > start) {
        if (input.value[start].toUpperCase() != input.value[end].toUpperCase()) {
            f = false;
            break
        } else {
            start++;
            end--;
        }
        //input.value[start].toUpperCase() != input.value[end].toUpperCase() ? f = true : start++, end--;
    }
    f == true ? alert("Palindrom") : alert("Not Palindrom");
});

