const employeesBaseUrl = 'http://localhost:8080/api/employees'

export function getEmployeesApiCall() {
    return fetch(employeesBaseUrl);
}

export function getEmployeeByIdApiCall(empId) {
    const url = `${employeesBaseUrl}/${empId}`;
    const promise = fetch(url);
    return promise;
}

export function addEmployeeApiCalls(emp) {
    console.log("emp: " +  emp)
    const empString = JSON.stringify(emp);


    const options = {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(emp),
    }

    const promise = fetch(employeesBaseUrl, options);
    return promise;
}


export function updateEmployeeApiCalls(empId, emp) {
    const url = `${employeesBaseUrl}/${empId}`
    const empString = JSON.stringify({
        firstName: emp.firstName,
        lastName: emp.lastName,
        email: emp.email
    })
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: empString
    }

    const promise = fetch(url, options);
    return promise;
}

