import {Link} from "react-router-dom";

export default function EmployeeListTableRow({ emp }) {

    return (
        <tr>
            <td>{emp.firstName}</td>
            <td>{emp.lastName}</td>
            <td>{emp.email}</td>
            <td>
                <ul className="list-actions">
                    <li><Link to={`employees/details/${emp._id}`} className="list-actions-button-details">Szczegóły</Link></li>
                </ul>
            </td>
        </tr>
    )
}