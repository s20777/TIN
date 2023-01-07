import {employmentDetailsList, employmentList} from "./employmentApiMockData";

const employmentBaseUrl = 'http://localhost:8080/api/employments'

export function getEmploymentsApiCall() {
    return fetch(employmentBaseUrl)
}

export function getEmploymentByIdApiCall(employmentId) {
    const url = `${employmentBaseUrl}/1`;
    const promise = fetch(url);
    return promise
}
