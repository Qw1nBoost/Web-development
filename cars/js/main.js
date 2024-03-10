AOS.init();

let form = document.getElementById("form").addEventListener("submit", ocClick);

function onClick(event) {
    event.preventDefault();
    alert("Данные успешно заполнены!");
}
