import React, { Component } from 'react';
import './App.css';
import NextButton from '../NextButton/NextButton';
import Feelings from '../Feelings/Feelings'
import Support from '../Support/Support';
import Comments from '../Comments/Comments'
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';
import { HashRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <hr />
          <main className="App">
            <Route Feelings path="/feelings" component={Feelings} />
            <Route Understanding path="/understanding" component={Understanding} />
            <Route Support path="/support" component={Support} />
            <Route Comments path="/comments" component={Comments}/>
            <NextButton />
            <Review />

           

          </main>
        </Router>
        <br/>
      </div>
    );
  }
}

export default App;
