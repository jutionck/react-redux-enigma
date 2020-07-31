import React, {Component} from 'react';
import Table from "react-bootstrap/Table";

class Exchange extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            rates: {}
        };
    }

    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest") // data source is an object, not an array.
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        rates: result.rates
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    createTable = () => {
        const rates = this.state;
        let ratesArr = Object.keys(rates).map(i => rates[i])[2];
        let table = [];
        let children = [];
        let displayedCurrencies = ["RUB", "CAD", "USD", "CHF", "JPY", "EUR"];

        // The following loop is used to create inner structure (children) of the table.
        for (var key in ratesArr) {
            if (ratesArr.hasOwnProperty(key) && displayedCurrencies.includes(key)) {
                children.push(
                    <tr>
                        <td>{key}</td>
                        <td>{ratesArr[key]}</td>
                    </tr>
                );
            }
        }
        table.push(<tbody>{children}</tbody>); // We create the parent tbody tags and add the inner loop (children).

        return table;
    };

    render() {
        const { error, isLoaded } = this.state;
        console.log(this.createTable())
        if (error) {
            return <div>Oops: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <main>
                    <div className="App-body">
                        <table className="striped bordered hover">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Exchange</th>
                            </tr>
                            </thead>
                            {this.createTable()}
                        </table>
                        <p>
                            * base currency is GBP
                            <br />* As for the API,
                            <a href="https://exchangeratesapi.io/">https://exchangeratesapi.io/</a> is used.
                        </p>
                    </div>
                </main>
            );
        }
    }
}

export default Exchange;