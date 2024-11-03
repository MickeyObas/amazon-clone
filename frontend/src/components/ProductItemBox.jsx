import PropTypes from 'prop-types';

export default function ProductItemBox({
    title,
    image,
    extraClass
}){
    return (
        <div className='relative'>
            <div className={`w-[125px] ${extraClass?.wrapper ? extraClass.wrapper.ratio.height : 'h-[116px]'} flex content-center items-center overflow-hidden`}>
                <img src={image} alt="" className={`max-w-full h-auto scale-150 ${extraClass?.image && extraClass?.image}`}/>
            </div>
            <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>{title}</span>
        </div>
    )
}

ProductItemBox.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    extraClass: PropTypes.object
}