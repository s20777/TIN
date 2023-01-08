import {Link} from "react-router-dom";
import React from "react";

export default function DepartmentListTableRow({ dept }) {

    return (
        <tr>
            <td>{dept.deptName}</td>
            <td>{dept.budget}</td>
            <td>
                <ul className="list-actions">
                    <li><Link to={`departments/details/${dept._id}`} className="list-actions-button-details">Szczegóły</Link></li>
                    <li><Link to={`departments/edit/${dept._id}`} className="list-actions-button-edit">Edytuj</Link></li>
                    <li><Link to={`departments/delete/${dept._id}`} className="list-actions-button-delete">usun</Link></li>
                </ul>
            </td>
        </tr>
    )
}