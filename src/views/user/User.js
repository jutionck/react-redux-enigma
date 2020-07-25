import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import {deleteServiceUser, getServiceUsers, updateServiceUser} from "../../services/userService";
import  {faPlus,faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2'
import UserModalUpdate from "./UserModalUpdate";
import Button from "react-bootstrap/Button";

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            delete: false,
            userID: "",
            username: "",
            firstName: "",
            lastName: "",
            password: "",
        }
    }


    loadData = () => {
        getServiceUsers().then(res => {
            const users = res.data.data;
            this.props.GetUser(users);
        })
    }

    componentDidMount() {
        this.loadData()
    }

    removeGenre = (id) => {
        // const onDelete = window.confirm(`Delete user with id ${id}`);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                deleteServiceUser(id).then(response => {
                    // this.props.GetRemove(id)
                    if (response.status === 200) {
                        this.loadData();
                    }
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    render() {
        const listUser = this.props.users.map((user, index) => (
            <tr>
                <td>{index+1}</td>
                <td>{user.userID}</td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.password}</td>
                <td>
                    <button className="btn btn-sm btn-danger"
                            onClick={() => this.removeGenre(user.userID)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </td>
            </tr>
        ));
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
                    <div className="card-body mb-3">
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
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {listUser}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.userReducer.userTodo.users };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetUser: (data) => dispatch({ type: "GET_USERS", data: data }),
        GetRemove: (id) => dispatch({ type: "DELETE_USER", data: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);