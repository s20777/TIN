import React from "react";


class EmployeeForm extends React.Component {
    render() {
        return (
            <main>
                <h2>Nowy pracownik</h2>
                <label htmlFor="firstName">Imie:<abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="firstName" id="firstName" placeholder="2-60znakow" value=""/>
                <span id="errorFirstName" className="errors-text"/>
            </main>
        )
    }
}

export default EmployeeForm