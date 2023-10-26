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
            localStorage.setItem("check", true);
        } else {
            localStorage.setItem("check", false);
        }
    });

    let openButton = document.getElementById("open-form");
    let popupDiv = document.getElementById("popup");
    openButton.addEventListener("click", function () {
        popupDiv.classList.remove("hidden");
        history.pushState({page: "form"}, "Форма обратной связи", "?form=true");
    });

    window.addEventListener("popstate", function (event) {
        popupDiv.classList.add("hidden");
        history.back();
    });

    let submitForm = document.getElementById("form-to-submit");
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();

        localStorage.clear();
    })
});
