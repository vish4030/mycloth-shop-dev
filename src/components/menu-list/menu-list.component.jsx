import { withRouter } from 'react-router-dom';
import './menu-list.style.scss';

const Menulist = ({title, imageUrl, size, history, match, linkUrl}) => (

  <div className={` ${size} menu-iteam`} > 
    <div  className="background-image"
       style={{ backgroundImage:`url(${imageUrl})` }}
      /> 
        <div className="content"
         onClick ={() => history.push(`${match.url}${linkUrl}`)}>
            <h1 className="title"> {title.toUpperCase()} </h1>
            <span className="subtitle">shop now</span>
        </div>
        </div> 
)

export default withRouter(Menulist);