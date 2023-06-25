import React, { useState } from 'react';
import Card from "../../components/Card";
import {ListGroup} from "react-bootstrap";

function Children() {
    // const [modalShow, setModalShow] = useState(false);
    const mok =[
        {nameArrival :'Đầm peplum Dập Ly',cost : 100,color: 'yellow',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/08/b192823bd075c34cb82b1596f0466a3f.jpg'},
        {nameArrival :'Đầm Voan Đuôi Đá',cost : 100,color: 'blue',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/08/d54b2d2d5b0da3e215f1b19115e58b95.jpg'},
        {nameArrival :'Đầm Thô 1 Lớp Xẻ Eo',cost : 100,color: 'red',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/05/26/181dcc214355aa3c130cd9c27969b4fe.jpg'},
        {nameArrival :'Đầm Lụa Phối Bèo',cost : 100,color: 'pink',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/05/26/228c1212b1b93ddf8e5a20674726b8b8.jpg'},
        {nameArrival :'Đầm peplum Dập Ly',cost : 100,color: 'yellow',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/08/b192823bd075c34cb82b1596f0466a3f.jpg'},
        {nameArrival :'Đầm Voan Đuôi Đá',cost : 100,color: 'cyan',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/05/26/228c1212b1b93ddf8e5a20674726b8b8.jpg'},
        {nameArrival :'Đầm Thô 1 Lớp Xẻ Eo',cost : 100,color: 'black',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/08/d54b2d2d5b0da3e215f1b19115e58b95.jpg'},
        {nameArrival :'Đầm Lụa Phối Bèo',cost : 100,color: 'cyan',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/05/26/181dcc214355aa3c130cd9c27969b4fe.jpg'},
        {nameArrival :'Đầm peplum Dập Ly',cost : 100,color: 'yellow',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/05/26/228c1212b1b93ddf8e5a20674726b8b8.jpg'},
        {nameArrival :'Đầm Voan Đuôi Đá',cost : 100,color: 'black',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/05/26/181dcc214355aa3c130cd9c27969b4fe.jpg'},
        {nameArrival :'Đầm Thô 1 Lớp Xẻ Eo',cost : 100,color: 'yellow',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/08/b192823bd075c34cb82b1596f0466a3f.jpg'},
        {nameArrival :'Đầm Lụa Phối Bèo',cost : 100,color: 'pink',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/08/d54b2d2d5b0da3e215f1b19115e58b95.jpg'},
        {nameArrival :'Đầm peplum Dập Ly',cost : 100,color: 'yellow',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/08/b192823bd075c34cb82b1596f0466a3f.jpg'},
        {nameArrival :'Đầm Voan Đuôi Đá',cost : 100,color: 'red',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/08/d54b2d2d5b0da3e215f1b19115e58b95.jpg'},
        {nameArrival :'Đầm Thô 1 Lớp Xẻ Eo',cost : 100,color: 'cyan',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/05/26/181dcc214355aa3c130cd9c27969b4fe.jpg'},
        {nameArrival :'Đầm Lụa Phối Bèo',cost : 100,color: 'pink',sale : true,img: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/05/26/228c1212b1b93ddf8e5a20674726b8b8.jpg'},
    ]
    return (
        <div style={styled.container}>
            <div style={styled.leftSide}>
                <ListGroup>
                    <ListGroup.Item>
                        <p>Size</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>Màu sắc</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>Mức giá</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>Mức chiết khấu</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>Nâng cao</p>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div style={styled.rightSide}>
                <p style={{marginLeft: window.innerWidth*0.2}}>
                    Các Sản Phẩm
                </p>
                <div>
                    {
                        mok.map((data)=>(
                            <div style={{display: "flex",width: window.innerWidth*0.55,justifyContent:'space-between'}}>
                                <Card linkImage={data.img} name={data.nameArrival} cost={data.cost} color={data.color}></Card>
                                <Card linkImage={data.img} name={data.nameArrival} cost={data.cost} color={data.color}></Card>
                                <Card linkImage={data.img} name={data.nameArrival} cost={data.cost} color={data.color}></Card>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
const styled ={
    container:{
        display: 'flex',
        marginTop: 50
    },
    leftSide:{
        width : window.innerWidth*0.3,
        marginLeft:  window.innerWidth*0.05
    },
    rightSide:{
        marginLeft: window.innerWidth*0.05
    },

}

export default Children;
