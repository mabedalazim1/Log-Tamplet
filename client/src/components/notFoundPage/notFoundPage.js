import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends Component{

    render() {
        return (
            <div>
              <h1>404 - Not Found!</h1>
                    <Link to="/">
                    Go Home
                    </Link>

            </div>
        )
    }

}

export default NotFoundPage