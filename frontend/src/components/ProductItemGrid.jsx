import ProductItemBox from "./ProductItemBox"

export default function ProductItemGrid({
    title,
    cta,
    productItemArray
}){
    return (
        <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
            <h2 className='text-[23px] font-semibold mb-3'>{title}</h2>
            <div className='inner-content grid grid-cols-2 gap-3 gap-y-9'>
                {productItemArray.map((product, idx) => (
                    <ProductItemBox 
                    key={idx}
                    title={product.title}
                    image={product.image} />
                ))}
            </div>
            <a href="" className='text-[13px] mt-auto text-blue-800'>{cta}</a>
        </div>
    )
}

/*
const productItemArray = [
    {
        title:'Title',
        image:'link-to-image',
        wrapperClassList: null,
        imageClassList: null
    }
]
*/