import {Link, useHistory} from "react-router-dom";
import React from "react";
import {getCurrentUser, isAuthenticated} from "../helpers/authHelper";
import {t} from "i18next";
import {useTranslation} from "react-i18next";


export default function EmployeeListTableRow({ emp }) {
    const { t } = useTranslation();
    const history = useHistory();

    return (
        <tr>

            <td>{emp.firstName}</td>
            <td>{emp.lastName}</td>
            <td>{emp.email}</td>

            {isAuthenticated() &&
                <td>
                    <ul className="list-actions">
                        <li><Link to={`employees/details/${emp._id}`} className="list-actions-button-details">{t('list.actions.details')}</Link></li>
                        <li><Link to={`/employees/edit/${emp._id}`} className="list-actions-button-edit">{t('list.actions.edit')}</Link></li>
                        <li><Link to={`/employees/delete/${emp._id}`} className="list-actions-button-delete">{t('list.actions.delete')}</Link>
                        </li>
                    </ul>
                </td>
            }
        </tr>


    )
}