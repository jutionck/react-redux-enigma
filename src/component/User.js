import React, {Component} from 'react';
import {userAction} from "../actions";
import {getUsers, userService} from "../services";
import {connect} from "react-redux";
import UserAddForm from "./UserAddForm";
import Userlist from "./Userlist";
import Swal from 'sweetalert2'

class User extends Component {

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
        getUsers().then(res => {
            this.setState({
                ...this.state, users: res.data, isLoading: false
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
        userService(form).then(res => {
            if(res.status == '200') {
                alert("User created!")
                Swal.fire(
                    'Good job!',
                    'Login Success!',
                    'success'
                ).then(r => {
                    this.setState({
                    username: "",
                    firstName: "",
                    lastName: "",
                    password: ""
                })
                    this.loadData()
                })
            }
        })
    }

    componentDidMount() {
        this.loadData()
    }

    handleChangeInput = (event) => {
        let name = event.target.name
        this.setState({
            ...this.state,[name]:event.target.value
        });

    }

    render() {
        return (
            <>
                <Userlist users={this.state.users} isLoading={this.state.isLoading}/>
                <UserAddForm
                    username={this.state.username}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    password={this.state.password}
                    handleChangeInput={this.handleChangeInput}
                    onSubmit={this.onSubmit}
                />
            </>
        );
    }
}

const mapDispatchToProps = {
    userAction: userAction
}

export default connect(null, mapDispatchToProps)(User);