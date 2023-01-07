import React from 'react';
import {getFormattedDate} from "../helpers/dateHelper";


function EmployeeDetailsData(props){
    const { emp } = props

    return (
        <React.Fragment>
            <p>Imie: {emp.firstName}</p>
            <p>Nazwisko: {emp.lastName}</p>
            <p>Email: {emp.email}</p>
            <h2>Szczegoly zatrudnienia</h2>
            <table className="table-list">
            <thead>
                <tr>
                    <th>Department: </th>
                    <th>Pensja: </th>
                    <th>Data od: </th>
                    <th>Data do: </th>
                </tr>
            </thead>

            <tbody>
            {
                emp.employments.map(
                    employment =>
                        <tr key={employment._id}>
                            <td>{employment.department.name}</td>
                            <td>{employment.salary}</td>
                            <td>{employment.dateFrom ? getFormattedDate(employment.dateFrom) : ""}</td>
                            <td>{employment.dateTo ? getFormattedDate(employment.dateTo) : ""}</td>
                        </tr>
                )
            }
            </tbody>
        </table>
        </React.Fragment>
    )
}

export default EmployeeDetailsData