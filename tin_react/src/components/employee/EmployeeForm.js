import React from 'react';
import formMode, {formValidationKeys} from "../../helpers/formHelper";
import {addEmployeeApiCalls, getEmployeeByIdApiCall, updateEmployeeApiCalls} from "../../apiCalls/employeeApiCalls";
import { checkRequired, checkTextLengthRange, checkEmail} from '../../helpers/validationCommon'
import {Redirect} from "react-router-dom";
import FormInput from "../../form/FormInput";
import FormButtons from "../../form/FormButtons";
import {t} from "i18next";


class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        const paramsEmpId = props.match.params.empId;
        const currentFormMode = paramsEmpId ? formMode.EDIT : formMode.NEW;

        console.log(currentFormMode);
        this.state = {
            empId: paramsEmpId,
            emp: {
                firstName: '',
                lastName: '',
                email: '',
            },
            errors: {
                firstName: '',
                lastName: '',
                email: '',
            },
            formMode: currentFormMode,
            redirect: false,
            error: null,
        }
    }

    fetchEmployeeDetails = () => {
        getEmployeeByIdApiCall(this.state.empId)
            .then(res => res.json())
            .then(
                (data) => {
                if(data.message) {
                    this.setState({
                        message: data.message,
                    })
                } else {
                    this.setState({
                        emp: data,
                        message: null
                    });
                }
                this.setState({
                    isLoaded: true,
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            })
    }

    componentDidMount() {
        const currentFormMode = this.state.formMode;
        if(currentFormMode === formMode.EDIT) {
            this.fetchEmployeeDetails();
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const emp = { ...this.state.emp };
        emp[name] = value;

        const errorMessage = this.validateField(name, value);
        const errors = { ...this.state.errors };
        errors[name] = errorMessage;

        this.setState({
            emp: emp,
            errors: errors,
        })

    }

    validateField = (fieldName, fieldValue) => {
        let errorMessage = '';
        if(fieldName === 'firstName') {
            if(!checkRequired(fieldValue)) {
                errorMessage = formValidationKeys.notEmpty
            } else if(!checkTextLengthRange(fieldValue, 2, 60)) {
                errorMessage = formValidationKeys.len_2_60
            }
        }

        if(fieldName === 'lastName') {
            if(!checkRequired(fieldValue)) {
                errorMessage = formValidationKeys.notEmpty
            } else if(!checkTextLengthRange(fieldValue, 2, 60)) {
                errorMessage = formValidationKeys.len_2_60
            }
        }

        if(fieldName === 'email') {
            if(!checkRequired(fieldValue)) {
                errorMessage = formValidationKeys.notEmpty
            } else if(!checkTextLengthRange(fieldValue, 2, 60)) {
                errorMessage = formValidationKeys.len_2_60
            } else if (!checkEmail(fieldValue)) {
                errorMessage = formValidationKeys.isEmail
            }
            return errorMessage
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validateForm()
        if (isValid) {
            const
                emp = this.state.emp,
                currentFormMode = this.state.formMode
            let promise;
            let response;
            if (currentFormMode === formMode.NEW) {
                console.log("emp" + emp)
                promise = addEmployeeApiCalls(emp)

            } else if (currentFormMode === formMode.EDIT) {
                console.log(emp)
                const empId = this.state.empId
                promise = updateEmployeeApiCalls(empId, emp)
            }
            if (promise) {
                promise
                    .then(
                        (data) => {
                            response = data
                            if (response.status === 201 || response.status === 500) {
                                return data.json()
                            }
                        })
                    .then(
                        (data) => {
                        if(!response.ok && response.status === 500) {
                            console.log(data);
                            for(const i in data){
                                const errorItem = data[i];
                                console.log(errorItem, i);
                                const errorMessage = errorItem.message;
                                const errorField = errorItem.path;
                                const errors = { ...this.state.errors };
                                errors[errorField] = errorMessage;
                                this.setState({
                                    errors: errors,
                                    error: null
                                });
                            }
                        } else {
                            this.setState({ redirect: true });
                        }
                    },
                    (error) => {
                        this.setState({ error })
                    })
            }
        }
    }

    validateForm = () => {
        const emp = this.state.emp;
        const errors = this.state.errors;
        for(const fieldName in emp) {
            const fieldValue = emp[fieldName];
            const errorMessage = this.validateField(fieldName, fieldValue);
            errors[fieldName] = errorMessage;
        }
        this.setState({
            errors
        });
        return !this.hasErrors();
    }

    hasErrors = () => {
        const errors = this.state.errors;
        for(const errorField in this.state.errors) {
            if(errors[errorField]?.length > 0) {
                return true
            }
        }
        return false;
    }



    render() {
        const { redirect } = this.state
        console.log("this state" + this.state)
        if (redirect) {
            const currentFormMode = this.state.formMode
            const notice = currentFormMode === formMode.NEW ? 'Pomyślnie dodano nowego pracownika' : 'Pomyślnie zaktualizowano nowego pracownika'
            return (
                <Redirect to={{
                    pathname: "/employees/"

                }} />
            )
        }

        const errorsSummary = this.hasErrors() ? 'Formularz zawiera błędy' : ''
        const fetchError = this.state.error ? `Błąd: ${this.state.error.message}` : ''
        const pageTitle = this.state.formMode === formMode.NEW ? t('emp.form.add.pageTitle') :  t('emp.form.edit.pageTitle')

        const globalErrorMessage = errorsSummary || fetchError || this.state.message

        return (
            <main>
                <h2>{pageTitle}</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        label={ t('emp.fields.firstName') }
                        required
                        error={this.state.errors.firstName}
                        name="firstName"
                        placeholder="2-60 znaków"
                        onChange={this.handleChange}
                        value={this.state.emp.firstName}
                    />
                    <FormInput
                        type="text"
                        label={ t('emp.fields.lastName') }
                        required
                        error={this.state.errors.lastName}
                        name="lastName"
                        placeholder="2-60 znaków"
                        onChange={this.handleChange}
                        value={this.state.emp.lastName}
                    />
                    <FormInput
                        type="text"
                        label={ t('emp.fields.email') }
                        required
                        error={this.state.errors.email}
                        name="email"
                        placeholder="np. nazwa@domena.pl"
                        onChange={this.handleChange}
                        value={this.state.emp.email}
                    />
                    <FormButtons
                        formMode={this.state.formMode}
                        error={globalErrorMessage}
                        cancelPath="/employees"
                    />
                </form>
            </main >
        )
    }
}

export default EmployeeForm;