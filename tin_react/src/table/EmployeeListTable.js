import React from 'react';
import EmployeeListTableRow from "./EmployeeListTableRow";


function EmployeeListTable(props){
    const employees  = props.empList

    return (
        <table className="table-list">
        <thead>
            <tr>
                <th>imie: </th>
                <th>naziwsko: </th>
                <th>email: </th>
                <th>akcje</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map(emp => (
                    <EmployeeListTableRow empData={emp} key={emp._id} />
                ))
            }
        </tbody>
    </table>
    )
}
export default EmployeeListTable