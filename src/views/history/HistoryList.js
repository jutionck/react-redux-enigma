import React from 'react';
import Table from "react-bootstrap/Table";
import {Link} from "react-router-dom";

function HistoryList (props) {

    const { history, loading} = props;
    const dateRates = [];
    let list = []

    for (const key in history.rates) {
        for (const key2 in history.rates[key]) {
            list.push(<td>{history.rates[key][key2]}</td>);
        }
        let tempArray = list.slice();
        dateRates.push(
            <tr>
                {/*<td>{history.base}</td>*/}
                <td>{key}</td>
                {tempArray}
            </tr>
        );
        tempArray = [];
        list = [];
    }

    if(loading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }

    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">The Historical rates for a time period</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-responsive">
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>Base</th>
                                        <th>Historical</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{history.base}</td>
                                        <td>{history.start_at} {" - "} {history.end_at}</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>{}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {dateRates}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default HistoryList;