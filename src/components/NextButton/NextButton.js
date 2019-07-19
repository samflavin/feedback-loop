import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NextButton extends Component {


    handleClick = () => {
        // Do javascript fun stuff?
        alert('Going back to the home page okayyyyy....');

        // Then programmatically  nav back to home
        this.props.history.push('/feelings');
    }


    render() {


        return (
            <div>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default withRouter(NextButton);