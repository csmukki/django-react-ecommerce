import React from 'react';
import {connect} from 'react-redux';

import "./directory.styles.scss";

import {setSection} from '../../redux/section/section.actions';

import {apiEndpoint} from '../../config/config.json';

import MenuItem from '../directory-menu/menu-item.component';

class Directory extends React.Component {

    async componentDidMount() {
        const {setSection} = this.props;
        try {
            await fetch(apiEndpoint)
                .then(response => response.json())
                .then(data => setSection(data));
        }catch(error) {
            alert("ERROR... cdm");
        }
    }

    render() {
        return(
            <div className="directory">
                {
                    this.props.sections.map(({id, ...rest}) => (
                        <MenuItem key={id} {...rest} />
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = ({section : {sections}}) => ({
    sections
});


const mapDispatchToProps = dispatch => ({
    setSection: section => dispatch(setSection(section))
});

export default connect(mapStateToProps, mapDispatchToProps)(Directory);