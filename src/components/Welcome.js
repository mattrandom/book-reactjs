import React, { Component } from "react";

export default class Welcome extends Component {
    render() {
        return (
            <div className="mt-4 p-5 bg-dark text-white rounded">
                <h1>Welcome to Book Shop</h1>
                <p>
                    This is a place for all book lovers!
                </p>
            </div>
        );
    }

}