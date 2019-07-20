import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        newFeeling: {
            support: ''
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            newFeeling: {
                ...this.state.newFeeling,
                [propertyName]: event.target.value
            }
        })
    }

    handleSubmit = () => {
        // Do javascript fun stuff?
        alert('continuing to next page');
        this.props.dispatch({ type: 'ADD_NEWFEELING', payload: this.state.newFeeling });

        // Then programmatically  nav back to home
        // this.props.history.push('/understanding');
    }

    handleClick = () => {
        // Do javascript fun stuff?
        alert('Going back to the home page okayyyyy....');

        // Then programmatically  nav back to home
        this.props.history.push('/comments');
    }
    render() {
        return (
            <div>

                <h1>How well are you being supported?</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Support?</label>
                    <input type="number" min="1" max="5" value={this.state.newFeeling.support}
                        onChange={(event) => this.handleChangeFor('support', event)} />
                    <button onClick={this.handleSubmit}>Next....trying to dispatch</button>
                    <br />
                </form>
            </div>
        )
    }
}

export default connect()(Support);