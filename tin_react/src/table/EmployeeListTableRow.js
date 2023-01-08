import {Link} from "react-router-dom";
import React from "react";

export default function EmployeeListTableRow({ emp }) {

    return (
        <tr>
            <td>{emp.firstName}</td>
            <td>{emp.lastName}</td>
            <td>{emp.email}</td>
            <td>
                <ul className="list-actions">
                    <li><Link to={`employees/details/${emp._id}`} className="list-actions-button-details">Szczegóły</Link></li>
                    <li><Link to={`/employees/edit/${emp._id}`} className="list-actions-button-edit">Edytuj</Link></li>
                    <li><Link to={`/employees/delete/${emp._id}`} className="list-actions-button-delete">usun</Link></li>
                </ul>
            </td>
        </tr>
    )
}