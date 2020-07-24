import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import {deleteUser, getUsers} from "./services";
class AllPost extends Component {

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

    removeUser = (userID) => {
        console.log(userID)
        const onDelete = window.confirm(`Delete user with userID ${userID}`);
        if (onDelete) {
            deleteUser(userID).then(response => {
                if (response.status === 200) {
                    this.loadData();
                }
            })
        }

    }

    componentDidMount() {
        this.loadData()
    }

    render() {
        return (
            <div>
                <Post users={this.state.users} isLoading={this.state.isLoading} deleteUser={this.removeUser}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);