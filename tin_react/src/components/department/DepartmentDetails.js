import React, {useEffect, useState} from 'react'


import {useParams} from "react-router-dom";
import {getDepartmentByIdApiCall} from "../../apiCalls/departmentApiCalls";
import {t} from "i18next";

export default function DepartmentDetails() {
    const [dept, setDept] = useState({employments: []});
    let { deptId } = useParams();
    deptId = parseInt(deptId)


    useEffect(() => {
        getDepartmentByIdApiCall(deptId)
            .then(res => res.json())
            .then(data => {
                console.log("department" + data);
                setDept(data);
            })
            .catch(error => {
            });
    }, [deptId]);

    return (
        <main>
            <h2>{ t('dept.fields.deptName') }: {dept.deptName}</h2>
            <h2>{ t('dept.fields.budget') }: {dept.budget}</h2>
            <h2>{ t('list.actions.details') }: </h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>{ t('emps.fields.employee') }</th>
                    <th>{ t('emp.fields.salary') }</th>
                    <th>{ t('dept.fields.startDate') }</th>
                    <th>{ t('dept.fields.finishDate') }</th>
                </tr>
                </thead>
                <tbody>
                {
                    dept.employments.map(employment => (
                        <tr key={employment._id}>
                            <td>{employment.employee.firstName} {employment.employee.lastName}</td>
                            <td>{employment.salary}</td>
                            <td>{employment.dateFrom}</td>
                            <td>{employment.dateTo}</td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
            <p className="section-buttons">
                <a href="/departments" className="button-add">{ t('form.actions.return') }</a>
            </p>

        </main>
    )

}
