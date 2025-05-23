import PropTypes from 'prop-types';
import ProductItemBox from "./ProductItemBox"

export default function ProductItemGrid({
    title,
    cta,
    productItemArray,
    extraClass
}){
    return (
        <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
            <h2 className='text-[23px] leading-[1.2] font-semibold mb-3'>{title}</h2>
            <div className='inner-content grid grid-cols-2 gap-3 gap-y-9'>
                {productItemArray.map((product, idx) => (
                    <ProductItemBox 
                        key={idx}
                        title={product.title}
                        image={product.image} 
                        extraClass={extraClass}
                    />
                ))}
            </div>
            <a href="" className='text-[13px] mt-auto text-blue-800'>{cta}</a>
        </div>
    )
}

ProductItemGrid.propTypes = {
    title: PropTypes.string,
    cta: PropTypes.string,
    productItemArray: PropTypes.array,
    extraClass: PropTypes.object
}

/* 
const extraClass = {
    wrapper:'Some extra stuff for the wrapper',
    image: 'Some extra stuff for the image'
}

const productItemArray = [
    {
        title:'Title',
        image:'link-to-image',
        wrapperClassList: null,
        imageClassList: null
    }
]
*/