import React from "react";
import { getEmploymentByIdApiCall} from "../../apiCalls/employmentApiCalls";
import {getFormattedDate} from "../../helpers/dateHelper";
import {Link} from "react-router-dom";

function EmploymentDetails({match}) {



    return (
        <main>
            <h2>Szczegóły zatrudnienia</h2>

            <div className="section-buttons">
                <Link to="/employments" className="button-back">Powrót</Link>
            </div>

        </main>
    )


}

export default EmploymentDetails