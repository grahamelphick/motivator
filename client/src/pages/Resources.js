import React, { useEffect, useState, useContext } from "react";
import ResourcesList from "../components/ResourcesList";
import "./pages.css";
import { AuthContext } from "../components/Auth";
import { Redirect } from "react-router-dom";


function ResourcesPage() {

    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <ResourcesList></ResourcesList>
    );
 
}

export default ResourcesPage;
