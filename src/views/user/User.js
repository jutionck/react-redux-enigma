import React from "react";
import { connect } from "react-redux";
import {deleteServiceUser, getServiceUsers, createServiceUser, updateServiceUser} from "../../services/userService";
import Swal from 'sweetalert2'
import UserList from "./UserList";
import UserModal from "./UserModal";

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
            selectedUser: {
                userID:""
            },
            edited: true
        }
    }


    loadData = () => {
        getServiceUsers().then(res => {
            const users = res.data.data;
            this.props.GetUser(users);
        })
    }

    showModal = () => {
        this.setState({
            ...this.state,
            showDetails: !this.state.showDetails,
            edited: true,
        });
    };

    showDetails = (user) => {
        this.setState({
            ...this.state,
            showDetails: !this.state.showDetails,
            selectedUser: { ...user },
            edited: false,
        });
    };

    hideDetails = () => {
        this.setState({
            ...this.state,
            showDetails: !this.state.showDetails,
            selectedUser: {},
            edited: false,
        });
    };


    handleChange = (event, field) => {
        let { selectedUser } = this.state;
        selectedUser[field] = event.target.value;
        this.setState({ selectedUser });
        console.log(this.state.selectedUser);
    };


    createUser = (event) => {
        event.preventDefault();
        if (this.state.edited === true) {
            createServiceUser(this.state.selectedUser)
                .then((res) => {
                    Swal.fire(
                        'Good job!',
                        'Create User Success!',
                        'success'
                    ).then(r => {
                        this.hideDetails();
                        this.loadData();
                    })

                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            updateServiceUser(this.state.selectedUser.userID,this.state.selectedUser)
                .then((res) => {
                    if (res.data.status === 200) {
                        Swal.fire(
                            'Good job!',
                            'Update User Success!',
                            'success'
                        ).then(r => {
                            this.hideDetails();
                            this.loadData();
                        })
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

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
                    this.props.GetRemove(id);
                    console.log(this.props.GetRemove(id))
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
        return (
            <>
                <UserList
                    showModal={this.showModal}
                    users={this.props.users}
                    showDetails={this.showDetails}
                    removeUser={this.removeUser}
                    edited={this.state.edited}
                />
                <UserModal
                    handleChange={this.handleChange}
                    showDetails={this.state.showDetails}
                    selectedUser={this.state.selectedUser}
                    hideDetails={this.hideDetails}
                    createUser={this.createUser}
                    edited={this.state.edited}
                />
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