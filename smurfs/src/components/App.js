import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import Smurf from './Smurf';
import AddForm from './AddForm';

import { getSmurfs } from '../actions';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        {/* <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        { this.props.fetchSmurfs ? // need to add timeout to show
          <h2>Loading Smurfy Data...</h2> : null }
      

        {/* calls form, adds heading and provided data */}
        <AddForm /> 
        <h2>Smurf Village Smurfs</h2>

        
        {/* shows a smurf from the data on load */}
        { this.props.smurfs.map( (smurf, i) => 
          <Smurf smurf={smurf} key={smurf.id} /> 
          ) 
        }
      </div>
    );
  }
}


// select needed data
const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchSmurfs: state.fetchSmurfs
});

// connect to Redux store
export default connect(mapStateToProps, { getSmurfs })(App);
