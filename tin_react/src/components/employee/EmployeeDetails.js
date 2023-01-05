// import React, {useEffect, useState} from 'react'
// import { Link, useParams } from 'react-router-dom'
// import {getEmployeeByIdApiCall } from '../../apiCalls/employeeApiCalls'
// import EmployeeDetailsData from "../../table/EmployeeDetailsData";
//
// class EmployeeDetails extends React.Component {
//     constructor(props) {
//         super(props)
//         let { empId } = props.match.params
//         this.state = {
//             empId: empId,
//             emp: null,
//             error: null,
//             isLoad: false
//         }
//     }
//     fetchEmployeeDetails = () => {
//         getEmployeeByIdApiCall(this.state.empId)
//             .then(res => res.json())
//             .then(
//                 (data) => {
//                     if (data.message) {
//                         this.setState({
//                             emp: null,
//                             message: data.message
//                     })
//                 } else {
//                     this.setState({
//                         emp: data,
//                         message: null
//                     })
//                     }
//                 },
//                 (error) => {
//                     this.setState({
//                         isLoaded: true,
//                         error
//                     })
//                 }
//
//             )
//     }
//
//     componentDidMount() {
//         this.fetchEmployeeDetails();
//     }
//
//     render() {
//         const {error, isLoaded, emp, message} = this.state
//         let content;
//
//         if (error) {
//             content = <p>Blad: {error.message}</p>
//         }  else if (message) {
//             content = <p>{message}</p>
//         } else {
//             content = <EmployeeDetailsData empData={emp}/>
//         }
//
//         return (
//             <main>
//                 <h2>Szczegóły pracownika</h2>
//                 {content}
//                 <div className="section-buttons">
//                     <Link to="/employees" className="button-add">Powrot</Link>
//                 </div>
//             </main>
//         )
//
//
//     }
//
//
//
//
//
//
//     // let { empId } = useParams()
//     // empId = parseInt(empId)
//     // const emp = getEmployeeByIdApiCall(empId)
//     //
//     // return (
//     //     <main>
//     //         <h2>Szczegóły pracownika</h2>
//     //         <p>Imię: {emp.firstName}</p>
//     //         <p>Nazwisko: {emp.lastName} </p>
//     //         <p>E-mail: {emp.email} </p>
//     //         <h2>Szczegóły zatrudnienia</h2>
//     //         <table className="table-list">
//     //             <thead>
//     //                 <tr>
//     //                     <th>Departament</th>
//     //                     <th>Pensja</th>
//     //                     <th>Data od</th>
//     //                     <th>Data do</th>
//     //                 </tr>
//     //             </thead>
//     //             <tbody>
//     //                 {emp.employments.map(
//     //                     employment =>
//     //                         <tr key={employment._id}>
//     //                             <td>{employment.department.name}</td>
//     //                             <td>{employment.salary}</td>
//     //                             <td>{employment.dateFrom ? getFormattedDate(employment.dateFrom) : ""}</td>
//     //                             <td>{employment.dateTo ? getFormattedDate(employment.dateTo) : ""}</td>
//     //                         </tr>
//     //                 )}
//     //             </tbody>
//     //         </table>
//     //         <div className="section-buttons">
//     //             <Link to="/employees" className="button-back">Powrót</Link>
//     //         </div>
//     //     </main>
//     // )
// }
// export default EmployeeDetails




import React, {useEffect, useState} from 'react'

import {getEmployeeByIdApiCall} from "../../apiCalls/employeeApiCalls";
import EmployeeDetailsData from "../../table/EmployeeDetailsData";
import EmployeeListTable from "../../table/EmployeeListTable";
import EmployeeListTableRow from "../../table/EmployeeListTableRow";
import {useParams} from "react-router-dom";

export default function EmployeeDetails() {
    const [emp, setEmp] = useState({});
    let { empId } = useParams();
    empId = parseInt(empId)




    useEffect(() => {
        getEmployeeByIdApiCall(empId)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEmp(data);

            })
            .catch(error => {
            });
    }, [empId]);

    return (
        <main>
            <h2>Imie: {emp.firstName}</h2>
            <h2>Nazwisko: {emp.lastName}</h2>
            <h2>Email:  {emp.email}</h2>
            <h2>Szczegoły zatrudnienia: </h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Departament</th>
                    <th>Pensja</th>
                    <th>Data od </th>
                    <th>Data do </th>
                </tr>
                </thead>
                <tbody></tbody>
            </table>

        </main>
    )

}
