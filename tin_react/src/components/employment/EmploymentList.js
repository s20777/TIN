import React from 'react';
import { Link } from 'react-router-dom';
import { getEmploymentsApiCall } from '../../apiCalls/employmentApiCalls';
import EmploymentListTable from "../../table/EmploymentListTable";


class EmploymentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            employments: []
        }
    }

    componentDidMount() {
        this.fetchEmploymentList()
    }

    fetchEmploymentList = () => {
        getEmploymentsApiCall()
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        employments: data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, employments } = this.state
        let content;

        if (error) {
            content = <p>Błąd: {error.message}</p>
        } else if (!isLoaded) {
            content = <p>Ładowanie danych zatrudnień...</p>
        } else {
            content = <EmploymentListTable employmentsList={employments} />
        }

        return (
            <main>
                <h2>Lista zatrudnień</h2>
                {content}
                <p className="section-buttons">
                    <Link to="/employment/add" className="button-add">Dodaj nowe zatrudnienie</Link>
                </p>
            </main>
        )
    }
}

export default EmploymentList