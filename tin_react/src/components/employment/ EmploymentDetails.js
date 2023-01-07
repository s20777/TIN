import React, { useState, useEffect } from "react";
import {getEmploymentByIdApiCall, getEmploymentsApiCall} from "../../apiCalls/employmentApiCalls";
import EmploymentListTable from "../../table/EmploymentListTable";
import {Link, useParams} from "react-router-dom";


export default function EmploymentDetails() {
    const [employments, setEmployments] = useState({});
    let { employmentId } = useParams();
    employmentId = parseInt(employmentId)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');


    useEffect(() => {
        getEmploymentByIdApiCall()
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
                    <th>Pracownik</th>
                    <th>Departament</th>
                    <th>Akcje</th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </main>
    )
}