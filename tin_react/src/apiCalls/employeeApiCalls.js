import {employeeDetailsList, employeeList} from "./employeeApiMockData";
const employeesBaseUrl = 'http://localhost:8080/api/employees'

export function getEmployeesApiCall() {
    return fetch(employeesBaseUrl);
}

export function getEmployeeByIdApiCall(empId) {
    const emp = employeeDetailsList.find(emp => emp._id === empId)
    return emp;
}