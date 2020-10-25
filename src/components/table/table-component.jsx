import React, { Component } from 'react';
import 'w3-css/w3.css';

const jsonData = require('../../files/mocked_contacts_list.json');

class TableView extends Component {
    static defaultProps = {
        header: 'Contacts list'
    }

    constructor(props) {
        super(props);
        this.rows = jsonData;
        const fields = this.rows[0] ? Object.keys(this.rows[0]) : ['Empty table'];
        this.columnCaptions = fields.map(fieldName => fieldName.toUpperCase());
    }

    render() {
        return (
            <div className="w3-container">
                <h3 className="w3-header3">{this.props.header}</h3>
                <table className="w3-table-all w3-card-4">
                    <thead>
                        <tr className="w3-light-blue">{
                            this.columnCaptions.map(caption => <th>{caption}</th>)
                        }
                        </tr>
                    </thead>
                    <tbody>{
                        this.rows.map(jsonRow => {
                            return (<tr>{
                                Object.values(jsonRow)
                                    .map(fieldValue => <td>{fieldValue}</td>)
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