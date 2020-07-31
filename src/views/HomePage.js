import React, {Component} from 'react';

class HomePage extends Component {
    render() {
        return (
            <>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Welcome</h6>
                    </div>
                    <div className="card-body">
                        <h3>Foreign exchange rates API</h3>
                        <p>with currency conversion</p>
                        <p>Exchange rates API is a free service for current and historical foreign exchange rates
                            published by the European Central Bank</p>

                        <a href="https://exchangeratesapi.io/"><span className="badge badge-info">https://exchangeratesapi.io</span></a>
                    </div>
                </div>
            </>
        );
    }
}

export default HomePage;