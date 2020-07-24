import React, {Component} from 'react';
import {Table} from 'react-bootstrap/cjs'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

class Userlist extends Component {
    render() {
        let { users, isLoading } = this.props

        if(isLoading) {
            return <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        }

        let user = users.map((user, index) => {
            return <tr key={index}>
                <td>{index+1}</td>
                <td>{user.userID}</td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.password}</td>
            </tr>
        })

        return (
            <>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">User List</li>
                    </ol>
                </nav>
                <div className="card">
                    <div className="card-header bg-yellow">
                        <div className="row">
                            <div className="col">
                                <strong> User List </strong>
                            </div>
                            <div className="col text-right">

                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="embed-responsive">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>No</th>
                                    <th>UserID</th>
                                    <th>Username</th>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Password</th>
                                </tr>
                                </thead>
                                <tbody>
                                {user}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Userlist;