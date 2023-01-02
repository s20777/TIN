import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getEmployeeByIdApiCall } from '../../apiCalls/employeeApiCalls'
import { getFormattedDate } from '../../helpers/dateHelper'

function EmployeeDetails() {
    let { empId } = useParams()
    empId = parseInt(empId)
    const emp = getEmployeeByIdApiCall(empId)

    return (
        <main>
            <h2>Szczegóły pracownika</h2>
            <p>Imię: {emp.firstName}</p>
            <p>Nazwisko: {emp.lastName} </p>
            <p>E-mail: {emp.email} </p>
            <h2>Szczegóły zatrudnienia</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Departament</th>
                        <th>Pensja</th>
                        <th>Data od</th>
                        <th>Data do</th>
                    </tr>
                </thead>
                <tbody>
                    {emp.employments.map(
                        employment =>
                            <tr key={employment._id}>
                                <td>{employment.department.name}</td>
                                <td>{employment.salary}</td>
                                <td>{employment.dateFrom ? getFormattedDate(employment.dateFrom) : ""}</td>
                                <td>{employment.dateTo ? getFormattedDate(employment.dateTo) : ""}</td>
                            </tr>
                    )}
                </tbody>
            </table>
            <div className="section-buttons">
                <Link to="/employees" className="button-back">Powrót</Link>
            </div>
        </main>
    )
}
export default EmployeeDetails