import React from 'react'
import { Link } from 'react-router-dom'
import { getEmployeesApiCall } from '../../apiCalls/employeeApiCalls'
import { getDepartmentsApiCall } from '../../apiCalls/departmentApiCalls'

class EmploymentForm extends React.Component {
    render() {
        const allEmps = getEmployeesApiCall()
        const allDepts = getDepartmentsApiCall()

        return (
            <main>
                <h2>Nowe zatrudenienie</h2>
                <form className="form">
                    <label htmlFor="employee">Pracownik: <abbr title="required" aria-label="required">*</abbr></label>
                    <select id="employee" name="empId" required>
                        <option value="">--- Wybierz pracownika ---</option>
                        {allEmps.map(emp =>
                            (<option key={emp._id} value={emp._id} label={emp.firstName + " " + emp.lastName}></option>)
                        )}
                    </select>
                    <span id="errorEmployee" className="errors-text"></span>
                    <label htmlFor="department">Departament: <abbr title="required" aria-label="required">*</abbr></label>
                    <select id="department" name="deptId" required>
                        <option value="">--- Wybierz departament ---</option>
                        {allDepts.map(dept =>
                            (<option key={dept._id} value={dept._id} label={dept.name}></option>)
                        )}
                    </select>
                    <span id="errorDepartment" className="errors-text"></span>
                    <label htmlFor="salary">Pensja</label>
                    <input type="number" name="salary" value="" id="salary" placeholder="2000 - 1000000" />
                    <span id="errorSalary" className="errors-text"></span>
                    <label htmlFor="dateFrom">Data od</label>
                    <input type="date" name="dateFrom" value="" id="dateFrom" />
                    <span id="errorDateFrom" className="errors-text"></span>
                    <label htmlFor="dateTo">Data do</label>
                    <input type="date" name="dateTo" value="" id="dateTo" />
                    <span id="errorDateTo" className="errors-text"></span>
                    <div className="form-buttons">
                        <p id="errorsSummary" className="errors-text"></p>
                        <input className="form-button-submit" type="submit" value="Dodaj" />
                        <Link to="/employments" className="form-button-cancel">Anuluj</Link>
                    </div>
                </form>
            </main>
        )
    }
}

export default EmploymentForm