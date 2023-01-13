import React from 'react';
import formMode from "../../helpers/formHelper";
import { checkRequired, checkTextLengthRange, checkEmail} from '../../helpers/validationCommon'
import {Redirect} from "react-router-dom";
import FormInput from "../../form/FormInput";
import FormButtons from "../../form/FormButtons";
import {
    addDepartmentApiCalls,
    getDepartmentByIdApiCall,
    updateDepartmentApiCalls
} from "../../apiCalls/departmentApiCalls";
import {t} from "i18next";


class DepartmentForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        const paramsDeptId = props.match.params.deptId;
        const currentFormMode = paramsDeptId ? formMode.EDIT : formMode.NEW;

        console.log(currentFormMode);
        this.state = {
            deptId: paramsDeptId,
            dept: {
                deptName: '',
                budget: ''
            },
            errors: {
                deptName: '',
                budget: ''
            },
            formMode: currentFormMode,
            redirect: false,
            error: null,
        }
    }

    fetchDepartmentDetails = () => {
        getDepartmentByIdApiCall(this.state.deptId)
            .then(res => res.json())
            .then(
                (data) => {
                if(data.message) {
                    this.setState({
                        message: data.message,
                    })
                } else {
                    this.setState({
                        dept: data,
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
            this.fetchDepartmentDetails();
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const dept = { ...this.state.dept };
        dept[name] = value;

        const errorMessage = this.validateField(name, value);
        const errors = { ...this.state.errors };
        errors[name] = errorMessage;

        this.setState({
            dept: dept,
            errors: errors,
        })

    }

    validateField = (fieldName, fieldValue) => {
        let errorMessage = '';
        if(fieldName === 'deptName') {
            if(!checkRequired(fieldValue)) {
                errorMessage = 'Pole wymagane';
            } else if(!checkTextLengthRange(fieldValue, 2, 60)) {
                errorMessage = 'Pole powinno byc od 2 do 60 znakow';
            }
        }

        if(fieldName === 'budget') {
            if(!checkRequired(fieldValue)) {
                errorMessage = 'Pole wymagane';
            } else if(!checkTextLengthRange(fieldValue, 2, 60)) {
                errorMessage = 'Pole powinno byc od 2 do 60 znakow';
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validateForm()
        if (isValid) {
            const
                dept = this.state.dept,
                currentFormMode = this.state.formMode
            let promise;
            let response;
            if (currentFormMode === formMode.NEW) {
                promise = addDepartmentApiCalls(dept)

            } else if (currentFormMode === formMode.EDIT) {
                console.log(dept)
                const deptId = this.state.deptId
                promise = updateDepartmentApiCalls(deptId, dept)
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
        const dept = this.state.dept;
        const errors = this.state.errors;
        for(const fieldName in dept) {
            const fieldValue = dept[fieldName];
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
            const notice = currentFormMode === formMode.NEW ? 'Pomyślnie dodano nowy departament' : 'Pomyślnie zaktualizowano nowy departament'
            return (
                <Redirect to={{
                    pathname: "/departments/"

                }} />
            )
        }

        const errorsSummary = this.hasErrors() ? 'Formularz zawiera błędy ' : ''
        const fetchError = this.state.error ? `Błąd : ${this.state.error.message}` : ''
        const pageTitle = this.state.formMode === formMode.NEW ? t('dept.list.newDepartment') : t('dept.list.editDepartment')

        const globalErrorMessage = errorsSummary || fetchError || this.state.message

        return (
            <main>
                <h2>{pageTitle}</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        label={ t('dept.fields.deptName') }
                        required
                        error={this.state.errors.deptName}
                        name="deptName"
                        placeholder="2-60 znaków"
                        onChange={this.handleChange}
                        value={this.state.dept.deptName}
                    />
                    <FormInput
                        type="text"
                        label={ t('dept.fields.budget') }
                        required
                        error={this.state.errors.budget}
                        name="budget"
                        placeholder="2-60 znaków"
                        onChange={this.handleChange}
                        value={this.state.dept.budget}
                    />
                    <FormButtons
                        formMode={this.state.formMode}
                        error={globalErrorMessage}
                        cancelPath="/departments"
                    />
                </form>
            </main >
        )
    }
}

export default DepartmentForm;