import React from "react";
import { Button, Modal } from "react-bootstrap";

class UserModalUpdate extends React.Component {
    render() {
        let {
            show,
            userID,
            username,
            firstName,
            lastName,
            password,
            close,
            handleForm,
            handleSubmit,
        } = this.props;
        return (
            <>
                <Modal show={show} onHide={close} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row d-flex justify-content-center">
                            <form
                                class="text-center border border-light p-5"
                                onSubmit={handleSubmit}
                            >
                                <p class="h4 mb-4">Update User</p>

                                <input
                                    type="text"
                                    class="form-control mb-4"
                                    placeholder="Tempat Meeting"
                                    name="username"
                                    value={username}
                                    onChange={handleForm}
                                />

                                <input
                                    type="text"
                                    id="defaultLoginFormPassword"
                                    class="form-control mb-4"
                                    placeholder="Client Meeting"
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleForm}
                                />
                                <input
                                    type="date"
                                    id="defaultLoginFormPassword"
                                    class="form-control mb-4"
                                    placeholder="Tanggal Meeting"
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleForm}
                                />
                                <input
                                    type="time"
                                    id="defaultLoginFormPassword"
                                    class="form-control mb-4"
                                    placeholder="Waktu Meeting"
                                    name="password"
                                    value={password}
                                    onChange={handleForm}
                                />

                                <button class="btn btn-info btn-block my-4" type="submit">
                                    Update
                                </button>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={close}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default UserModalUpdate;