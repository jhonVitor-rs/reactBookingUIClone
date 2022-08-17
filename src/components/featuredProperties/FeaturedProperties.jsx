import './featuredProperties.css'

const FeaturedProperties = () => {
    return(
        <div className='fp'>
            <div className="fpItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/hotel/square250/227683814.webp?k=446c142ec9f06d270921f26d21df952a01cf9ec2ee2c754fcadc8bfda3f2e515&o="
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Four Seasons Hotel Sydney</span>
                <span className="fpCity">Sidney</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpReating">
                    <button>9.1</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/hotel/square250/364215448.webp?k=6c163ea706a6ebfaa07a61d7222518332f2d7010db26cf680d0443149419835c&o="
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">NYX Hotel Warsaw by Leonardo Hotels</span>
                <span className="fpCity">New York</span>
                <span className="fpPrice">Starting from $110</span>
                <div className="fpReating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/hotel/max300/251492532.webp?k=7bdeb833a969451e40ba4850d260397bb15afda173cc134c43fd41261e8f46b8&o="
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Hilton Grand Vacations Club Ocean Enclave Myrtle Beach</span>
                <span className="fpCity">Downtown Myrtle Beach</span>
                <span className="fpPrice">Starting from $90</span>
                <div className="fpReating">
                    <button>9.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/hotel/max300/265825241.webp?k=ad421b60cb796d604463bf2ef2c1c1141ff0536d82338f2dd672c86e99253ac1&o="
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">House By The Beach</span>
                <span className="fpCity">Eilat, Israel</span>
                <span className="fpPrice">Starting from $80</span>
                <div className="fpReating">
                    <button>9.0</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties