import {employmentDetailsList, employmentList} from "./employmentApiMockData";

const employmentBaseUrl = 'http://localhost:8080/api/employments'

export function getEmploymentsApiCall() {
    return fetch(employmentBaseUrl)
}



export function getEmploymentByIdApiCall(employmentId) {
    const url = `${employmentBaseUrl}/${employmentId}`;
    const promise = fetch(url);
    return promise
}

export function addEmploymentApiCalls(rent) {
    const rentString = JSON.stringify(rent);
    console.log(rentString);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: rentString,
    }
    return fetch(employmentBaseUrl, options);
}

export function updateEmploymentApiCalls(id, employment) {
    const rentString = JSON.stringify({ id, emp_id: employment.emp_id, dept_id: employment.dept_id, to_when: employment.to_when, department_count: employment.department_count });
    console.log(id, JSON.parse(rentString));
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: rentString,
    }
    return fetch(employmentBaseUrl + "/" + id, options);
}
