import React from "react";
import { Slide } from "react-slideshow-image";

export default function SlideImg(){
    return(
        <div style={{alignSelf: 'center',width:window.innerWidth*0.83,marginLeft: window.innerWidth*0.085}}>
            <Slide>
        <div style={{alignItems: 'center'}}>
           <img style={styles.imgStyle} src={require('../../../assets/slide1.jpg')}/>
        </div>
        <div style={styles.imgSlide}>
            <img style={styles.imgStyle} src={require('../../../assets/slide2.jpg')}/>
        </div>
        <div style={styles.imgSlide}>
            <img style={styles.imgStyle} src={require('../../../assets/slide3.jpg')}/>
        </div>
    </Slide>
        </div>
        
    )
}
const styles={
    imgSlide:{
        alignItems: 'center',justifyContent: 'center'
    },
    imgStyle:{
        height : window.innerHeight*0.7,
        with : window.innerWidth*0.5,
        borderRadius: 20
    }
}