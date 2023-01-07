import {Link} from "react-router-dom";

export default function DepartmentListTableRow({ dept }) {

    return (
        <tr>
            <td>{dept.deptName}</td>
            <td>{dept.budget}</td>
            <td>
                <ul className="list-actions">
                    <li><Link to={`departments/details/${dept._id}`} className="list-actions-button-details">Szczegóły</Link></li>
                </ul>
            </td>
        </tr>
    )
}