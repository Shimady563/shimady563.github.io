/*global documentument */

document.addEventListener("DOMContentLoaded", function () {
    let calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", function (event) {
        event.preventDefault();
        let quantityInput = document.getElementById("quantity");
        let productSelect = document.getElementById("product");
        let result = document.getElementById("result");

        let str1 = quantityInput.value;
        let str2 = productSelect.value;
        if (str1.match(/^\d+$/) === null || str2.match(/^\d+$/) === null) {
            result.innerHTML = "Ошибка, некорректные данные";
        } else {
            let temp1 = parseInt(quantityInput.value);
            let temp2 = parseInt(productSelect.value);
            let ans = temp1 * temp2;
            result.innerHTML = "Стоимость заказа: $" + ans;
        }
    });
});

window.addEventListener("DOMContentLoaded", function (event) {
    let options = document.getElementsByClassName("opt-group");
    options[0].style.display = "none";

    let checks = document.getElementsByClassName("check-group");
    checks[0].style.display = "none";


});