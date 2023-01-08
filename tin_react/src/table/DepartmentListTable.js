import EmployeeListTableRow from "./EmployeeListTableRow";
import DepartmentListTableRow from "./DepartmentListTableRow";

export default function DepartmentListTable(props){
    const { depts } = props;
    console.log(depts)
    return (
        <>
            { depts.length > 0 &&

                <table className="table-list">
                    <thead>
                    <tr>
                        <th>Nazwa departamentu</th>
                        <th>Budzet </th>
                        <th>Akcje</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        depts.map(dept => (
                            <DepartmentListTableRow key={dept._id} dept={dept}/>
                        ))
                    }
                    </tbody>
                </table>
            }
        </>
    )
}