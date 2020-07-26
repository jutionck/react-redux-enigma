import React, {Component} from 'react';
import { Modal, Button, Row, Form, Col } from "react-bootstrap";

class UserModal extends Component {
    render() {
        const {
            handleChange,
            showDetails,
            hideDetails,
            selectedUser,
            createUser,
        } = this.props;
        return (
            <Modal show={showDetails}>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-center">
                        User Form
                    </Modal.Title>
                    <button onClick={() => {
                        hideDetails();
                    }} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <form
                    onSubmit={(event) => {
                        createUser(event);
                    }}
                >
                    <Modal.Body>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                name="username"
                                type="text"
                                onChange={(event) => {
                                    handleChange(event, "username");
                                }}
                                value={selectedUser["username"]}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Lastname</label>
                            <input
                                name="firstName"
                                type="text"
                                onChange={(event) => {
                                    handleChange(event, "firstName");
                                }}
                                value={selectedUser["firstName"]}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Lastname</label>
                            <input
                                name="lastName"
                                type="text"
                                onChange={(event) => {
                                    handleChange(event, "lastName");
                                }}
                                value={selectedUser["lastName"]}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Password</label>
                            <input
                                name="password"
                                type="password"
                                onChange={(event) => {
                                    handleChange(event, "password");
                                }}
                                value={selectedUser["password"]}
                                required
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            className="float-right"
                            variant="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}

export default UserModal;