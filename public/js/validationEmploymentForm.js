function validateForm(event) {
    event.preventDefault();
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");

    const deptNameInput = document.getElementById("deptName");
    const budgetInput = document.getElementById("budget");

    const errorFirstName = document.getElementById("errorFirstName");
    const errorLastName = document.getElementById("errorlastName");
    const errorEmail = document.getElementById("erroremail");
    
    const errorDeptName = document.getElementById("errorDeptName");
    const errorBudget = document.getElementById("errorBudget");

    const errorsSummary = document.getElementById("errorsSummary");

    let valid = true;

    resetErrors([firstNameInput, lastNameInput, emailInput, deptNameInput,budgetInput], [errorFirstName, errorLastName, errorEmail, errorDeptName,errorBudget], errorsSummary);


    if (!checkRequired(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 60)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if (!checkRequired(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(lastNameInput.value, 2, 60)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if (!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(emailInput.value, 5, 60)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać od 5 do 60 znaków";
    } else if (!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierac prawidłowy email";
    }

    if (!checkRequired(deptNameInput.value)) {
        valid = false;
        deptNameInput.classList.add("error-input");
        errorDeptName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(deptNameInput.value, 2, 60)) {
        valid = false;
        deptNameInput.classList.add("error-input");
        errorDeptName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if (!checkRequired(budgetInput.value)) {
        valid = false;
        budgetInput.classList.add("error-input");
        errorBudget.innerText = "Pole jest wymagane";
    } else if (!checkNumber(budgetInput.value)) {
        valid = false;
        budgetInput.classList.add("error-input");
        errorBudget.innerText = "Pole powinno byc liczbą";
    } else if (!checkNumberRange(budgetInput.value, 3000, 3_000_000)) {
        valid = false;
        budgetInput.classList.add("error-input");
        errorBudget.innerText = "Pole powinno byc w zakresie od 3000 do 3000000 ";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;

}