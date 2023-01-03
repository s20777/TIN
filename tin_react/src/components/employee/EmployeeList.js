import React from 'react'
import {Link} from "react-router-dom";
import { getEmployeesApiCall} from "../../apiCalls/employeeApiCalls";


function EmployeeList() {
    const employeeList = getEmployeesApiCall()
    return (
        <main>
            <h2>Lista pracowników</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>E-mail</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map(
                        emp =>
                            <tr key={emp._id}>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
<td>
     <ul className="list-actions">
                                 <li>
                                    <Link to={`/employees/details/${emp._id}`} className="list-actions-button-details">Szczegóły</Link>
                                 </li>
                                 <li>
                                     <Link to={`/employees/edit/${emp._id}`} className="list-actions-button-edit">Edytuj</Link>
                                 </li>
                               <li>
                                    <Link to={`/employees/delete/${emp._id}`} className="list-actions-button-delete">Usuń</Link>
                                 </li>
                             </ul>
</td>
                            </tr>
                    )}
                </tbody>
            </table>
            <p className="section-buttons">
                <Link to="/employees/add" className="button-add">Dodaj nowego pracownika</Link>
            </p>
        </main>
    )
}

export default EmployeeList