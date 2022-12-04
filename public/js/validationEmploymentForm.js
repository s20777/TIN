function validateForm(event) {
    const emp_id = document.getElementById("emp_id");
    const dept_id = document.getElementById("dept_id");
    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");
    const salary = document.getElementById("salary");

    const errorEmp_id = document.getElementById("errorEmp_id");
    const errorDept_id = document.getElementById("errorDept_id");
    const errorStart = document.getElementById("errorStart");
    const errorFinish = document.getElementById("errorFinish");
    const errorBudget = document.getElementById("errorSalary");

    const errorsSummary = document.getElementById("errorsSummary");

    let valid = true;

    resetErrors([emp_id, dept_id, dateTo, salary], [errorEmp_id, errorDept_id, errorStart, errorFinish,errorBudget], errorsSummary);


    if (!checkRequired(emp_id.value) || emp_id.value == "--Wybierz pracownika--")
    {
        valid = false;
        emp_id.classList.add("error-input");
        errorEmp_id.innerText = "Pole jest wymagane";
    }

    if (!checkRequired(dept_id.value)) {
        valid = false;
        dept_id.classList.add("error-input");
        errorDept_id.innerText = "Pole jest wymagane";
    }

    if (!checkRequired(dateFrom.value)) {
        valid = false;
        dateFrom.classList.add("error-input");
        errorStart.innerText = "Pole jest wymagane";
    }


    if (!checkRequired(salary.value)) {
        valid = false;
        salary.classList.add("error-input");
        errorBudget.innerText = "Pole jest wymagane";
    } else if (!checkNumber(salary.value)) {
        valid = false;
        salary.classList.add("error-input");
        errorBudget.innerText = "Pole powinno byc liczbą";
    } else if (!checkNumberRange(salary.value, 3000, 15000)) {
        valid = false;
        salary.classList.add("error-input");
        errorBudget.innerText = "Pole powinno byc w zakresie od 3000 do 15000 ";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;

}