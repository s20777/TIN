import formMode from "../helpers/formHelper";
import {Link} from "react-router-dom";

export default function FormButtons(props) {
    const submitButtonLabel = props.formMode === formMode.NEW ? 'Dodaj' : 'Edytuj'

    return (
        <div className='form-buttons'>
            <p id='errorsSummary' className='errors-text'>{props.error}</p>
            <input className='form-button-submit' type="submit" value={submitButtonLabel} />
            <Link to={props.cancelPath} className='form-button-cancel'>anuluj</Link>
        </div>
    )
}