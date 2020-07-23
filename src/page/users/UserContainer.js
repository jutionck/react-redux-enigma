import React, {Component} from 'react';
import {getUsers} from "../../api/UserService";
import UserList from "./UserList";

class UserContainer extends Component {

    constructor(pros) {
        super(pros);
        this.state = {
            users : [],
            isLoading: true
        }
    }

    loadData = () => {
        getUsers().then(res => {
            console.log(res)
            this.setState({
                ...this.state, users: res.data.data, isLoading: false
            })
        })
    }

    componentDidMount() {
        this.loadData()
    }

    render() {
        return (
            <div>
                <UserList users={this.state.users} isLoading={this.state.isLoading}/>
            </div>
        );
    }
}

export default UserContainer;