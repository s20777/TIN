import EmployeeListTableRow from "./EmployeeListTableRow";
import DepartmentListTableRow from "./DepartmentListTableRow";
import {useTranslation} from "react-i18next";

export default function DepartmentListTable(props){
    const { depts } = props;
    const { t } = useTranslation();

    console.log(depts)
    return (
        <>
            { depts.length > 0 &&

                <table className="table-list">
                    <thead>
                    <tr>
                        <th>{ t('dept.fields.deptName') }</th>
                        <th>{ t('dept.fields.budget') } </th>
                        <th>{ t('list.actions.title') }</th>
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