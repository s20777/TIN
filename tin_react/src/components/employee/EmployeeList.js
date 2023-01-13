import { useState, useEffect } from "react";
import {getEmployeesApiCall} from "../../apiCalls/employeeApiCalls";
import EmployeeListTable from "../../table/EmployeeListTable";
import {useLocation} from "react-router-dom";
import {t} from "i18next";

export default function EmployeeList() {
    const location = useLocation();
    const [emps, setEmps] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');


    useEffect(() => {
        getEmployeesApiCall()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEmps(data);
                setLoading(true);
            })
            .catch(error => {
                setError(error.message);
                setLoading(true);
            });

        const { state } = location;
        const notice = state && state.notice ? state.notice : '';
        setMessage(notice);


    }, []);
    return (
        <main>
            <h2>List</h2>
            <EmployeeListTable emps={emps} />
            <p className="section-buttons">
                <a href="/employees/add" className="button-add">{ t('emp.list.add') }</a>
            </p>

        </main>
    )
}