document.addEventListener('DOMContentLoaded', function (event) {
    let calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', function (event) {
        event.preventDefault();
        let quantityInput = document.getElementById('quantity');
        let productSelect = document.getElementById('product');
        let result = document.getElementById('result');

        let str1 = quantityInput.value;
        let str2 = productSelect.value;
        if (str1.match(/^\d+$/) === null || str2.match(/^\d+$/) === null) {
            result.innerHTML = "Ошибка, некорректные данные";
        }
        else {
            let ans = parseInt(quantityInput.value) * parseInt(productSelect.value); 
            result.innerHTML = "Стоимость заказа: $" + ans;
        }
    });
});
