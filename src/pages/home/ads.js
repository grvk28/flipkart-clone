import React from "react";
import './css/home.css';
import gk from './img/2.png';
import {Link} from 'react-router-dom'

function Ads(){
    return(
        <div className="ads">
        <Link >
            <img className="ads1" src={gk} />
        </Link>
        <Link >
            <img className="ads1" src={gk} />
        </Link>
        <Link >
            <img className="ads1" src={gk} />
        </Link>
        </div>
    )
}

export default Ads;
