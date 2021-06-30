import { withRouter } from 'react-router-dom';
import './menu-list.style.scss';

const Menulist = ({title, imageurl, size, history, match, linkurl}) => (

  <div className={` ${size} menu-iteam`} > 
    <div  className="background-image"
       style={{ backgroundImage:`url(${imageurl})` }}
      /> 
        <div className="content"
         onClick ={() => history.push(`${match.url}${linkurl}`)}>
            <h1 className="title"> {title.toUpperCase()} </h1>
            <span className="subtitle">shop now</span>
        </div>
        </div> 
)

export default withRouter(Menulist);