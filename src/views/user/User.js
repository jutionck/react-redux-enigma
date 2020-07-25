import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import {deleteServiceUser, getServiceUsers, updateServiceUser, userService} from "../../services/userService";
import  {faPlus,faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2'
import UserAddForm from "./UserAddForm";

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users : [],
            userID: "",
            username: "",
            firstName: "",
            lastName: "",
            password: "",
            isLoading: true
        }
    }


    loadData = () => {
        getServiceUsers().then(res => {
            const users = res.data.data;
            this.props.GetUser(users);
        })
    }

    onSubmit = async () => {
        const form = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password
        }
        userService(form).then(res => {
            if(res.status === 200) {
                Swal.fire(
                    'Good job!',
                    'Create User Success!',
                    'success'
                ).then(r => {
                    this.setState({
                        username: "",
                        firstName: "",
                        lastName: "",
                        password: ""
                    })
                })
            }
        })
    }

    handleChangeInput = (event) => {
        let name = event.target.name
        console.log(name)
        this.setState({
            ...this.state, [name]:event.target.value
        });

    }

    componentDidMount() {
        this.loadData()
    }

    removeUser = (id) => {
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
            <tr key={index}>
                <td>{index+1}</td>
                <td>{user.userID}</td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.password}</td>
                <td>
                    <button className="btn btn-sm btn-danger"
                            onClick={() => this.removeUser(user.userID)}
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
                <div className="row">
                    <div className="col-lg-4">
                        <UserAddForm
                            username={this.state.username}
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            password={this.state.password}
                            handleChangeInput={this.handleChangeInput}
                            onSubmit={this.onSubmit}
                        />
                    </div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-header bg-yellow">
                                <strong> User List </strong>
                            </div>
                            <div className="card-body mb-3">
                                <div className="table-responsive">
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