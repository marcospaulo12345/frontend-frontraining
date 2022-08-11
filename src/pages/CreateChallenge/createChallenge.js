import React from "react";

import NavBar from "../../components/NavBar/navBar.js";

import "./styles.css"

export default function CreateChallege() {
    return (
        <section className="create-challenge">
            <NavBar isHome={false}/>
        </section>
    )
}