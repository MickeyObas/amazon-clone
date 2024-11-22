import PropTypes from 'prop-types';

export default function ProductRatingsContainer({ratings}){
    if (!ratings) return <div>Loading</div>
    return (
        <div className="ratings mt-4 flex gap-y-3 flex-col">
            <div className="rating-container flex items-center gap-x-4">
                <span className="text-sm text-slate-500">5 star</span>
                <div className="rating-bar-container w-[220px] h-5 relative flex">
                    <div 
                        className={`rating-bar h-full bg-[#ff9d14] py-1 rounded-s-[4px] ${ratings['5'] === 0 ? 'border-[1.3px] border-slate-400 rounded-s-[4px]' : ''}`}
                        style={{width: `${ratings['5']}%`}}
                        >
                    </div>
                    <div className="rating-bar-empty h-full flex-1 py-1 border-[1.5px] border-s-0 border-slate-400 rounded-e-[4px]"></div>
                </div>
                <span className="text-sm text-slate-500">{ratings['5']}%</span>
            </div>
            <div className="rating-container flex items-center gap-x-4">
                <span className="text-sm text-slate-500">4 star</span>
                <div className="rating-bar-container w-[220px] h-5 relative flex">
                    <div 
                        className={`rating-bar h-full bg-[#ff9d14] py-1 rounded-s-[4px] ${ratings['4'] === 0 ? 'border-[1.3px] border-slate-400 rounded-s-[4px]' : ''}`}
                        style={{width: `${ratings['4']}%`}}
                        >
                    </div>
                    <div className="rating-bar-empty h-full flex-1 py-1 border-[1.5px] border-s-0 border-slate-400 rounded-e-[4px]"></div>
                </div>
                <span className="text-sm text-slate-500">{ratings['4']}%</span>
            </div>
            <div className="rating-container flex items-center gap-x-4">
                <span className="text-sm text-slate-500">3 star</span>
                <div className="rating-bar-container w-[220px] h-5 relative flex">
                    <div 
                        className={`rating-bar h-full bg-[#ff9d14] py-1 rounded-s-[4px] ${ratings['3'] === 0 ? 'border-[1.3px] border-slate-400 rounded-s-[4px]' : ''}`}
                        style={{width: `${ratings['3']}%`}}
                        >
                    </div>
                    <div className="rating-bar-empty h-full flex-1 py-1 border-[1.5px] border-s-0 border-slate-400 rounded-e-[4px]"></div>
                </div>
                <span className="text-sm text-slate-500">{ratings['3']}%</span>
            </div>
            <div className="rating-container flex items-center gap-x-4">
                <span className="text-sm text-slate-500">2 star</span>
                <div className="rating-bar-container w-[220px] h-5 relative flex">
                    <div 
                        className={`rating-bar h-full bg-[#ff9d14] py-1 rounded-s-[4px] ${ratings['2'] === 0 ? 'border-[1.3px] border-slate-400 rounded-s-[4px]' : ''}`}
                        style={{width: `${ratings['2']}%`}}
                        >
                    </div>
                    <div className="rating-bar-empty h-full flex-1 py-1 border-[1.5px] border-s-0 border-slate-400 rounded-e-[4px]"></div>
                </div>
                <span className="text-sm text-slate-500">{ratings['2']}%</span>
            </div>
            <div className="rating-container flex items-center gap-x-4">
                <span className="text-sm text-slate-500">1 star</span>
                <div className="rating-bar-container w-[220px] h-5 relative flex">
                    <div 
                        className={`rating-bar h-full bg-[#ff9d14] py-1 rounded-s-[4px] ${ratings['1'] === 0 ? 'border-[1.3px] border-slate-400 rounded-s-[4px]' : ''}`}
                        style={{width: `${ratings['1']}%`}}
                        >
                    </div>
                    <div className="rating-bar-empty h-full flex-1 py-1 border-[1.5px] border-s-0 border-slate-400 rounded-e-[4px]"></div>
                </div>
                <span className="text-sm text-slate-500">{ratings['1']}%</span>
            </div>
        </div>
    )
}

ProductRatingsContainer.propTypes = {
    ratings: PropTypes.object
}