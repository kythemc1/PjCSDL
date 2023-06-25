import React, { useState } from "react"
import Card from "../../../components/Card";

interface props{
    content : string,
    link : string,
    data :{
        color : string,
        nameArrival: string,
        img : string,
        liked : string,
        added : boolean
    }

}
export default function ARRIVAL (props:props){
    const [bgTextModa,setBgTextModa] =useState('white');
    const [bgTextMan,setBgTextMan] =useState('white');
    const [bgTextKids,setBgTextKids] =useState('white');
    return(
        <div >
            <p style={{textAlign: 'center',fontSize: 40}}>
                {props.content}
            </p>
            <div style={{display:'flex',justifyContent: 'space-between',width: window.innerWidth*0.3,marginLeft: window.innerWidth*0.35 }}>
                <div onMouseOver={()=>{setBgTextModa('black')}} onMouseLeave={()=>{setBgTextModa('white')}}>
                    <a >
                        IVY moda
                    </a >
                    <div style={{height: 2,backgroundColor: bgTextModa}}>
                    </div>
                 </div>

                 <div onMouseOver={()=>{setBgTextMan('black')}}  onMouseLeave={()=>{setBgTextMan('white')}}>
                    <a >
                        IVY man
                    </a >
                    <div style={{height: 2,backgroundColor: bgTextMan}}>
                    </div>
                 </div>
                 <div onMouseOver={()=>{setBgTextKids('black')}}  onMouseLeave={()=>{setBgTextKids('white')}}>
                    <a >
                        IVY kids
                    </a >
                    <div style={{height: 2,backgroundColor: bgTextKids}}>
                    </div>
                 </div>
        </div>
            <div style={{marginLeft: window.innerWidth*0.05,marginRight: window.innerWidth*0.5,marginTop: 50}}>
                <div style={{justifyContent: 'space-between',display: 'flex', alignItems : 'center',width:window.innerWidth*0.9 }}>
                    <a>
                        <Card color={'red'} linkImage={'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/05/26/228c1212b1b93ddf8e5a20674726b8b8.jpg'} name={'Dam xoe ren theu'} cost={290.000} />
                    </a>
                    <a>
                        <Card color={'red'} linkImage={'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/05/26/228c1212b1b93ddf8e5a20674726b8b8.jpg'} name={'Dam xoe ren theu'} cost={290.000} />
                    </a>
                    <a>
                        <Card color={'red'} linkImage={'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/05/26/228c1212b1b93ddf8e5a20674726b8b8.jpg'} name={'Dam xoe ren theu'} cost={290.000} />
                    </a>
                    <a>
                        <Card color={'red'} linkImage={'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/05/26/228c1212b1b93ddf8e5a20674726b8b8.jpg'} name={'Dam xoe ren theu'} cost={290.000} />
                    </a>
                    <a>
                        <Card color={'red'} linkImage={'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/05/26/228c1212b1b93ddf8e5a20674726b8b8.jpg'} name={'Dam xoe ren theu'} cost={290.000} />
                    </a>
                </div>


                <div style={{borderWidth : 1,borderColor: 'black',marginLeft: window.innerWidth*0.49}}/>

            </div>
            <p style={{textAlign: 'center'}}>
            Xem Tat Ca
        </p>

        </div>


    )
}
