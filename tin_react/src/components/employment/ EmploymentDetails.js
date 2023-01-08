import React, { useState, useEffect } from "react";
import {getEmploymentByIdApiCall, getEmploymentsApiCall} from "../../apiCalls/employmentApiCalls";
import EmploymentListTable from "../../table/EmploymentListTable";
import {Link, useParams} from "react-router-dom";


export default function EmploymentDetails() {
    const [emps, setEmployments] = useState({});
    let { employmentId } = useParams();
    employmentId = parseInt(employmentId)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');


    useEffect(() => {
        getEmploymentByIdApiCall(employmentId)
            .then(res => res.json())
            .then(data => {
                console.log("employment" + data);
                setEmployments(data);
            })
            .catch(error => {
                setError(error.message);
                setLoading(true);
            });
    }, [employmentId]);

    return (
        <main>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Pracownik </th>
                    <th>Departament </th>
                    <th>Start </th>
                    <th>Koniec </th>
                    <th>Akcje</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{emps.employee ? emps.employee.firstName: '-'} {emps.employee ? emps.employee.lastName : '-'}</td>
                    <td>{emps.department ? emps.department.deptName: '-'}</td>
                    <td>{emps.dateFrom ? emps.dateFrom : '-'}</td>
                    <td>{emps.dateTo ? emps.dateTo : '-'}</td>
                </tr>
                </tbody>
            </table>
        </main>
    )
}