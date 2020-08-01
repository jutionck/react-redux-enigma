import React, { useState } from 'react';
import LoginForm from "./LoginForm";
import Swal from 'sweetalert2'

function LoginContainer (props) {

    const initialStateAuth = {
        username: 'admin',
        password: 'admin'
    }

    const [auth, setAuth] = useState(initialStateAuth)

    const handleChangeInput = (event, field) => {
        const { value } = event.target;
        setAuth({ ...auth, [field]: value });
    }

    // belum api
    const loginProses = (event) => {
        event.preventDefault();
        if(auth.username === 'admin' && auth.password === 'admin') {
            Swal.fire(
                'Good job!',
                'Login Success!',
                'success'
            ).then(r => {
                sessionStorage.setItem("auth-token", "12345");
                props.onLogin()
            })
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Incorret Username or Password',
                icon: 'error',
                confirmButtonText: 'Ok'
            }).then(r => {

            })
        }
    }

    return (
        <>
            <LoginForm
                auth={auth}
                handleChangeInput={handleChangeInput}
                loginProses={loginProses}
            />

        </>
    );
}

export default LoginContainer;