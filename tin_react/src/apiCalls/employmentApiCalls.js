import {employmentDetailsList, employmentList} from "./employmentApiMockData";

export function getEmploymentsApiCall() {
    return employmentList;
}

export function getEmploymentByIdApiCall(employmentId) {
    const emp = employmentDetailsList.find(employment => employment._id === employmentId)
    return emp;
}