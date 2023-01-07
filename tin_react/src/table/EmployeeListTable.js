import EmployeeListTableRow from "./EmployeeListTableRow";

export default function EmployeeListTable(props){
    const { emps } = props;
    return (
        <>
            { emps.length > 0 &&

                <table className="table-list">
                    <thead>
                    <tr>
                        <th>imie</th>
                        <th>nazwisko</th>
                        <th>email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        emps.map(emp => (
                            <EmployeeListTableRow key={emp._id} emp={emp}/>
                        ))
                    }
                    </tbody>
                </table>
            }
        </>
    )
}