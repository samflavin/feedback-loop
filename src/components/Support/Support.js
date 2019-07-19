import React, { Component } from 'react';

class Support extends Component {

    handleClick = () => {
        // Do javascript fun stuff?
        alert('Going back to the home page okayyyyy....');

        // Then programmatically  nav back to home
        this.props.history.push('/comments');
    }
    render() {
        return (
            <div>

                <h1>Support</h1>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default Support;