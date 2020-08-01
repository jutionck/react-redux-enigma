import React from 'react';
import Table from "react-bootstrap/Table";

function LatestList (props) {

    const { latest, loading} = props;
    let rates = [];
    let no = 1;
    for(let key in latest.rates) {
        rates.push(
            <tr>
                <td>{no++}</td>
                <td>{key}</td>
                <td>{latest.rates[key]}</td>
            </tr>
        )
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
                    <h6 className="m-0 font-weight-bold text-primary">The latest foreign exchange reference rates</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-responsive">
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>Base</th>
                                        <th>Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{latest.base}</td>
                                        <td>{latest.date}</td>
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
                                        <th>#</th>
                                        <th>Currency</th>
                                        <th>Rates</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {rates}
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

export default LatestList;