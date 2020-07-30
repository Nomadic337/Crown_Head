import React from 'react';
import MenuItem from '../Menu-Item/Menu-Item';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../Redux/Directory/DirectorySelectors';
import { createStructuredSelector } from 'reselect';
import './Directory.scss';

const Directory = ({ sections }) => (
            <div className='directory-menu'>
                {sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={ id } { ...otherSectionProps }/>
                ))}
            </div>        
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);