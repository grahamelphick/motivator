import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Col from "../Col";
import useWindowSize from "react-use/lib/useWindowSize";

function DisplayMantra() {
    const [mantra, setMantra] = useState("Seize the day!");

    useEffect(() => {
        loadMantra();
    }, [])

    function loadMantra() {
        API.getMantra()
            .then(res =>
                setMantra(res.data[0].mantra)
            )
            .catch(err => console.log(err));
    };

    const { width, height } = useWindowSize();

    return (
        <div>
            <h1>
                <em><a href="./mantra">{mantra}</a></em>
            </h1>
            <hr style={{ height: 2, color: "black" }}></hr>
        </div>
    );
}

export default DisplayMantra;
