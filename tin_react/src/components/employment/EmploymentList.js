import React, { useState, useEffect } from "react";
import {getEmploymentsApiCall} from "../../apiCalls/employmentApiCalls";
import EmploymentListTable from "../../table/EmploymentListTable";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";


export default function EmploymentList() {
    const [employments, setEmployments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');
    const { t } = useTranslation();



    useEffect(() => {
        getEmploymentsApiCall()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEmployments(data);
                setLoading(true);
            })
            .catch(error => {
                setError(error.message);
                setLoading(true);
            });


    }, []);
    return (
        <main>
            <table className="table-list">
                <thead>
                <tr>
                    <th>{ t('emps.fields.employee') }</th>
                    <th>{ t('emps.fields.department') }</th>
                    <th>{ t('list.actions.title') }</th>
                </tr>
                </thead>
                <tbody>
                {
                    employments.map(employment => (
                        <tr key={employment._id}>
                            <td>{employment.employee.firstName} {employment.employee.lastName}</td>
                            <td>{employment.department.deptName}</td>
                            <td>
                                <ul className="list-actions">
                                    <li><Link to={`/employments/details/${employment._id}`} className="list-actions-button-details">Szczegoly</Link></li>
                                    <li><Link to={`/employments/edit/${employment._id}`} className="list-actions-button-edit">Edytuj</Link></li>
                                    <li><Link to={`/employments/delete/${employment._id}`} className="list-actions-button-delete">usun</Link></li>
                                </ul>
                            </td>

                        </tr>
                    ))
                }
                </tbody>
            </table>
        </main>
    )
}