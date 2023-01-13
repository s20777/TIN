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
            <h2>Nazwa departamentu: {dept.deptName}</h2>
            <h2>Budżet: {dept.budget}</h2>
            <h2>Szczegoły zatrudnienia: </h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Pracownik</th>
                    <th>Pensja</th>
                    <th>Data od </th>
                    <th>Data do </th>
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
                <a href="/departments" className="button-add">powrot</a>
            </p>

        </main>
    )

}
