export default function ProductItemBox({
    title,
    image,
    wrapperClassList,
    imageClassList
}){
    return (
        <div className='relative'>
            <div className={`w-[125px] h-[116px] flex content-center items-center overflow-hidden ${wrapperClassList && wrapperClassList}`}>
                <img src={image} alt="" className={`max-w-full h-auto scale-150 ${imageClassList && imageClassList}`}/>
            </div>
            <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>{title}</span>
        </div>
    )
}