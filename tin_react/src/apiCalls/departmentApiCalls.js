import {departamentList} from "./departmentApiMockData";

const departmentBaseUrl = 'http://localhost:8080/api/departments'


export function getDepartmentsApiCall() {
    return fetch(departmentBaseUrl);
}

export function getDepartmentByIdApiCall(deptId) {
    const url = `${departmentBaseUrl}/${deptId}`;
    const promise = fetch(url);
    return promise;
}