import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {


    handleClick = () => {
        // Do javascript fun stuff?
        alert('Youre feedback has been submitted');

        // Then programmatically  nav back to home
        // this.props.history.push('/feelings');
    }


    render() {


        return (
            <div>
                <header>
                    <h1>Review your Feedback</h1>
                    <p>{JSON.stringify(this.props.reduxStore.responseList)}</p>

                </header>
  <p>map state to props to get feedback review to display here</p>
                {this.props.reduxStore.responseList.map((item, index) =>
                    <p key={index}>{item.feeling}</p>

                )}

                <button onClick={this.handleClick}>Submit Feedback</button>
            </div>
        )
    }

}


const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);