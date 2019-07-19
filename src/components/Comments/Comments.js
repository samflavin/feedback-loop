import React, { Component } from 'react';

class Comments extends Component {

    handleClick = () => {
        // Do javascript fun stuff?
        alert('Going back to the home page okayyyyy....');

        // Then programmatically  nav back to home
        this.props.history.push('/understanding');
    }
    render() {
        return (
            <div>

                <h1>Comments</h1>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default Comments;