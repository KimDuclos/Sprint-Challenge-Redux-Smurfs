import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class AddForm extends Component {
    constructor() {
        super();
        // initial state of shown data
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    // set state to user input
    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    // user submit input handler
    submitHandler = (e) => {
        e.preventDefault()
        this.props.addSmurf(this.state)
     }

    render() {
        return (  // FORM TO ENTER A NEW SMURF
            <form onSubmit={this.submitHandler}>
                <h2>Smurf a Smurf!</h2>
                <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Smurf"/>
                <input type="text" name="age" value={this.state.age} onChange={this.inputHandler} placeholder="Age"/>
                <input type="text" name="height" value={this.state.height} onChange={this.inputHandler} placeholder="Height"/>
                <button type="submit">Smurfy Update</button>
            </form>
        )
    }
}

// select needed data
const mapStateToProps = () => {
    return {
    } 
}

// connect component to Redux store
export default connect(mapStateToProps, {addSmurf}) (AddForm);