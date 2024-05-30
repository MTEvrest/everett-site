import React from "react";
import Coin from '../assets/imgs/ECoin.png';

const CoinImg = (xCoord: number, yCoord: number) => {
    return(
        <img
            style={{transform: `translate(${xCoord}px, ${yCoord}px)`, position: 'absolute', left: -32,
        top: -32,}} 
            src={Coin}
          />
    )
}

export default CoinImg;