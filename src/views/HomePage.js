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

                        <hr className="mt-5"/>
                        <h5>Usage</h5>
                        <ol>
                            <li>Get the latest foreign exchange reference rates : <br/> <kbd>GET https://api.exchangeratesapi.io/latest </kbd></li>
                            <li>Get historical rates for any day since 1999 : <br/> <kbd>GET https://api.exchangeratesapi.io/2010-01-12 </kbd></li>
                            <li>Request specific exchange rates by setting the symbols parameter : <br/> <kbd>GET https://api.exchangeratesapi.io/latest?symbols=USD,GBP </kbd></li>
                            <li>Get historical rates for a time period : <br/> <kbd>GET https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01 </kbd></li>
                            <li>Limit results to specific exchange rates to save bandwidth with the symbols parameter : <br/> <kbd>GET https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&symbols=ILS,JPY </kbd></li>
                        </ol>

                    </div>
                </div>
            </>
        );
    }
}

export default HomePage;