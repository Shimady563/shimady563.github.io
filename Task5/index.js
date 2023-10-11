/*global document */

let doc = document;
doc.addEventListener("DOMContentLoaded", function () {
    let calculateButton = doc.getElementById("calculateButton");
    calculateButton.addEventListener("click", function (event) {
        event.preventDefault();
        let quantityInput = doc.getElementById("quantity");
        let productSelect = doc.getElementById("product");
        let result = doc.getElementById("result");

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