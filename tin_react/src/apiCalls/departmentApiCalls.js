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

export function addDepartmentApiCalls(dept) {
    console.log("dept: " +  dept)

    const options = {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dept),
    }

    const promise = fetch(departmentBaseUrl, options);
    return promise;
}

export function updateDepartmentApiCalls(deptId, dept) {
    const url = `${departmentBaseUrl}/${deptId}`
    const deptString = JSON.stringify({
        deptName: dept.deptName,
        budget: dept.budget
    })
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: deptString
    }

    const promise = fetch(url, options);
    return promise;
}