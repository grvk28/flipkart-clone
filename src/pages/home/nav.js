import React from "react";
import './css/home.css';
import {NavLink, Link} from 'react-router-dom';
import { useState } from "react";

function Nav(){
   // const [style, setStyle] = useState({display: 'none'});
    return(
        <div className="Nav">
             <div className="flipkart" style={{marginLeft:'4%'}}>
                <div className="nav10">
                    <h3>Flipkart</h3>
                    <Link className="nav11" >Explore plus</Link>
                </div>
             </div> 
             <input className="input1" style={{padding:'0.5%',width:'32%',borderColor:"white",height:'20px',border:'none'}}value="" placeholder="Search for Products, Brands and More" type="text"/> 
             <Link className="btn" >
                <div className="btn11">Login</div>
                <div className="hon">
                    <div className="hon-a"></div>
                    <Link className="hon-c" style={{width:'80%'}}>New Customer? Sign Up</Link>
                    <Link className="hon-c">My Profile</Link>
                    <Link className="hon-c">Flipkart Plus Zone</Link>
                    <Link className="hon-c">Order</Link>
                    <Link className="hon-c">Wishlist</Link>
                    <Link className="hon-c">Rewards</Link>
                    <Link className="hon-c">Gift Cards</Link>
                </div>
                </Link> 
             
                              
            <div className="nav1">
                <Link to='/login' className="sell"><div>Become a Seller</div></Link> 
                <Link to='/login' className="sell1">
                    <div className="more">
                        <div>More</div>
                        <div className="more1">
                        <div className="hon-a"></div>
                        <Link className="hon-d">Ghfgg</Link>
                        <Link className="hon-d">Gyytrt</Link>
                        <Link className="hon-d">Grtdyr</Link>
                        <Link className="hon-d">Gtfrtyt</Link>
                        </div>
                    </div>
                </Link> 
                <Link to='/login' className="sell"><div>Cart</div></Link>     
            </div>      

                
                         
        </div>
    )
}

export default Nav