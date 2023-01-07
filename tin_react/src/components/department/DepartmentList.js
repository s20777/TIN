import { useState, useEffect } from "react";
import {getEmployeesApiCall} from "../../apiCalls/employeeApiCalls";
import DepartmentListTable from "../../table/DepartmentListTable";
import {getDepartmentsApiCall} from "../../apiCalls/departmentApiCalls";

export default function DepartmentList() {
    const [depts, setDepts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');


    useEffect(() => {
        getDepartmentsApiCall()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDepts(data);
                setLoading(true);
            })
            .catch(error => {
                setError(error.message);
                setLoading(true);
            });


    }, []);
    return (
        <main>
            <h2>Lista</h2>
            <DepartmentListTable depts={depts} />
        </main>
    )
}