
import React from 'react';
import Menulist from '../menu-list/menu-list.component';
import './directory.style.scss';


class Directory extends React.Component {
    constructor(){
        super()
        this.state = {
            section: [{
              title:'hat',
              imgurl:'https://i.ibb.co/c3XvV1b/hat.jpg',
              linkurl:'hats',
              id:1
            },
            {
                title:'jaket',
                imgurl:'https://i.ibb.co/C87W21z/jacket.jpg',
                linkurl:'',
                id:2
              },
              {
                title:'shirt',
                imgurl:'https://i.ibb.co/1Qd4SNg/shirt.jpg',
                linkurl:'',
                id:3
              },
              {
                title:'men',
                imgurl:'https://i.ibb.co/HpFpJzk/man.jpg',
                size:'large',
                linkurl:'',
                id:4
              },
              {
                title:'women',
                imgurl:'https://i.ibb.co/wSBmqFq/girl.jpg',
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