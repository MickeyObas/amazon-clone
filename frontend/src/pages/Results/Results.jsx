import 'react-range-slider-input/dist/style.css';

import ProductResultBox from '../../components/ProductResultBox';
import ResultSidebar from '../../components/ResultSidebar';
import { products } from '../../products';
import { useCategory } from '../../context/CategoryContext';
import { useEffect, useState } from 'react';
import { fetchWithAuth, getMoneyParts } from '../../utils';
import { useLocation } from 'react-router-dom';
import { noProducts } from '../../assets/images/images';

export default function Results(){

    const { selectedCategory } = useCategory();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const q = queryParams.get('q');
    const c = queryParams.get('c');

    let categoryTitle;
    if(selectedCategory){
        categoryTitle = selectedCategory.split("-")[0];
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetchWithAuth(`http://localhost:8000/api/products/${location.search}`)
                if(!response.ok){
                    if(response.status === 404){
                        setError(true);
                    } else{
                        console.log("Something went wrong");
                    }
                }else{
                    const data = await response.json();
                    setProducts(data);
                }
            } catch(err){
                setError(true);
                console.log("Error: ", err);
            } finally{
                setLoading(false);
            }
        }

        fetchProducts();

    }, [location.search])

    // Result Filters
    const [selectedBrands, setSelectedBrands] = useState([]); 
    const [priceRange, setPriceRange] = useState({min: 0, max: 0});
    const [selectedPriceRange, setSelectedPriceRange] = useState([]);

    const brands = Array.from(new Set(products.map((product) => product.brand).filter(Boolean)));

    useEffect(() => {
        if (products.length > 0) {
            const prices = products.map((product) => product.price);
            const minPrice = Math.round(Math.min(...prices)) - 10;
            const maxPrice = Math.round(Math.max(...prices)) + 10;
            setPriceRange({min: minPrice, max: maxPrice})
        }
    }, [products]);

    const handleBrandSelection = (brand) => (
        setSelectedBrands((prev) => (
            prev.includes(brand) ? 
                prev.filter((b) => b !== brand) :
                [...prev, brand]
        ))
    )

    const handlePriceRangeSelection = (priceRange) => {
        setSelectedPriceRange(priceRange);
    }

    const filteredProducts = products.filter((product) => {
        const matchesBrand = selectedBrands.length === 0 | selectedBrands.includes(product.brand);
        const matchesPrice = selectedPriceRange.length === 0 || (product.price >= selectedPriceRange[0]) && (product.price <= selectedPriceRange[1]);

        return matchesBrand && matchesPrice;
    })


    return (
        <div className="results-container max-w-full">
            <div className="p-2 shadow-md border border-b-slate-300">
                <h2 className="text-sm font-medium">1-{products.length} of {products.length} results for <span className="text-red-500">"{categoryTitle || q || "All"}"</span></h2>
            </div>
            <div className="results-inner-container grid grid-cols-1 md:grid-cols-5 py-3 px-4 max-w-full">
                {/* Filters Sidebar */}
                <ResultSidebar 
                    brands={brands}   
                    selectedBrands={selectedBrands}
                    handleBrandSelection={handleBrandSelection}
                    handlePriceRangeSelection={handlePriceRangeSelection}
                    priceRange={priceRange}
                    />
                <div className="results-content md:col-span-4 max-w-full">
                    <h1 className="text-xl font-bold">Results</h1>
                    <p className="text-sm text-slate-600">Check each product page for other buying options. Price and other details may vary based on product size and color.</p>
                    {renderProducts(filteredProducts)}
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
    if (products.length === 0){
        return (
            <div className='h-2/5 flex justify-center items-center flex-col'>
                <img src={noProducts} alt="" className='h-60 opacity-5'/>
                <h5 className='text-red-500 text-sm'>Uh-oh. It appears no products match this query</h5>
            </div>
        )
    }
    const rows = groupProducts(products);

    return (
        <div className="inner-content py-1 max-w-full">
            {rows.map((row, rowidx) => (
                <div key={rowidx} className="row flex items-stretch gap-2 mb-2">
                    {row.map((product, productidx) => (
                        <a key={productidx} href={`/product/${product.id}`}>
                        <ProductResultBox 
                            image={product.picture}
                            description={product.description}
                            stock={product.stock}
                            priceMain={getMoneyParts(product.price).integerPart}
                            priceSub={getMoneyParts(product.price).decimalPart}
                        />
                        </a>
                    ))}
                </div>
            ))}
        </div>
    )

}