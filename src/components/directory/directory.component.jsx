
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
              id:1
            },
            {
                title:'jaket',
                imgurl:'https://i.ibb.co/C87W21z/jacket.jpg',
                id:2
              },
              {
                title:'shirt',
                imgurl:'https://i.ibb.co/1Qd4SNg/shirt.jpg',
                id:3
              },
              {
                title:'men',
                imgurl:'https://i.ibb.co/HpFpJzk/man.jpg',
                size:'large',
                id:4
              },
              {
                title:'women',
                imgurl:'https://i.ibb.co/wSBmqFq/girl.jpg',
                size:'large',
                id:5
              }
        ]
        }
    }
 
    render(){
        return(
            <div className="directory-menu">
             { this.state.section.map( ({title, id, imgurl, size}) => (
                  <Menulist key={id} title={title} imgurl ={imgurl} size={size} />
              ))}
           </div>
        )
    }
 }

export default Directory;