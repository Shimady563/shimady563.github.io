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

    let select = document.getElementsByName("product2");
    let s = select[0];
    s.addEventListener("change", function (event) {
        updateResults();
    });

    let count = document.getElementById("quantity2")
    count.addEventListener("change", function (event) {
       updateResults();
    });

    let rad = document.getElementsByName("prodOpt");
    rad.forEach(function(r) {
        r.addEventListener("change", function (event) {
            updateResults();
        });
    });

    let ch = document.querySelectorAll(".check-group input");
    ch.forEach(function (c) {
        c.addEventListener("change", function (event) {
            updateResults();
        });
    });

    updateResults();
});

function updateResults() {
    let prodTypes = document.getElementById("product2");
    let sel = prodTypes;
    let prices = getPrices();
    let ind = parseInt(sel.value) - 1;
    let ans = 0;
    ans += prices.prodTypes[ind];
    console.log(sel.value);

    let options = document.getElementsByClassName("opt-group");
    let checks = document.getElementsByClassName("check-group");
    if (sel.value === 2) {
        options[0].style.display = "block";
    }
    else {
        options[0].style.display = "none";
    }
    
    if (sel.value === 3) {
        checks[0].style.display = "block";
    }
    else {
        checks[0].style.display = "none";
    }

    let rad = document.getElementsByName("prodOpt");
    rad.forEach(function(r) {
        if (r.checked) {
            ans += prices.prodOpt[r.value]
        }
    });
    
    let ch = document.querySelectorAll(".check-group input");
    ch.forEach(function(c) {
        if (c.checked) {
            ans += prices.prodCh[c.value];
        }
    });

    let count = document.getElementById("quantity2");
    ans *= count.value;

    let result = document.getElementById("result2");
    result.innerHTML = ans;
}

function getPrices() {
    return {
        prodTypes: [100, 200, 300],
        prodOpt: {
            opt1: 25,
            opt2: 46,
            opt3: 69,
        },
        prodCh: {
            ch1: 5,
            ch2: 10,
        }
    };
}
