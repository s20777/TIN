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
                        <th>nazwa departamentu</th>
                        <th>zakres</th>
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