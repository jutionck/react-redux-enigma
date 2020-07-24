import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getTitle.value = '';
        this.getMessage.value = '';
    }
    render() {
        return (
            <>

                <form method="post" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            required
                            ref={(input) => this.getTitle = input}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstname">Firstname</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            required
                            ref={(input) => this.getTitle = input}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Lastname</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            required
                            ref={(input) => this.getTitle = input}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="username"
                            required
                            ref={(input) => this.getTitle = input}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <button type="submit" className="btn btn-info">SAVE</button>
                    </div>
                </form>
            </>
        );
    }
}
export default connect()(PostForm);