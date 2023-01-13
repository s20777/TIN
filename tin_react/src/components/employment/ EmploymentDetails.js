import React, { useState, useEffect } from "react";
import {getEmploymentByIdApiCall, getEmploymentsApiCall} from "../../apiCalls/employmentApiCalls";
import EmploymentListTable from "../../table/EmploymentListTable";
import {Link, useParams} from "react-router-dom";
import {t} from "i18next";


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
                    <th>{ t('emps.fields.employee') }</th>
                    <th>{ t('emps.fields.department') }</th>
                    <th>{ t('emps.fields.startDate') }</th>
                    <th>{ t('emps.fields.finishDate') }</th>
                    <th>{ t('emps.fields.salary') }</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{emps.employee ? emps.employee.firstName: '-'} {emps.employee ? emps.employee.lastName : '-'}</td>
                    <td>{emps.department ? emps.department.deptName: '-'}</td>
                    <td>{emps.dateFrom ? emps.dateFrom : '-'}</td>
                    <td>{emps.dateTo ? emps.dateTo : '-'}</td>
                    <td>{emps.salary ? emps.salary : '-'}</td>
                </tr>
                </tbody>
            </table>
            <p className="section-buttons">
                <a href="/employments" className="button-add">{ t('form.actions.return') }</a>
            </p>
        </main>
    )
}