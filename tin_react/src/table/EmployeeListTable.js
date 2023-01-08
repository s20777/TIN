import EmployeeListTableRow from "./EmployeeListTableRow";

export default function EmployeeListTable(props){
    const { emps } = props;
    return (
        <>
            { emps.length > 0 &&

                <table className="table-list">
                    <thead>
                    <tr>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Email</th>
                        <th>Akcje</th>
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