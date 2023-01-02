import {employeeDetailsList, employeeList} from "./employeeApiMockData";

export function getEmployeesApiCall() {
    return employeeList
}

export function getEmployeeByIdApiCall(empId) {
    const emp = employeeDetailsList.find(emp => emp._id === empId)
    return emp;
}