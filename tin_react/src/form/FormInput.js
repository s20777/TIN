import {getValidationErrorKeys} from "../helpers/formHelper";
import {useTransition} from "react";

function FormInput(props) {

    const error = props.error
    const errorKey = getValidationErrorKeys(error)
    // const {t} = useTransition()
    // const translatedErrorMessage = t(errorKey)

    const className = props.error === '' ? '' : 'error-input';
    const name = props.name
    const errorSpanId = 'error'+name[0].toUpperCase() + name.slice(1);


    return (
        <>
            <label htmlFor={props.name}>
                {props.label} :
                {props.required && <abbr title="required" aria-label="required">*</abbr> }
            </label>
            <input
                type={props.type}
                className={className}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} />
            <span id={errorSpanId} className="errors-text">{error}</span>
        </>
    )
}

export default FormInput