import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <p>Is this working</p>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect() (Understanding);