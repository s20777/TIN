import React, { useState, useEffect } from "react";
import {getEmploymentsApiCall} from "../../apiCalls/employmentApiCalls";
import EmploymentListTable from "../../table/EmploymentListTable";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {t} from "i18next";


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
            <h2>List</h2>
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
                                    <li><Link to={`/employments/details/${employment._id}`} className="list-actions-button-details">{t('list.actions.details')}</Link></li>
                                    <li><Link to={`/employments/edit/${employment._id}`} className="list-actions-button-edit">{t('list.actions.edit')}</Link></li>
                                    <li><Link to={`/employments/delete/${employment._id}`} className="list-actions-button-delete">{t('list.actions.delete')}</Link></li>
                                </ul>
                            </td>

                        </tr>
                    ))
                }
                </tbody>
            </table>
            <p className="section-buttons">
                <a href="/employments/add" className="button-add">Nowe zatrudnienie</a>
            </p>
        </main>
    )
}