import React, {Component} from 'react';
import { connect } from 'react-redux';

// STRETCH
// import Edit from './Edit';
// import Delete from './Delete';

class Smurf extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (  // add Smurfin' data to the list based on user input.
            // added styling to remove bullet points
            <ul style={{listStyleType: "none"}}> 
                <li>{this.props.smurf.name}</li>
                <li>{this.props.smurf.age}</li>
                <li>{this.props.smurf.height}</li>
            </ul>
        );
    }
}


// select data
const mapStateToProps = () => {
    return {}
}

// connect React component to Redux store
export default connect(mapStateToProps)(Smurf);