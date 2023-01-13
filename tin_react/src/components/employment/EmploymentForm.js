import {useEffect, useState} from "react";
import {useHistory, useLocation, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {getDepartmentsApiCall, getEmploymentDetailsApiCalls} from "../../apiCalls/departmentApiCalls";
import {getEmployeesApiCall} from "../../apiCalls/employeeApiCalls";
import {
    addEmploymentApiCalls,
    getEmploymentsApiCall,
    updateEmploymentApiCalls
} from "../../apiCalls/employmentApiCalls";
import formMode from "../../helpers/formHelper";
import {isAuthenticated} from "../../helpers/authHelper";
import FormInput from "../../form/FormInput";
import FormButtons from "../../form/FormButtons";
import {t} from "i18next";

export default function EmploymentForm(){
    const location = useLocation();
    const { id } = useParams();
    const { t } = useTranslation();
    const { push } = useHistory();
    // const [id, setId] = useState(rentId);
    const [depId, setDepartmentId] = useState('');
    const [empId, setEmployeeId] = useState('');
    const [to_when, setToWhen] = useState('');
    const [endData, setEndData] = useState('');
    const [salary, setSalary] = useState('');
    const [startDate, setStart] = useState('');
    const [department_count, setDepartmentCount] = useState('');
    // const [userIdError, setUserIdError] = useState('');
    // const [gameIdError, setGameIdError] = useState('');
    const [toWhenError, setToWhenErrorError] = useState('');
    const [departmentCountError, setDepartmentCountError] = useState('');
    const [globalErrorMessage, setGlobalErrorMessage] = useState('');
    const [departments, setDepartments] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [employmentDetails, setEmploymentDetails] = useState({});

    const [loadingEmployee, setLoadingEmployee] = useState(true);
    const [loadingDepartment, setLoadingDepartment] = useState(true);
    const [loadingEmployment, setLoadingEmployment] = useState(true);

    useEffect(() => {
        getDepartmentsApiCall()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDepartments(data);
                setLoadingDepartment(false);
                getEmploymentDetailsApiCalls(id)
                    .then(res => res.json())
                    .then(d => {
                        console.log(data, d);
                        if(id){
                            setDepartmentId(data.find(g => g.id === d.dept_id).id);
                        }
                    })

                // setGameId(data.find(x => x.id === rentDetails.game_id).id);
            })
            .catch(error => {
                console.log(error);
                setLoadingDepartment(false);
            });


        getEmployeesApiCall()
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setEmployees(data);
                getEmploymentDetailsApiCalls(id)
                    .then(res => res.json())
                    .then(d => {
                        if(id){
                            setEmployeeId(data.find(u => u.id === d.emp_id).id);
                        }
                    })
            })
            .catch(error => {
                console.log(error);
            });

        if(id){
            getEmploymentDetailsApiCalls(id)
                .then(res => res.json())
                .then(data => {
                    setEmploymentDetails(data)
                    setToWhen(`${new Date(data?.to_when).getFullYear()}-${addZero(new Date(data.to_when).getMonth() + 1)}-${addZero(new Date(data.to_when).getDate())}`);
                })
        }

        if(id){
            getEmploymentDetailsApiCalls(id)
                .then(res => res.json())
                .then(data => {
                    setEmploymentDetails(data)
                    setStart(`${new Date(data?.start).getFullYear()}-${addZero(new Date(data.start).getMonth() + 1)}-${addZero(new Date(data.start).getDate())}`);
                })
        }


        const addZero = (i) => {
            return i < 10 ? `0${i}` : i;
        }


        // if (!rentDetails.id) {
        //     setGameId(games.find(x => x.id === rentDetails.game_id).id);
        // }
    }, []);



    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = "true"
        const rent = {emp_id: empId, dept_id: depId, salary: salary, "dateFrom": startDate,"dateTo": to_when };
        if(isValid){
            const currentFormMode = id ? formMode.EDIT : formMode.NEW;
            let promise;
            let response;
            if(currentFormMode === formMode.NEW){
                promise = addEmploymentApiCalls(rent);
            } else {
                console.log(rent);
                promise = updateEmploymentApiCalls(id, rent);
            }
            console.log(promise);
            if(promise){
                promise
                    .then(res => {
                        response = res;
                        if(response.status === 201 || response.status === 500){
                            return res.json();
                        }
                    })
                    .then(data => {
                        if(!response.ok && response.status === 500){
                            setGlobalErrorMessage('Jest blad w formularzu sprawdz dane');
                            console.log(data);
                        }else {
                            push({
                                pathname: "/employments",
                                state: {
                                    message: currentFormMode === formMode.NEW ? "Dodano wypozyczenie" : "Zaktualizowano wypozyczenie"
                                }
                            })
                        }
                    })
                    .catch(error => {
                        setGlobalErrorMessage(error);
                    })
            }
        }
    }

    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        if(name === 'emp_id'){
            setEmployeeId(value);
        }else {
            setDepartmentId(value);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        if(name === 'dateTo'){
            setToWhen(value);
        }else {
            setDepartmentCount(value);
        }
    }

    const handleChangeEndData = (event) => {
        const { name, value } = event.target;
        if(name === 'endDate'){
            setStart(value);
        }
    }


    const handleChangeSalary = (event) => {
        const { name, value } = event.target;
        if(name === 'salary'){
            setSalary(value);
        }
    }


    const pageTitle = (id ? formMode.EDIT : formMode.NEW) === formMode.NEW ? t('employments.new') : t('employments.edit');
    if(isAuthenticated()){
        return (
            <main>
                <h2>{pageTitle}</h2>
                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor='emp_id'>{ t('rentals.placeholders.form.chooseUser') }:</label>
                    {!id && <select name='emp_id' onChange={handleSelectChange} >
                        <option value="">{ t('rentals.placeholders.form.chooseUser') }</option>
                        {
                            employees.map(emp => (
                                <option key={emp._id} value={emp._id}>{emp.firstName} {emp.lastName}</option>
                            ))
                        }
                    </select>}

                    {
                        id && <select name='emp_id' onChange={handleSelectChange} >
                            <option value={employees.find(x => x.id === employmentDetails.emp_id)?.id}>{employees.find(x => x.id === employmentDetails.emp_id)?.firstName} {employees.find(x => x.id === employmentDetails.emp_id)?.lastName}</option>
                            {
                                employees.filter(x => x.id !== employmentDetails.emp_id).map(emp => (
                                    <option key={emp.id} value={emp._id}>{emp.firstName} {emp.lastName}</option>
                                ))
                            }
                        </select>
                    }

                    <label htmlFor='dept_id'>{ t('rentals.placeholders.form.chooseGame') }:</label>
                    {!id && <select name='dept_id' onChange={handleSelectChange} >
                        <option value="">{ t('rentals.placeholders.form.chooseGame') }</option>
                        {
                            departments.map(dept => (
                                <option key={dept.id} value={dept._id}>{dept.deptName}</option>
                            ))
                        }
                    </select>}
                    {
                        id && <select name='dept_id' onChange={handleSelectChange} >
                            <option value={departments.find(x => x.id === employmentDetails.dept_id)?.id}>{departments.find(x => x.id === employmentDetails.dept_id)?.deptName}</option>
                            {
                                departments.filter(x => x.id !== departments.dept_id).map(dept => (
                                    <option key={dept.id} value={dept._id}>{dept.deptName}</option>
                                ))
                            }
                        </select>
                    }

                    <FormInput type="date" label={ t('Date') } name="dateTo" value={to_when} onChange={handleChange}   />
                    <FormInput type="date" label={ t('EndDate') } name="endDate" value={startDate} onChange={handleChangeEndData}   />
                    <FormInput type="salary" label={ t('Salary') } name="salary" value={salary} onChange={handleChangeSalary}   />


                    <FormButtons mode={id ? formMode.EDIT : formMode.NEW} error={globalErrorMessage} cancelPath="/employments" />


                </form>
            </main>
        )
    }else {
        return (
            <main>
                <h2>{pageTitle}</h2>
                <p>{ t('auth.blocked') }</p>
            </main>
        )
    }
}