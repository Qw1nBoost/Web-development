var form = document.getElementById("main-form").addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    var el = document.getElementById("main-form");

    var name = el.name.value;
    var tel = el.tel.value;
    var adress = el.adress.value;

    if (name == "" || tel == "" || adress == "") {
        alert("Заполните все данные!");
        // return false;
    } else {
        alert("Данные успешно заполнены!");
        console.log(name, tel, adress);
        // return true;
    }
}
