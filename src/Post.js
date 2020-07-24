import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from "react-bootstrap/Table";
import  {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: this.props.users,
            disable: true
        }
    }

    handleDelete = () => {
        this.props.deleteUser(this.state.users.userID);
        console.log(this.state.users.userID)
    }

    render() {
        let { users, isLoading } = this.props
        console.log(users)
        if(isLoading) {
            return <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        }

        let food = users.map((user, index) => {
            return <tr key={index}>
                <td>{index+1}</td>
                <td>{user.userID}</td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                    <button
                        className="btn btn-sm btn-info"
                        onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: user.userID })}
                    ><FontAwesomeIcon icon={faEdit} /></button>
                    &nbsp;
                    {/*<button*/}
                    {/*    className="btn btn-sm btn-danger"*/}
                    {/*    onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: user.userID })}*/}
                    {/*><FontAwesomeIcon icon={faTrash} /></button>*/}
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={this.handleDelete}
                    ><FontAwesomeIcon icon={faTrash} /></button>
                </td>
            </tr>
        })
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>No</th>
                    <th>UserID</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {food}
                </tbody>
            </Table>
        );
    }
}
export default connect()(Post);