import React, {Component} from 'react';

class HomePage extends Component {
    render() {
        return (
            <>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                </nav>
                <div className="jumbotron">
                    <h1 className="display-4">Welcome!</h1>
                    <p className="lead">Website Kedai Makan.</p>
                    <hr className="my-4"/>
                    <p>Copyright Kedai Makan Apps.</p>
                </div>
            </>
        );
    }
}

export default HomePage;