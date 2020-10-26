import React, { Component } from 'react';
import 'w3-css/w3.css';
import axios from 'axios';

class TableView extends Component {
    static defaultProps = {
        dataLoadPromise: function () { return axios.get('mocked_contacts_list.json') },
        header: 'Contacts list',
        fields: ['first_name', 'last_name', "email", "phone"],
        columnCaptions: {
            first_name: 'First Name',
            last_name: 'Last Name',
            email: "E-Mail",
            phone: "Phone Number"
        },
        data: null
    }

    async componentDidMount() {
        const result = await this.props.dataLoadPromise();
        this.setState({ rows: result.data });
        // this.props.dataLoadPromise()
        // .then(result => this.setState({ rows: result.data }),
        //     err => console.log(err)
        // );
    }

    constructor(props) {
        super(props);
        this.renderTable = this.renderTable.bind(this);
        this.state = { rows: props.data };
    }

    renderTable() {
        return (
            <table className="w3-table-all w3-card-4">
                <thead>
                    <tr className="w3-light-blue">{
                        this.props.fields.map(field => <th>{this.props.columnCaptions[field]}</th>)
                    }
                    </tr>
                </thead>
                <tbody>{
                    this.state.rows.map(jsonRow => {
                        return (<tr data-id={jsonRow['id']}>{
                            this.props.fields
                                .map(field => <td>{jsonRow[field]}</td>)
                        }
                        </tr>);
                    }
                    )
                }
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <div className="w3-container">
                <h3 className="w3-header3">{this.props.header}</h3>
                {this.state.rows === null ?
                    (<div>Loading ...</div>) :
                    this.renderTable()}
            </div>
        )
    }
}
export default TableView;