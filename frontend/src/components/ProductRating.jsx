import { starFill, starEmpty, starHalf} from "../assets/images/images"

export default function ProductRating({avgRating, starHeight, className}){
    const roundedRating = Math.round((avgRating * 2)) / 2;
    const filledStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);
    return (
        <div className={`flex ${className}`}>
            {[...Array(filledStars)].map((_, idx) => (
                <i key={`fill-${idx}`}className="fas fa-star text-yellow-500" style={{fontSize: `${starHeight}`}}></i>
            ))}
            {hasHalfStar && (
                <i className="fas fa-star-half-alt text-yellow-500" style={{fontSize: `${starHeight}`}}></i>
            )}
            {[...Array(emptyStars)].map((_, idx) => (
                <i key={`empty-${idx}`} className="far fa-star text-gray-300" style={{fontSize: `${starHeight}`}}></i>
                
            ))}
        </div>
    )
}