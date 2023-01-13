import React, {useEffect, useState} from 'react'

import {getEmployeeByIdApiCall} from "../../apiCalls/employeeApiCalls";
import EmployeeDetailsData from "../../table/EmployeeDetailsData";
import EmployeeListTable from "../../table/EmployeeListTable";
import EmployeeListTableRow from "../../table/EmployeeListTableRow";
import {Link, useParams} from "react-router-dom";
import {t} from "i18next";

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
            <h2>{ t('emp.fields.firstName') }: {emp.firstName}</h2>
            <h2>{ t('emp.fields.lastName') }: {emp.lastName}</h2>
            <h2>{ t('emp.fields.email') }:  {emp.email}</h2>
            <h2>{ t('list.actions.details') }: </h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>{ t('dept.fields.deptName') }</th>
                    <th>{ t('dept.fields.budget') }</th>
                    <th>{ t('dept.fields.startDate') }</th>
                    <th>{ t('dept.fields.finishDate') }</th>
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
            <p className="section-buttons">
                <a href="/employees" className="button-add">{ t('form.actions.return') }</a>
            </p>

        </main>
    )
}