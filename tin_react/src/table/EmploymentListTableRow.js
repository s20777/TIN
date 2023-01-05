// import React from 'react';
// import { Link } from "react-router-dom";
//
// function EmploymentListTableRow(props) {
//     const employment = props.employmentData
//     console.log(employment)
//     return (
//         <tr>
//             <td>{employment.employee.firstName}</td>
//             <td>{employment.employee.lastName}</td>
//             <td>{employment.department.name}</td>
//             <td>
//                 <ul className="list-actions">
//                     <li><Link to={`/employment/details/${employment._id}`} className="list-actions-button-details">Szczegoly</Link></li>
//                     <li><Link to={`/employment/edit/${employment._id}`} className="list-actions-button-details">Edytuj</Link></li>
//                     <li><Link to={`/employment/delete/${employment._id}`} className="list-actions-button-details">usun</Link></li>
//                 </ul>
//             </td>
//         </tr>
//     )
// }
//
// export default EmploymentListTableRow