import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

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
        alert('Continuing to next page.');
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.newFeeling });
        this.props.history.push('/comments');
        // Then programmatically  nav back to home
        // this.props.history.push('/understanding');
    }

    handleClick = () => {
        // Do javascript fun stuff?
        alert('Going back to the home page okayyyyy....');

        // Then programmatically  nav back to home
       
    }
    render() {
        return (
            <div>

                <h1>How well are you being supported?</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Support?</label>
                    <input type="number" min="1" max="5" value={this.state.newFeeling.support}
                        onChange={(event) => this.handleChangeFor('support', event)} />
                    <button>Next</button>
                    <br />
                </form>
                <Review />  
            </div>
        )
    }
}

export default connect()(Support);