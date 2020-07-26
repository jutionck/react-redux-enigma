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
            edited,
        } = this.props;
        return (
            <Modal show={showDetails}>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
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
                            <label htmlFor="username">Name</label>
                            <input
                                name="name"
                                type="text"
                                onChange={(event) => {
                                    handleChange(event, "name");
                                }}
                                value={selectedUser["name"]}
                                required
                            />
                        </div>
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
                            <label htmlFor="username">email</label>
                            <input
                                name="email"
                                type="text"
                                onChange={(event) => {
                                    handleChange(event, "email");
                                }}
                                value={selectedUser["email"]}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">phone</label>
                            <input
                                name="phone"
                                type="text"
                                onChange={(event) => {
                                    handleChange(event, "phone");
                                }}
                                value={selectedUser["phone"]}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">website</label>
                            <input
                                name="website"
                                type="text"
                                onChange={(event) => {
                                    handleChange(event, "website");
                                }}
                                value={selectedUser["website"]}
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