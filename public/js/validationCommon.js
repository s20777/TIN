function resetErrors(inputs, errorTexts, errorInfo) {
    for (let i=0; i<inputs.length; i++) {
        inputs[i].classList.remove("error-input");
    }
    for (let i=0; i<errorTexts.length; i++) {
        errorTexts[i].innerText = "";
    }
    errorInfo.innerText = "";
}

function checkTextLengthRange(value, min, max) {
    if (!value) {
        return false;
    }

    value = value.toString().trim();
    const length = value.length;
    if (max && length > max) {
        return false;
    }
    if (min && length < min) {
        return false;
    }
    return true;
}

function checkRequired(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();

    if (value === "") {
        return false;
    }

    return true;
}

function checkTextLengthRange(value, min, max) {
    if (!value) {
        return false;
    }

    value = value.toString().trim();
    const length = value.length;

    if (max && length > max) {
        return false;
    }

    if (min && length < min) {
        return false;
    }

    return true;
}

function checkEmail(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return re.test(value);
}

function checkNumber(value) {
    if (!value) {
        return false;
    }

    if (isNaN(value)) {
        return false;
    }

    return true;
}


function checkNumberRange(value, min, max) {
    if (!value) {
        return false;
    }

    if (isNaN(value)) {
        return false;
    }

    value = parseFloat(value);
    
    if (value < min) {
        return false;
    }

    if (value > min) {
        return false;
    }

    return true;
}


