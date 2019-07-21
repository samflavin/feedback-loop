import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class Understanding extends Component {


    state = {
        newFeeling: {
            understanding: ''
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
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.newFeeling });
        this.props.history.push('/support');
        // Then programmatically  nav back to home
        // this.props.history.push('/understanding');
    }

    handleClick = () => {
        // Do javascript fun stuff?
        alert('Moving ON');


    }
    render() {
        return (
            <div>

                <h1>How well do you understand the content?</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Understanding?</label>
                    <input type="number" min="1" max="5" value={this.state.newFeeling.understanding}
                        onChange={(event) => this.handleChangeFor('understanding', event)} />
                    <button>Next</button>
                    <br />
                </form>
                <Review />  
            </div>
        )
    }
}

export default connect() (Understanding);