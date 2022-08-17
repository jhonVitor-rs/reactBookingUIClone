import "./featured.css"

const Featured = () => {
    return(
        <div className="featured">
            <div className="featuredItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/city/square250/349399.webp?k=6f023ae905561a547be6cc5cb117571b4a1425b633e767cdbbf797bb5225dd18&o="
                    alt="" 
                    className="featuredImg"
                />
                <div className="featuredTiles">
                    <h1>Gramado</h1>
                    <h2>1683 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/city/square250/653621.webp?k=7d0330a52ee7350d5d38c6cbdf7349f4798889706117e38e74f04e631e09b31b&o="
                    alt="" 
                    className="featuredImg"
                />
                <div className="featuredTiles">
                    <h1>Porto de Galinhas</h1>
                    <h2>1405 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/city/square250/653641.webp?k=29b8706ee4bff7b870ca35a698c5ac4be003b4122b00035a9d4a572d3101b1fe&o="
                    alt="" 
                    className="featuredImg"
                />
                <div className="featuredTiles">
                    <h1>Rio de Janeiro</h1>
                    <h2>5006 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured