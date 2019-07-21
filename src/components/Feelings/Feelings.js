import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';


class Feelings extends Component {

    state = {
       newFeeling: {
            feeling: ''
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
        this.props.dispatch({ type: 'ADD_NEWFEELING', payload: this.state.newFeeling });

        // Then programmatically  nav back to home
         this.props.history.push('/understanding');
    }

    render() {
        return (
            <div>
        
                <h1>How are you feeling today?</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Feeling?</label>
                    <input type="number" min="1" max="5" value={this.state.newFeeling.feeling}
                        onChange={(event) => this.handleChangeFor('feeling', event)} />
                    <button type="submit">Next</button>
                    <br />
                </form>  
                <Review />         
            </div>
        )
    }
}

export default connect()(Feelings);