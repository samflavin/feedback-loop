import React, { Component } from 'react';
import { connect } from 'react-redux';


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
        alert('continuing to next page');
        this.props.dispatch({ type: 'ADD_NEWFEELING', payload: this.state.newFeeling });

        // Then programmatically  nav back to home
        // this.props.history.push('/understanding');
    }

    render() {
        return (
            <div>
        
                <h1>How are you feeling today?</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Feeling:</label>
                    <input type="text" value={this.state.newFeeling.feeling}
                        onChange={(event) => this.handleChangeFor('feeling', event)} />
                    <button onClick={this.handleSubmit}>Next....trying to dispatch</button>
                    <br />
                </form>           
            </div>
        )
    }
}

export default connect()(Feelings);