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


import {useParams} from "react-router-dom";
import {getDepartmentByIdApiCall} from "../../apiCalls/departmentApiCalls";

export default function DepartmentDetails() {
    const [dept, setDept] = useState({});
    let { deptId } = useParams();
    deptId = parseInt(deptId)


    useEffect(() => {
        getDepartmentByIdApiCall(deptId)
            .then(res => res.json())
            .then(data => {
                setDept(data);
            })
            .catch(error => {
            });
    }, []);

    return (
        <main>
            <h2>Nazwa departamentu: {dept.deptName}</h2>
            <h2>Budżet: {dept.budget}</h2>
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
                <tbody>
                </tbody>
            </table>

        </main>
    )

}
