import React from "react";

function Button({ props, children, ...buttonProps }) {
    return (
        <button {...buttonProps}>
            {/* {props.purpose} */}
            {children}
        </button>
    );
}

export default Button