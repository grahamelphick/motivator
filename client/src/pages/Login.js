import React from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";

function Login() {
    return (
        <div>
            <Logo></Logo>
            <Button purpose="Login"></Button>
            <Button purpose="Sign Up"></Button>
        </div>
    );
}


export default Login;
