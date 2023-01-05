const employeesBaseUrl = 'http://localhost:8080/api/employees'

export function getEmployeesApiCall() {
    return fetch(employeesBaseUrl);
}

export function getEmployeeByIdApiCall(empId) {
    const url = `${employeesBaseUrl}/${empId}`;
    const promise = fetch(url);
    return promise;
}