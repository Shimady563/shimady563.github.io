document.addEventListener("DOMContentLoaded", function() {
    let calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", function() {
        let quantityInput = document.getElementById("quantity");
        let productSelect = document.getElementById("product");
        let resultDiv = document.getElementById("result");

        let quantity = parseInt(quantityInput.value);
        let price = parseInt(productSelect.value);

        if (isNaN(quantity) || isNaN(price)) {
            resultDiv.innerHTML = "Ошибка: введите корректные данные";
        } else {
            let total = quantity * price;
            resultDiv.innerHTML = "Стоимость заказа: $" + total;
        }
    });
});