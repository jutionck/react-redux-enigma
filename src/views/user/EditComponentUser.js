import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponentUser extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newUsername = this.getTitle.value;
        const newFirstName = this.getMessage.value;
        const data = {
            newUsername,
            newFirstName
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.user.userID, data: data })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                           defaultValue={this.props.user.username} placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                              defaultValue={this.props.user.firstName} cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponentUser);