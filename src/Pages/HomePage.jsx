import React from "react";
import BaseHoc from "../hoc/BaseHoc"; //to use HOC in a page we want to import the HOC file

function HomeComponent() {
    return (
        <div>
            <h1>Welcome to our Home Page Buddy !!</h1>
        </div>
    );
}

export default BaseHoc(HomeComponent); //this is how we use wrap a component inside HOC