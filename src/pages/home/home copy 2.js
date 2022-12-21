import React from "react";
import '../css/home.css';
import {Link} from 'react-router-dom';

function Home2(){
    return(
        <div className="st">
            <div className="Nav">
                <div className="flipkart"><h3>Flipkart2</h3></div> 
                <input value="type" type="text"/>  
                <div className="input1"></div>             
            </div>
            <div className="body">
                <div className="type">
                    <Link to='/grocery'>Grocery</Link>
                    <Link to='/mobile'>Mobile</Link>
                    <Link to='fashion'>Fashion</Link>
                    <Link to='/electronics'>Electronics</Link>
                    <Link to='/home'>Home</Link>
                    <Link to='/app'>Appliances</Link>
                    <Link to='/travel'>Travel</Link>
                    <Link to='/top'>Top Offers</Link>
                    <div>Beauty,Toys&More</div>
                    <div>Two wheelers</div>
                </div>
                <div className="slides"></div>
            </div>
            <div className="footer">Footer</div>
        </div>
    )
}

export default Home2