import React, { Component } from 'react';

class Understanding extends Component {

    handleClick = () => {
        // Do javascript fun stuff?
        alert('Moving ON');

        // Then programmatically  nav back to home
        this.props.history.push('/support');
    }
    render() {
        return (
            <div>

                <h1>Understanding</h1>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default Understanding;