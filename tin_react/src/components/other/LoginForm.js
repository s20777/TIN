import React from "react";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

import { loginApiCalls } from "../../apiCalls/authApiCalls";
import { checkRequired } from "../../helpers/validationCommon";
import {formValidationKeys} from "../../helpers/formHelper";
import FormInput from "../../form/FormInput";
import FormButtons from "../../form/FormButtons";

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            },
            errors: {
                email: '',
                password: ''
            },
            error: '',
            message: '',
            prevPath: '',
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const user = { ...this.state.user };
        user[name] = value;

        const errorMessage = this.validateField(name, value);
        const errors = { ...this.state.errors };
        errors[name] = errorMessage

        this.setState({
            user: user,
            errors: errors
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validateForm();
        if(isValid){
            const user = this.state.user;
            let response;
            loginApiCalls(user)
                .then(res => {
                    response = res;
                    return response.json();
                })
                .then(data => {
                if(response.status === 200){
                    if(data.token){
                        const userString = JSON.stringify(data);
                        this.props.handleLogin(userString);
                        this.props.history.goBack();
                    }
                }else if(response.status === 401){
                    console.log(401);
                    this.setState({
                        message: data.message,
                    });
                }
            }).catch(error => {
                this.setState({
                    isLoaded: true,
                    error,
                });
            });
        }
    }


    validateField = (fieldName, fieldValue) => {
        let errorMessage = '';
        if(fieldName === 'email'){
            if(!checkRequired(fieldValue)){
                errorMessage = formValidationKeys.notEmpty
            }
        }

        if(fieldName === 'password'){
            if (!checkRequired(fieldValue)) {
                errorMessage = formValidationKeys.notEmpty
            }
        }

        return errorMessage;
    }


    validateForm = () => {
        const user = this.state.user;
        const errors = this.state.errors;
        for(const fieldName in user){
            const fieldValue = user[fieldName];
            const errorMessage = this.validateField(fieldName, fieldValue);
            errors[fieldName] = errorMessage;
        }
        this.setState({
            errors: errors
        });

        return !this.hasErrors();
    }

    hasErrors = () => {
        const errors = this.state.errors;
        for(const errorField in this.state.errors){
            if(errors[errorField].length > 0){
                return true;
            }
        }
        return false;
    }


    render() {
        const { t } = this.props;
        const errorsSummary = this.hasErrors() ? t('form.validation.message.formErrors') : ''
        const fetchError = this.state.error ? `${t('error')}: ${this.state.error.message}` : '';
        const globalErrorMessage = errorsSummary || fetchError || this.state.message;

        return (
            <main>
                <div id="login">
                    <h2>{t('auth.pageTitle')}</h2>
                    <form className="form" method="post" onSubmit={this.handleSubmit}>
                        <FormInput
                            name="email"
                            value={this.state.user.email}
                            error={this.state.errors.email}
                            label={t('emp.fields.email')}
                            onChange={this.handleChange}
                            type="text"
                        />
                        <FormInput
                            name="password"
                            value={this.state.user.password}
                            error={this.state.errors.password}
                            label={t('emp.fields.password')}
                            onChange={this.handleChange}
                            type="password"
                        />
                        <FormButtons
                            cancelPath={this.state.prevPath}
                            error={globalErrorMessage}
                            submitButtonLabel={t('form.actions.login')}
                        />
                    </form>
                </div>
            </main>
        );
    }

}

export default withRouter(withTranslation()(LoginForm));