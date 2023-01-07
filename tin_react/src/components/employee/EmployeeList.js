import { useState, useEffect } from "react";
import {getEmployeesApiCall} from "../../apiCalls/employeeApiCalls";
import EmployeeListTable from "../../table/EmployeeListTable";

export default function EmployeeList() {
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


    }, []);
    return (
        <main>
            <h2>Lista</h2>
            <EmployeeListTable emps={emps} />
        </main>
    )
}