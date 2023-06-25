
import React, {useState} from "react";
import 'react-slideshow-image/dist/styles.css';
import SlideImg from "./Slide/index";
import ARRIVAL from "./Arrival/index";
import Sale from "./Sale";
import Gallery from "./Gallery";

const moke ={
    color: "",
    nameArrival: "",
    img: "",
    liked: "",
    added: false
}
function Home() {
    return(
        <div style={styles.container}>
            <div style={{alignSelf:'center'}}>
               <SlideImg/>
            </div>
            <div>
                <ARRIVAL content={"NEW ARRIVAL"} link={""} data={moke}/>
                <ARRIVAL content={"BEST SELLER  "} link={""} data={moke}/>
            </div>
            <div>
               <Sale/>
            </div>
            <div>
                <Gallery/>
            </div>
            <div style={{height: 1,backgroundColor: 'black',width:window.innerWidth*0.9,marginTop: 40}}/>
        </div>
    )
}
const styles={
    container : {
        flex : 1,
        marginTop: 20,
    },
    leftSide :{
        width: window.innerWidth*0.35,
        backgroundColor: 'violet'
    },
    rightSide :{},
    imgSlide:{
        height:  window.innerHeight*0.7,

    }

}
export default Home;
