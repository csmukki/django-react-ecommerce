import React from 'react';
import {connect} from 'react-redux';

import "./directory.styles.scss";

import {setSection} from '../../redux/section/section.actions';


import { getSections } from '../../services/fakeSectionService';
import MenuItem from '../directory-menu/menu-item.component';

class Directory extends React.Component {

    componentDidMount() {
        const {setSection} = this.props;
        setSection(getSections());
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