import React, {Component} from 'react';
import {Table} from "react-bootstrap/cjs";
import {Link} from "react-router-dom";
import  {faPlus,faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UserList extends Component {
    render() {
        let { users, isLoading} = this.props
        console.log(users)

        if(isLoading) {
            return <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        }

        let user = users.map((user, index) => {
            return <tr key={index}>
                <td>{index+1}</td>
                {/*<td>{user.username}</td>*/}
                {/*<td>{user.password}</td>*/}
                {/*<td>{user.age}</td>*/}
                {/*<td>{user.address}</td>*/}
                <td>{user.userID}</td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>

                <td>
                    <Link to={"/user/:user.userID"} className="btn btn-info btn-sm"> <FontAwesomeIcon icon={faEdit} /></Link>
                    &nbsp;
                    <Link to="" className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrash} /></Link>
                </td>
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
                        <Link to="" className="btn btn-yellow-2 mb-3"><FontAwesomeIcon icon={faPlus} /></Link>
                        <div className="embed-responsive">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Username</th>
                                    <th>Username</th>
                                    <th>Age</th>
                                    <th>Address</th>
                                    {/*<th>User ID</th>*/}
                                    {/*<th>Username</th>*/}
                                    {/*<th>Firstname</th>*/}
                                    {/*<th>Lastname</th>*/}
                                    <th>#</th>
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

export default UserList