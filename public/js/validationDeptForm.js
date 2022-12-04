function validateForm(event) {
    const deptNameInput = document.getElementById("deptName");
    const budgetInput = document.getElementById("budget");
  

    const errorDeptName = document.getElementById("errorDeptName");
    const errorBudget = document.getElementById("errorBudget");

    const errorsSummary = document.getElementById("errorsSummary");

    let valid = true;

    resetErrors([deptNameInput, budgetInput], [errorDeptName, errorBudget], errorsSummary);


    if (!checkRequired(deptNameInput.value)) {
        valid = false;
        deptNameInput.classList.add("error-input");
        errorDeptName.innerText = "Pole jest wymagane";
    }  else if (!onlyLetters(deptNameInput.value)) {
        valid = false;
        deptNameInput.classList.add("error-input");
        errorDeptName.innerText = "Pole powinno zaiwerac tylko litery";
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
    } else if (!checkNumberRange(budgetInput.value, 3000, 15000)) {
        valid = false;
        budgetInput.classList.add("error-input");
        errorBudget.innerText = "Pole powinno byc w zakresie od 3000 do 15000 ";
    }

    
    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;

}