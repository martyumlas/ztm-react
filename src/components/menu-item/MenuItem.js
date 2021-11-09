import './MenuItem.scss'
import { useNavigate } from 'react-router'


const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    let navigate = useNavigate()
    return (
        <div className={`menu-item ${size}`} onClick={() => navigate(linkUrl)}>
            
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} ></div>

            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
           
    )
}

export default MenuItem
