import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {
    //Created a local state to clear inputs after submitting
state= {};



    handleClick = () => {
      
       
        axios.post('/review', this.props.reduxStore.responseList)
                .then(response => {
                   console.log(response);
                   alert('Thankyou for your Feedback!')
                   //clear inputs
                    this.props.dispatch({ type: 'CLEAR', payload: this.state });
                }).catch(err => {
                    alert('Couldnt submit your feedback, try agin later', err)

                })

       //send us back to start
        this.props.history.push('/');
    }


    render() {
        

        return (
            <div className="review">
                <header>
                    <h1>Review your Feedback</h1>

                </header>
            <div>
                    <p>Feeling:{this.props.reduxStore.responseList.feeling}</p>
                    <br />
                    <p>Understanding:{this.props.reduxStore.responseList.understanding}</p>
                    <br />
                    <p>Support:{this.props.reduxStore.responseList.support}</p>
                    <br />
                    <p>Comments:{this.props.reduxStore.responseList.comments}</p>
                    
        
                
            </div>       
                <button id="myBtn" onClick={this.handleClick}>Submit Feedback</button>
            </div>
        )
    }

}


const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);