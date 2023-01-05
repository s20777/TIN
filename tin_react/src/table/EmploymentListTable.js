import React from 'react';
import EmployeeListTableRow from "./EmployeeListTableRow";


function EmploymentListTable(props){
    const employments  = props.employmentsList

    return (
        <table className="table-list">
            <thead>
            <tr>
                <th>imie: </th>
                <th>nazwisko: </th>
                <th>departament: </th>
                <th>akcje</th>
            </tr>
            </thead>
            <tbody>
            {
                employments.map(employment => (
                    <EmployeeListTableRow employmentData={employment} key={employment._id} />
                ))
            }
            </tbody>
        </table>
    )
}
export default EmploymentListTable