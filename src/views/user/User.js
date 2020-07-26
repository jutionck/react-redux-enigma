import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import {createServiceUser, getServiceUsers, updateServiceUser} from "../../services/userService";
import  {faPlus,faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2'
import UserAddForm from "./UserAddForm";
import UserList from "./UserList";
import UserModal from "./UserModal";

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users : [],
            showDetails: false,
            selectedUser: {
                id:""
            },
            edited: true,
                userEdit: {
                    id:"",
                    name: "",
                    username: "",
                    email: "",
                    address : {
                        street: "",
                        suite: "",
                        city: "",
                        zipcode: "",
                        geo : {
                            lat: "",
                            lng: ""
                        }
                    },
                    phone: "",
                    website: "",
                    company: {
                        name: "",
                        catchPhrase: "",
                        bs: ""
                    }
                },
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
            const users = res.data;
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
        createServiceUser(form).then(res => {
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
            updateServiceUser(this.state.selectedUser.id,this.state.selectedUser)
                .then((res) => {
                    Swal.fire(
                        'Good job!',
                        'Update User Success!',
                        'success'
                    ).then(r => {
                        this.hideDetails();
                        this.loadData();
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


    render() {
        return (
            <>
                <UserList
                    showModal={this.showModal}
                    users={this.props.users}
                    showDetails={this.showDetails}
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
        GetUser: (data) => dispatch({ type: "GET_USERS", data: data })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);