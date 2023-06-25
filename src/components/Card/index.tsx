import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reduxProvider";
import {useNavigate} from "react-router-dom";
import {addItems} from "../../store/Reducer/cartSlice";
interface props {
    linkImage : string,
    name : string,
    cost : number,
    color : string,
}

export default  function Card (props: props){
    const logged = useSelector((state: RootState)=>state.auth.auth.isLogged);
    const navigate = useNavigate();
    const dispatch =useDispatch()
    const onClickAdded =(name : string, price : number)=>{
        if (logged==true){
            const SP = {
                name: name,
                price: price
            }
            console.log('log raaaa',SP);
            console.log(' in    đáaaaaaaaa',logged);
            dispatch(addItems({name: `${SP.name}`,price: SP.price}));
            alert('Đã Thêm Sản Phẩm')
        }
        else {
            navigate('/SignIn')
        }
    }
 return(
     <div style={styled.container}>
        <img src={`${props.linkImage}`} style={styled.imgStyle}/>
         <div style={{display: 'flex',marginLeft: 10,marginTop:5}}>
             <div style={{...styled.colorArrival,backgroundColor: props.color}}></div>
             <img src={require('../../assets/likes.png')} style={styled.iconLike}/>
         </div>
         <p style={styled.nameArrival} >
             {props.name}
         </p>
         <div style={{display:'flex',justifyContent:'space-between'}}>
             <p style={styled.cost} >
                 {props.cost}
             </p>
             <a onClick={()=>{onClickAdded(props.name,props.cost)}}>
                 <img src={require('../../assets/added.png')} style={styled.iconAdded}/>

             </a>
         </div>

     </div>
 )
}
const styled ={
    container : {
        height : 400,
        width:200,

    },
    imgStyle:{
        width: 200,
        height : 300
    },colorArrival:{
        height:20,
        width: 20,
        borderRadius:20,
    },
    iconLike:{
        height: 20,
        width:20,
        marginLeft: 140
    },
    nameArrival:{
        marginLeft: 10,
    },
    iconAdded:{
        height: 20,
        width:20,
        marginRight: 10
    },cost:{
        marginLeft: 10,
        marginTop: -3
    }
}
