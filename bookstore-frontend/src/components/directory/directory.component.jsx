import React from 'react';
import {connect} from 'react-redux';

import {setSection} from '../../redux/section/section.actions';


class Directory extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <div className="directory">
                <h2>Directory Menu</h2>
            </div>
        );
    }
}

const mapStateToProps = ({section : {section}}) => ({
    section 
});


const mapDispatchToProps = dispatch => ({
    setSection: section => dispatch(setSection(section))
});

export default connect(mapStateToProps, mapDispatchToProps)(Directory);