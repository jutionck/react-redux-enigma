import React from "react";
import { connect } from "react-redux";
import {
    createServiceUser,
    deleteServiceUser,
    getServiceUserById,
    getServiceUsers,
    updateServiceUser
} from "../../services/userService";
import Swal from 'sweetalert2'
import UserList from "./UserList";
import UserModal from "./UserModal";

class User extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
        this.state = {
            users : [],
            showDetails: false,
            selectedUser: {
                id:""
            },
            edited: true,
            isLoading: true
        }
    }


    loadData = () => {
        getServiceUsers().then(res => {
            const users = res.data;
            this.props.GetUser(users);
            this.setState({
                ...this.state, isLoading: false
            })
        })
    }

    onSubmit = async () => {
        const form = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password
        }
        createServiceUser(form).then(res => {
            if(res.status === 201) {
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
                    const users = res.data;
                    this.props.CreateUser(users);
                    console.log(this.props.CreateUser(users))
                    Swal.fire(
                        'Good job!',
                        'Create User Success!',
                        'success'
                    ).then(r => {
                        this.hideDetails();
                    })
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            updateServiceUser(this.state.selectedUser.id,this.state.selectedUser)
                .then((res) => {
                    const users = res.data;
                    const id = this.state.selectedUser.id
                    this.props.UpdateUser(id,users);
                    console.log(this.props.UpdateUser(id, users))
                    Swal.fire(
                        'Good job!',
                        'Update User Success!',
                        'success'
                    ).then(r => {
                        this.hideDetails();
                    })
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    componentDidMount() {
        this.loadData()
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;
        this.setState({
            searchTitle: searchTitle
        });
    }

    searchTitle() {
        getServiceUserById(this.state.searchTitle)
            .then(response => {
                this.setState({
                    users: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
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
                    this.props.DeleteUser(id);
                    console.log(this.props.DeleteUser(id))
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
                    isLoading={this.state.isLoading}
                    onChangeSearchTitle={this.onChangeSearchTitle}
                    searchTitle={this.searchTitle}
                    removeUser={this.removeUser}
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
        CreateUser: (data) => dispatch({ type: "ADD_USER", data: data }),
        UpdateUser: (id, data) => dispatch({ type: "UPDATE_USER", data:data }),
        DeleteUser: (id) => dispatch({ type: "DELETE_USER", data:id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);