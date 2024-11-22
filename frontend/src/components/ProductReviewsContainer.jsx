import { user } from "../assets/images/images";
import { formatDate } from "../utils";
import ProductRating from "./ProductRating";

export default function ProductReviewsContainer({reviews}){
    return (
        <div className="flex flex-col">
            <h2 className="font-semibold text-lg mt-3 mb-6">Top reviews from Konoha Village</h2>
            <div className="flex flex-col">
                {reviews.map((review, idx) => (
                    <div key={idx} className="review-container flex flex-col mb-7">
                    <div className="flex items-center mb-1.5">
                        <img src={user} alt="" className="h-8"/>
                        <span className="text-[13px] ms-3.5">
                            {review.user.first_name + " " + (review.user.last_name && review.user.last_name)}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <ProductRating 
                            className={"me-3 my-1"}
                            avgRating={review.rating}
                            starHeight={"14px"}
                        />
                        {review.heading && (
                            <span className="font-semibold text-sm">
                            {review.heading}
                        </span>
                        )}
                    </div>
                    <span className="text-sm text-slate-500 mb-1">Reviewed in Konoha Village on {formatDate(review.created_at)}</span>
                    <span className="text-xs text-red-600 mb-1">Verified Purchase</span>
                    <div className="review-text max-w-[70%] text-sm">
                        {review.review}
                    </div>
                    <div className="flex flex-col mt-2">
                        <div className="text-sm text-slate-500">
                            One person found this helpful
                        </div>
                        <div className="flex mt-2 items-center gap-x-4">
                            <button className="text-sm border border-slate-600  rounded-full px-6 py-1">Helpful</button>
                            <div className="h-3/5 w-[1px] bg-slate-300"></div>
                            <button className="text-sm text-slate-600  rounded-full py-1">Report</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}