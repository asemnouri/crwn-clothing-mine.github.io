import React from 'react';
import './directory-menu.scss'
import {connect } from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect';
 
import MenuItem from '../menu-item/menu-item'


const  DirectoryMenu =({sections})=> {

  return (
    <div className=" directory-menu ">
        {
            sections.map(({id,...otherProps})=>(
                <MenuItem  key={id} {...otherProps} />
            ))
        }
        </div>
  );
}
const mapStateToProps= createStructuredSelector({
  sections: selectDirectorySections,
  });

export default connect(mapStateToProps)(DirectoryMenu);