import React, {useEffect, useState} from 'react'

import {getEmployeeByIdApiCall} from "../../apiCalls/employeeApiCalls";
import EmployeeDetailsData from "../../table/EmployeeDetailsData";
import EmployeeListTable from "../../table/EmployeeListTable";
import EmployeeListTableRow from "../../table/EmployeeListTableRow";
import {Link, useParams} from "react-router-dom";

export default function EmployeeDetails() {
    const [emp, setEmp] = useState({employments: []});
    let { empId } = useParams();
    empId = parseInt(empId)


    useEffect(() => {
        getEmployeeByIdApiCall(empId)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEmp(data);
            })
            .catch(error => {
            });
    }, [empId]);

    return (
        <main>
            <h2>Imie: {emp.firstName}</h2>
            <h2>Nazwisko: {emp.lastName}</h2>
            <h2>Email:  {emp.email}</h2>
            <h2>Szczegoły zatrudnienia: </h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Departament</th>
                    <th>Pensja</th>
                    <th>Data od </th>
                    <th>Data do </th>
                </tr>
                </thead>
                <tbody>
                {
                    emp.employments.map(employment => (
                        <tr key={employment._id}>
                            <td>{employment.department.deptName}</td>
                            <td>{employment.salary}</td>
                            <td>{employment.dateFrom}</td>
                            <td>{employment.dateTo}</td>
                        </tr>
           ) )
                }
                </tbody>
            </table>

        </main>
    )
}

// {
//     "_id": 3,
//     "salary": "3000.00",
//     "dateFrom": "2020-12-02",
//     "dateTo": null,
//     "emp_id": 1,
//     "dept_id": 2,
//     "createdAt": "2023-01-07T18:12:18.000Z",
//     "updatedAt": "2023-01-07T18:12:18.000Z",
//     "department": {
//     "_id": 2,
//         "deptName": "AUC",
//         "budget": "900000.00",
//         "createdAt": "2023-01-07T18:12:18.000Z",
//         "updatedAt": "2023-01-07T18:12:18.000Z"
// }
// }
