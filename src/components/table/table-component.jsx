import React, { Component } from 'react';
import 'w3-css/w3.css';

const jsonData = require('../../files/mocked_contacts_list.json');

class TableView extends Component {
    static defaultProps = {
        header: 'Contacts list',
        fields: ['first_name', 'last_name', "email", "phone"],
        columnCaptions: {
            first_name: 'First Name',
            last_name: 'Last Name',
            email: "E-Mail",
            phone: "Phone Number"
        },
        data: jsonData
    }

    constructor(props) {
        super(props);
        this.state = { rows: props.data };
    }

    render() {
        return (
            <div className="w3-container">
                <h3 className="w3-header3">{this.props.header}</h3>
                <table className="w3-table-all w3-card-4">
                    <thead>
                        <tr className="w3-light-blue">{
                            this.props.fields.map(field => <th>{this.props.columnCaptions[field]}</th>)
                        }
                        </tr>
                    </thead>
                    <tbody>{
                        this.state.rows.map(jsonRow => {
                            return (<tr>{
                                this.props.fields
                                    .map(field => <td>{jsonRow[field]}</td>)
                            }
                            </tr>);
                        }
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TableView;