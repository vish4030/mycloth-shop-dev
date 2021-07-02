
import React from 'react';
import { useSelector } from 'react-redux';


import { selectDirectorySection } from '../../redux/directory/directory.select';
import Menulist from '../menu-list/menu-list.component';
import './directory.style.scss';


const  Directory = () => {
   
   const section = useSelector( state => selectDirectorySection(state) )
 

        return(
            <div className="directory-menu">
             { section.map( ({ id, ...otherSectionProps}) => (
                  <Menulist key={id} {...otherSectionProps} />
              ))}
           </div>
        )
    }


export default Directory;