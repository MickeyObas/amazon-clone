import { starFull } from "../assets/images/images"

export default function StarRating(){
    return (
        <div className="rating flex max-w-full h-6 items-center">
            <img src={starFull} className="h-4"/>
            <img src={starFull} className="h-4"/>
            <img src={starFull} className="h-4"/>
            <img src={starFull} className="h-4"/>
            <img src={starFull} className="h-4"/>
        </div>
    )
}