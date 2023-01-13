import formMode from "../helpers/formHelper";
import {Link} from "react-router-dom";
import {t} from "i18next";

export default function FormButtons(props) {
    const submitButtonLabel = props.formMode === formMode.NEW ? 'Dodaj' : 'Edytuj'

    return (
        <div className='form-buttons'>
            <p id='errorsSummary' className='errors-text'>{props.error}</p>
            <input className='form-button-submit' type="submit" value={submitButtonLabel} />
            <Link to={props.cancelPath} className='form-button-cancel'>{ t('form.actions.cancel') }</Link>
        </div>
    )
}