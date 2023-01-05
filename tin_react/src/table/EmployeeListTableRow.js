// import React from 'react';
// import { Link } from "react-router-dom";
//
// function EmployeeListTableRow(props) {
//     const emp = props.empData
//     console.log(emp)
//     return (
//         <tr>
//             <td>{emp.firstName}</td>
//             <td>{emp.lastName}</td>
//             <td>{emp.email}</td>
//             <td>
//                 <ul className="list-actions">
//                     <li><Link to={`/employees/details/${emp._id}`} className="list-actions-button-details"></Link></li>
//                     <li><Link to={`/employees/edit/${emp._id}`} className="list-actions-button-details"></Link></li>
//                     <li><Link to={`/employees/delete/${emp._id}`} className="list-actions-button-details"></Link></li>
//                 </ul>
//             </td>
//         </tr>
//     )
// }
//
// export default EmployeeListTableRow