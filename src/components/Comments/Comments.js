import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        alert('continuing to next page');
        this.props.dispatch({ type: 'ADD_NEWFEELING', payload: this.state.newFeeling });

        // Then programmatically  nav back to home
        // this.props.history.push('/understanding');
    }

    handleClick = () => {
        // Do javascript fun stuff?
        alert('Going back to the home page okayyyyy....');

        // Then programmatically  nav back to home
        this.props.history.push('/understanding');
    }
    render() {
        return (
            <div>

                <h1>Any comments you want to leave?</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Comments</label>
                    <input type="text" value={this.state.newFeeling.comments}
                        onChange={(event) => this.handleChangeFor('comments', event)} />
                    <button onClick={this.handleSubmit}>Next....trying to dispatch</button>
                    <br />
                </form>
            </div>
        )
    }
}

export default connect()(Comments);