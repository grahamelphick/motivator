import React from "react";

function Button(props) {
    return (
        <button>
            {props.purpose}
            {props.onClick}
        </button>
    );
}

export default Button