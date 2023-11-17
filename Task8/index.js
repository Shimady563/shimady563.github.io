/*global document*/
/*global window*/
/*global localStorage*/
/*global history*/
/*global XMLHttpRequest*/
/*global FormData*/

document.addEventListener("DOMContentLoaded", function () {
    let nameInput = document.getElementById("name-input");
    let emailInput = document.getElementById("name-input");
    let telInput = document.getElementById("name-input");
    let orgInput = document.getElementById("name-input");
    let messageInput = document.getElementById("name-input");
    let checkInput = document.getElementById("name-input");

    let savedName = localStorage.getItem("name");
    let savedEmail = localStorage.getItem("email");
    let savedTel = localStorage.getItem("tel");
    let savedOrg = localStorage.getItem("org");
    let savedMessage = localStorage.getItem("message");
    let savedCheck = localStorage.getItem("check");

    if (savedName) {
        nameInput.value = savedName;
    }
    if (savedEmail) {
        emailInput.value = savedEmail;
    }
    if (savedTel) {
        telInput.value = savedTel;
    }
    if (savedOrg) {
        orgInput.value = savedOrg;
    }
    if (savedMessage) {
        messageInput.value = savedMessage;
    }
    checkInput.checked = JSON.parse(savedCheck);

    nameInput.addEventListener("change", function () {
        localStorage.setItem("name", nameInput.value);
    });
    emailInput.addEventListener("change", function () {
        localStorage.setItem("email", emailInput.value);
    });
    telInput.addEventListener("change", function () {
        localStorage.setItem("tel", telInput.value);
    });
    orgInput.addEventListener("change", function () {
        localStorage.setItem("org", orgInput.value);
    });
    messageInput.addEventListener("change", function () {
        localStorage.setItem("message", messageInput.value);
    });
    checkInput.addEventListener("change", function () {
        if (checkInput.checked === true) {
            localStorage.setItem("check", "true");
        } else {
            localStorage.setItem("check", "false");
        }
    });

    let openButton = document.getElementById("open-form");
    let popupDiv = document.getElementById("popup");
    openButton.addEventListener("click", function () {
        popupDiv.classList.remove("hidden");
        history.pushState({page: "form"}, "Форма обратной связи", "?form=true");
    });

    window.addEventListener("popstate", function (event) {
        history.forward();
        if (event.state && event.state.page === "form") {
            popupDiv.classList.add("hidden");
            messageDiv.innerHTML = "";
            messageDiv.classList.add("hidden");
            history.pushState({page: "noForm"}, null, "?form=false");
        }
    });

    let submitForm = document.getElementById("form-to-submit");
    let messageDiv = document.getElementById("message-div");
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let xhr = new XMLHttpRequest();
        let formData = new FormData(submitForm);
        xhr.open("POST", "https://formcarry.com/s/vTUnbIdRSE");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    messageDiv.innerHTML = "Данные отправлены";
                } else {
                    let s = "Произошла ошибка при отправке данных";
                    messageDiv.innerHTML = s;
                }
                messageDiv.classList.remove("hidden");
            }
        };

        xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
        localStorage.clear();
        submitForm.reset();
    });
});
