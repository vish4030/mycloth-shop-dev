
import './menu-list.style.scss';

const Menulist = ({title, imgurl, size}) => (

  <div className={` ${size} menu-iteam`} > 
    <div  className="background-image"
       style={{ backgroundImage:`url(${imgurl})` }}
      /> 
        <div className="content">
            <h1 className="title"> {title.toUpperCase()} </h1>
            <span className="subtitle">shop now</span>
        </div>
        </div> 
)

export default Menulist;