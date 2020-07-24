import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class UserAddForm extends Component {
    render() {

        let {username, firstName, lastName, password, handleChangeInput, onSubmit } = this.props

        return (
            <>
                <div className="card mt-5 mb-5">
                    <div className="card-header">
                        Form Add User
                    </div>
                    <div className="card-body">
                        <form method="post" onSubmit={onSubmit}>
                            <div className="form-group row">
                                <label htmlFor="staticFoodName" className="col-sm-2 col-form-label">Username</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        name="username"
                                        onChange={handleChangeInput}
                                        value={username}
                                        className="form-control"
                                        id="staticFoodName"
                                        placeholder="Enter username..."
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputFP" className="col-sm-2 col-form-label">Firstname</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        name="firstName"
                                        onChange={handleChangeInput}
                                        value={firstName}
                                        className="form-control"
                                        id="staticFoodName"
                                        placeholder="Enter firstname..."
                                        required

                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputCF" className="col-sm-2 col-form-label">Lastname</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        name="lastName"
                                        onChange={handleChangeInput}
                                        value={lastName}
                                        className="form-control"
                                        id="staticFoodName"
                                        placeholder="Enter lastname..."
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="staticStock" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleChangeInput}
                                        value={password}
                                        className="form-control"
                                        id="staticStock"
                                        placeholder="Enter password..."
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="staticStock" className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">SAVE</button>&nbsp;
                                    <a href="" className="btn btn-warning">CANCEL</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </>
        );
    }
}

export default UserAddForm;