import React from 'react'
import "./App.css";
function Storis() {
    const [state, setstate] = React.useState([
        {id:1, image: '/images/images.png', name: 'logo'},
        {id:2, image: '/images/images1.png', name: 'logoo'},
        {id:3, image: '/images/images2.png', name: 'logoo'},
        {id:4, image: '/images/images3.png', name: 'logooo'},
        {id:5, image: '/images/images4.png', name: 'lllogo'},
        {id:1, image: '/images/images.png', name: 'logo'},
        {id:2, image: '/images/images1.png', name: 'logoo'},
        {id:3, image: '/images/images2.png', name: 'logoo'},
        {id:4, image: '/images/images3.png', name: 'logooo'},
        {id:5, image: '/images/images4.png', name: 'lllogo'},
    ])
    return (
        <div className="storis">
        {state.map((user)=>(
            <div className="stories__info">
            <div className="stories__img"><span>
                <img src={user.image} alt="images" />
            </span>
            </div>
            
            <div className="stories__name">{user.name}</div>
            </div>
        ))}
        </div>
    
    )
}

export default Storis;