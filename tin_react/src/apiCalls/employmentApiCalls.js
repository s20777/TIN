import {employmentDetailsList, employmentList} from "./employmentApiMockData";

const employmentBaseUrl = 'http://localhost:8080/api/employments'

export function getEmploymentsApiCall() {
    return fetch(employmentBaseUrl)
}

export function getEmploymentByIdApiCall(employmentId) {
    const emp = employmentDetailsList.find(employment => employment._id === employmentId)
    return emp;
}