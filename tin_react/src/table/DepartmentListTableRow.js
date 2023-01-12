import {Link} from "react-router-dom";
import React from "react";
import {t} from "i18next";

export default function DepartmentListTableRow({ dept }) {

    return (
        <tr>
            <td>{dept.deptName}</td>
            <td>{dept.budget}</td>
            <td>
                <ul className="list-actions">
                    <li><Link to={`departments/details/${dept._id}`} className="list-actions-button-details">{t('list.actions.details')}</Link></li>
                    <li><Link to={`departments/edit/${dept._id}`} className="list-actions-button-edit">{t('list.actions.edit')}</Link></li>
                    <li><Link to={`departments/delete/${dept._id}`} className="list-actions-button-delete">{t('list.actions.delete')}</Link></li>
                </ul>
            </td>
        </tr>
    )
}