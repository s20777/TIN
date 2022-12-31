// import React from 'react'
// import { Link } from "react-router-dom";
//
// function EmployeeList() {
//     return (
//         <main>
//             <h2>Lista pracowników</h2>
//             <table className="table-list">
//                 <thead>
//                     <tr>
//                         <th>Imię</th>
//                         <th>Nazwisko</th>
//                         <th>E-mail</th>
//                         <th>Akcje</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Jan</td>
//                         <td>Kowalski</td>
//                         <td>jan.kowalski@acme.com</td>
//                         <td>
//                             <ul className="list-actions">
//                                 <li>
//                                     <Link to="/employees/details/1" className="list-actions-button-details">Szczegóły</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/employees/edit/1" className="list-actions-button-edit">Edytuj</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/employees/delete/1" className="list-actions-button-delete">Usuń</Link>
//                                 </li>
//                             </ul>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>Adam</td>
//                         <td>Nowak</td>
//                         <td>adam.nowak@acme.com</td>
//                         <td>
//                                                        <ul className="list-actions">
//                                 <li>
//                                     <Link to="/employees/details/1" className="list-actions-button-details">Szczegóły</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/employees/edit/1" className="list-actions-button-edit">Edytuj</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/employees/delete/1" className="list-actions-button-delete">Usuń</Link>
//                                 </li>
//                             </ul>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//             <p className="section-buttons">
//                 <Link to="/employees/add" className="button-add">Dodaj nowego pracownika</Link>
//             </p>
//         </main>
//     )
// }
//
// export default EmployeeList