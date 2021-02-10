import React, { useEffect } from "react";
import API from "../../utils/API";


function Resources() {

    useEffect(() => {
        loadResources()
    }, [])

    function loadResources() {
        API.getBooks()
            .then(res =>
                resourceInput(res.data)
            )
            .catch(err => console.log(err));
    };

    function resourceInput() {
        // let i;
        // for (i = 0; i < res.length; i++) {
            
        // }
    }


    return (
        // <div>
        //     <h1 style={{ fontSize: "15px" }}>Resources:</h1>
        //     <div style={{ width: "250px", height: "500px", border: "5px solid #000" }}></div>
        // </div>
        <div class="gcse-search"></div>

    )
}

export default Resources