import EmployeeListTableRow from "./EmployeeListTableRow";
import {useTranslation} from "react-i18next";

export default function EmployeeListTable(props){
    const { emps } = props;
    const { t } = useTranslation();


    return (
        <>
            { emps.length > 0 &&

                <table className="table-list">
                    <thead>
                    <tr>
                        <th>{ t('emp.fields.firstName') }</th>
                        <th>{ t('emp.fields.lastName') }</th>
                        <th>{ t('emp.fields.email') }</th>
                        <th>{ t('list.actions.title') }</th>
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