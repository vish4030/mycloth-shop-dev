
import React from 'react';
import Menulist from '../menu-list/menu-list.component';
import './directory.style.scss';


class Directory extends React.Component {
    constructor(){
        super()
        this.state = {
            section: [{
              title:'hat',
              imageurl:'https://i.ibb.co/ZYW3VTp/brown-brim.png',
              linkurl:'hats',
              id:1
            },
            {
                title:'snaker',
                imageurl:'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                linkurl:'',
                id:2
              },
              {
                title:'jakets',
                imageurl:'https://i.ibb.co/XzcwL5s/black-shearling.png',
                linkurl:'',
                id:3
              },
              {
                title:'men',
                imageurl:'https://i.ibb.co/xJS0T3Y/camo-vest.png',
                size:'large',
                linkurl:'',
                id:4
              },
              {
                title:'women',
                imageurl:'https://i.ibb.co/7CQVJNm/blue-tank.png',
                linkurl:'',
                size:'large',
                id:5
              }
        ]
        }
    }
 
    render(){
        return(
            <div className="directory-menu">
             { this.state.section.map( ({ id, ...otherSectionProps}) => (
                  <Menulist key={id} {...otherSectionProps} />
              ))}
           </div>
        )
    }
 }

export default Directory;