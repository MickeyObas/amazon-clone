import 'react-range-slider-input/dist/style.css';

import ProductResultBox from '../../components/ProductResultBox';
import ResultSidebar from '../../components/ResultSidebar';
import { products } from '../../products';
import { useCategory } from '../../context/CategoryContext';
import { useEffect, useState } from 'react';
import { fetchWithAuth } from '../../utils';

export default function Results(){

    

    return (
        <div className="results-container">
            <div className="p-2 shadow-md border border-b-slate-300">
                <h2 className="text-sm font-medium">1-48 of over 30,000 results for <span className="text-red-500">"Dinnerware & accessories"</span></h2>
            </div>
            <div className="results-inner-container grid grid-cols-1 md:grid-cols-5 py-3 px-4">
                {/* Filters Sidebar */}
                <ResultSidebar />
                <div className="results-content md:col-span-4">
                    <h1 className="text-xl font-bold">Results</h1>
                    <p className="text-sm text-slate-600">Check each product page for other buying options. Price and other details may vary based on product size and color.</p>
                    {renderProducts(products)}
                </div>
            </div>
        </div>
    )
}

const groupProducts = (products) => {
    const groupedProducts = [];
    let endIdx = 0;
    for(let i=0; i < products.length; i+=4){
        endIdx += 4;
        groupedProducts.push(products.slice(i, endIdx))
    }
    return groupedProducts;
}

const renderProducts = (products) => {
    const rows = groupProducts(products);

    return (
        <div className="inner-content py-1">
            {rows.map((row, rowidx) => (
                <div key={rowidx} className="row flex gap-2 mb-2">
                    {row.map((product, productidx) => (
                        <ProductResultBox 
                            key={productidx}
                            image={product.image}
                            description={product.description}
                            stock={product.stock}
                            priceMain={product.priceMain}
                            priceSub={product.priceSub}
                        />
                    ))}
                </div>
            ))}
        </div>
    )

}