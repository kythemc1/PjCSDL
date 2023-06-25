import React from 'react';
import {Button, ListGroup, Modal} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {RootState} from "../../store/reduxProvider";
interface props {
    visible : boolean,
    closeModal : ()=>void;
}


function ModalMarket(props:props) {
    const logged = useSelector((state: RootState)=>state.auth.auth.isLogged);
    const SanPham = useSelector((state:RootState)=>state.cart.items)
    const totalPrice =useSelector((state:RootState)=>state.cart.totalPrice)

    return (

                <Modal show={props.visible} animation={true} style={styled.container} scrollable={false} >

                    <div style={{textAlign: 'center'}}>
                        { logged?
                            <div >
                                <div>
                                    <h1>Giỏ Hàng</h1>
                                    <ul>
                                        {
                                            SanPham.map((data)=>(
                                                <ListGroup horizontal={true} className="my-2">
                                                    <ListGroup.Item  style={{display: "flex",justifyContent: 'space-between',width: 450}}>
                                                        <p >Tên sản phẩm : {data.name}</p>
                                                        <p>Giá : {data.price}</p>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                                ))}
                                    </ul>
                                    <div>
                                        <p> Tổng giá tiền: {totalPrice}</p>
                                    </div>

                                </div>

                            </div>
                            :
                            <div>
                                <div style={{height:50}}></div>
                                <Button style={{marginBottom: 0}}>
                                   Hãy Đăng Nhập
                                </Button>
                                <div style={{height:50}}></div>

                            </div>

                        }
                    </div>
                </Modal>

    );
}
const  styled={
    container:{borderRadius:10},
    buttonClose:{
        // height: 20,
        padding:10,
        borderRadius: 10,
    }
}
export default ModalMarket;
