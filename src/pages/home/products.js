import React from "react";
import './css/products.css';
import ProductA from "./product-a";

function Products(){
    return(
        <div className="dada">
            <div className="dad">
                <h2>Top Offers</h2>
                <button>VIEW ALL</button>
                <div className="real"></div>
            </div>
            <div className="chacha">
                <ProductA/>
                <ProductA/>
                <ProductA/>
                <ProductA/>
                <ProductA/>
                <ProductA/>
            </div>
            <div className="uncle"></div>
        </div>
    )
}

export default Products;