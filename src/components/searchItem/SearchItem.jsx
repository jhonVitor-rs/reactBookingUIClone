import { useNavigate } from "react-router-dom"
import "./searchItem.css"

const SearchItem = () => {
    const navigate = useNavigate()
    const handleSearch = () => {
        navigate("/hotels/id")
    }

    return(
        <div className="searchItem" onClick={handleSearch}>
            <img 
                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" 
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airpot taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio # 1 bathroom # 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today
                </span>
            </div>
            <div className="siDetail">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <sapn className="siPrice">$123</sapn>
                    <span className="siTaxiOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See avilability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem