import React from "react";
import './css/home.css';
import {Link,NavLink} from 'react-router-dom'
import hi from './img/as.png'

function HomeNav(){
    return(
        <div className="type">
                    <NavLink className='link' to='/grocery'>
                        <img className="img1" src={hi}/>
                        <div>Grocery</div>
                        </NavLink>
                    <Link className='link' style={{textDecoration:'none'}} to='/mobile'>
                        <img className="img1" src={hi}/>
                        <div>Grocery</div>
                    </Link>
                    <Link className='link' to='fashion'>
                        <img className="img1" src={hi}/>
                        <div>Grocery</div>
                    </Link>
                    <Link className='link' to='/electronics'>
                    <img className="img1" src={hi}/>
                        <div>Grocery</div>
                    </Link>
                    <Link className='link' to='/home'>
                    <img className="img1" src={hi}/>
                        <div>Grocery</div>
                    </Link>
                    <Link className='link' to='/app'>
                    <img className="img1" src={hi}/>
                        <div>Grocery</div>
                    </Link>
                    <Link className='link' to='/travel'>
                    <img className="img1" src={hi}/>
                        <div>Grocery</div>
                    </Link>
                    <Link className='link' to='/top'>
                    <img className="img1" src={hi}/>
                        <div>Grocery</div>
                    </Link>
                    <Link className='link' to='/top'>
                    <img className="img1" src={hi}/>
                        <div>Grocery</div>
                    </Link>
                    
                </div>
    )
}

export default HomeNav