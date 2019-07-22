import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class Comments extends Component {

    state = {
        newFeeling: {
            comments: ''
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
       
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.newFeeling });
        this.props.history.push('/review');
        // Then programmatically  nav back to home
        // this.props.history.push('/understanding');
    }

    handleClick = () => {
        // Do javascript fun stuff?
        alert('Going back to the home page okayyyyy....');

        // Then programmatically  nav back to home
        this.props.history.push('/review');
    }
    render() {
        return (
            <div>

                <h1>Any comments you want to leave?</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Comments</label>
                    <input type="text" value={this.state.newFeeling.comments}
                        onChange={(event) => this.handleChangeFor('comments', event)} />
                    <button>Next</button>
                    <br />
                </form>
                <Review />  
            </div>
        )
    }
}

export default connect()(Comments);