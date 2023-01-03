import React from "react"
import { Link } from 'react-router-dom'
import { getEmploymentsApiCall } from '../../apiCalls/employmentApiCalls'

function EmploymentList() {
    const employmentList = getEmploymentsApiCall()

    return (
        <main>
            <h2>Lista zatrudnień</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Departament</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {employmentList.map(employment => (
                        <tr key={employment._id}>
                            <td>{employment.employee.firstName}</td>
                            <td>{employment.employee.lastName}</td>
                            <td>{employment.department.name}</td>
                            <td>
                                <ul className="list-actions">
                                    <li><Link to={`employments/details/${employment._id}`} className="list-actions-button-details">Szczegóły</Link></li>
                                    <li><Link to={`employments/edit/${employment._id}`} className="list-actions-button-edit">Edytuj</Link></li>
                                    <li><Link to={`employments/delete/${employment._id}`} className="list-actions-button-delete">Usuń</Link></li>
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="section-buttons">
                <Link to="/employments/add" className="button-add">Dodaj nowe zatrudnienie</Link>
            </p>
        </main>
    )
}

export default EmploymentList