import React from 'react'
import {Link} from "react-router-dom";
import { getEmployeesApiCall} from "../../apiCalls/employeeApiCalls";
import EmployeeListTable from "../../table/EmployeeListTable";


class EmployeeList extends React.Component {
     constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoad: false,
            employees: []
        }
    }
    fetchEmployeeList = () => {
         getEmployeesApiCall()
             .then(res => res.json())
             .then(
                 (data) => {
                     this.setState({
                         isLoaded: true,
                         employees: data
                     });
                 },
                 (error) => {
                     this.setState({
                         isLoaded: true,
                         error
                     });
                 }
             )
    }

    componentDidMount() {
        this.fetchEmployeeList();
    }

    render() {
         const {error, isLoaded, employees} = this.state
        let content;

         if (error) {
             content = <p>Blad: {error.message}</p>
         } else if (!isLoaded) {
             content = <p>Ladowanie pracownikow...</p>
         } else {
             content = <EmployeeListTable empList={employees}/>
         }

         return (
             <main>
                 <h2>lista pracownikow</h2>
                 {content}
                 <p className="section-buttons">
                     <Link to="/employees/add" className="button-add">Dodaj nowego pracownika</Link>
                 </p>
             </main>
         )


    }


//     const employeeList = getEmployeesApiCall()
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
//                     {employeeList.map(
//                         emp =>
//                             <tr key={emp._id}>
//                                 <td>{emp.firstName}</td>
//                                 <td>{emp.lastName}</td>
//                                 <td>{emp.email}</td>
// <td>
//      <ul className="list-actions">
//                                  <li>
//                                     <Link to={`/employees/details/${emp._id}`} className="list-actions-button-details">Szczegóły</Link>
//                                  </li>
//                                  <li>
//                                      <Link to={`/employees/edit/${emp._id}`} className="list-actions-button-edit">Edytuj</Link>
//                                  </li>
//                                <li>
//                                     <Link to={`/employees/delete/${emp._id}`} className="list-actions-button-delete">Usuń</Link>
//                                  </li>
//                              </ul>
// </td>
//                             </tr>
//                     )}
//                 </tbody>
//             </table>
//             <p className="section-buttons">
//                 <Link to="/employees/add" className="button-add">Dodaj nowego pracownika</Link>
//             </p>
//         </main>
//     )
}

export default EmployeeList