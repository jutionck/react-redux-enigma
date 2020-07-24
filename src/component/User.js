import React, {Component} from 'react';
import {userAction} from "../actions";
import {userService} from "../services";
import {connect} from "react-redux";

class User extends Component {

    state = {
        title: "",
        body: ""
    }

    onSubmit = async () => {
        const response = await userService(this.state.title, this.state.body)
        const data = await response.json()
        console.log(data)
        if(response.status === 201) {
            this.props.userAction(this.state.title, this.state.body)
            alert('created' + data.title)
        } else{
            alert('created failed')
        }
    }

    onInputTitleChange = async (event) => {
        await this.setState({
            title: event.target.value
        })
    }

    onInputBodyChange = async (event) => {
        await this.setState({
            body: event.target.value
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input type="text" value={this.state.title} name="Title" onChange={this.onInputTitleChange}/><br/>
                        <label htmlFor="">Deskripsi</label>
                        <input type="text" value={this.state.body} name="Description" onChange={this.onInputBodyChange}/><br/>
                        <button onClick={this.onSubmit}>Submit</button>
                    </div>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = {
    userAction: userAction
}

export default connect(null, mapDispatchToProps)(User);