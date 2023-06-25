import React from "react";

export default function Sale (){
    return(
        <div>
            <a>
                <img src={require('../../../assets/sale1.jpg')} style={styled.imgSaleBig}/>
            </a>
            <div style={{marginLeft: window.innerWidth*0.1,justifyContent: 'space-between',marginTop: 30}}>
                <a>
                    <img src={require('../../../assets/sale2.jpg')} style={styled.imgSaleSmall}/>
                </a>
                <a style={{marginLeft: window.innerWidth*0.04}}>
                    <img src={require('../../../assets/sale3.jpg')} style={styled.imgSaleSmall}/>
                </a>
            </div>
        </div>
    )
}
const styled={
    imgSaleBig : {
        height: window.innerHeight*0.7,
        width : window.innerWidth*0.8,
        borderRadius: 20,
        marginLeft: window.innerWidth*0.1
    },
    imgSaleSmall:{
        height: window.innerHeight*0.33,
        width : window.innerWidth*0.38,
        borderRadius: 20,
    }
}
