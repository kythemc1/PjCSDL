import { useState } from "react";
import { Link } from "react-router-dom";
import {useAuth} from "../../hook/useAuth";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [bgLogin,setBgLogin]=useState('black');
    const [bgTextLogin,setBgTextLogin]=useState('white');
    const [bgSignUp,setBgSignUp]=useState('black');
    const [bgTextSignUp,setBgTextBgSignUp]=useState('white');
    const {onSetAccount,account,Login} =useAuth();
    const onSetUsername=(username: any)=>{
            setUsername(username)
            onSetAccount("username", username)
    }
    const onSetPassWord=(password: any)=>{
            setPassword(password);
            onSetAccount("password", password)

    }
    const onLogin=()=>{
        if (account == null){
            alert('sai vai lon');
        }
        else {
            Login(account);
        }
    }



    return (
        <div style={styled.container}>
            <div style={styled.leftSide}>
                <div style={{textAlign: "center"}}>
                    <p style={{fontSize: 30,textAlign: "center"}}>Khách hàng mới của IVY moda</p>
                    <p style={{fontSize: 15,textAlign: "center"}}>Nếu bạn chưa có tài khoản trên ivymoda.com, hãy sử dụng tùy</p>
                    <p style={{fontSize: 15,textAlign: "center"}}>chọn này để truy cập biểu mẫu đăng ký.</p>
                    <p style={{fontSize: 15,textAlign: "center"}}>Bằng cách cung cấp cho IVY moda thông tin chi tiết của bạn,</p>
                    <p style={{fontSize: 15,textAlign: "center"}}>quá trình mua hàng trên ivymoda.com sẽ là một trải nghiệm</p>
                    <p style={{fontSize: 15,textAlign: "center"}}>thú vị và nhanh chóng hơn!</p>

                    <button
                        type="submit"
                        style={{height: 40,width: 300,backgroundColor:bgSignUp,borderRadius: 20,marginTop: 40}}
                        onMouseOver={()=>{
                            setBgSignUp('white');
                            setBgTextBgSignUp('black');
                        }
                        }
                        onMouseLeave={()=>{
                            setBgSignUp('black');
                            setBgTextBgSignUp('white');
                        }}
                    >
                        <Link to={"/register"} style={{color: bgTextSignUp}}>
                            Sign up
                        </Link>
                    </button>
                </div>
            </div>
            <div style={{height: 300, width:1,backgroundColor: 'grey'}}></div>
            <div style={styled.rightSide}>

                    <div >
                            <p style={{fontSize: 30,textAlign: "center"}}>Bạn đã có tài khoản IVY</p>
                            <p style={{fontSize: 15,textAlign: "center"}}>Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành</p>
                            <p style={{fontSize: 15,textAlign: "center"}}>viên và nhận được những ưu đãi tốt hơn!</p>

                        <div  style={{marginTop: 50}}  >

                                <div style={{textAlign: "center"}}>
                                    <input
                                        style={{height:40, width: 300}}
                                        type="text"
                                        // id="email"
                                        // name="email"
                                        value={username}
                                        placeholder="Email/SĐT"
                                        onChange={(e) => onSetUsername(e.target.value)}
                                    />
                                </div>

                                <div style={{marginTop: 15}}>
                                    <div style={{textAlign: "center",borderRadius: 5}}>
                                        <input
                                            type="password"
                                            style={{height:40, width: 300}}
                                            // name="password"
                                            // id="password"
                                            value={password}
                                            placeholder="Password"
                                            onChange={(e) => onSetPassWord(e.target.value)}
                                        />

                                        <div>

                                        </div>
                                    </div>
                                    <div  style={{marginLeft: (window.innerWidth*0.25-150),marginTop: 40}}>
                                            <div    >
                                                <Link to="/forgot-password" style={{color: "black"}}>Quên mật khẩu</Link>
                                            </div>
                                    </div>
                                </div>
                                <div style={{textAlign: "center", marginTop: 20,justifyContent:'center'}}>
                                    <button
                                        type="submit"
                                        style={{height: 40,width: 300,backgroundColor:bgLogin,borderRadius: 20}}
                                        onMouseOver={()=>{
                                            setBgLogin('white');
                                            setBgTextLogin('black');
                                        }
                                        }
                                        onMouseLeave={()=>{
                                            setBgLogin('black');
                                            setBgTextLogin('white');
                                        }}
                                        onClick={()=>{
                                            console.log('in ra',account);
                                        onLogin()}

                                    }
                                    >
                                        <p style={{color: bgTextLogin}}>
                                            Login
                                        </p>
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};
const styled ={
    container:{display: 'flex'},
    leftSide: { width: window.innerWidth*0.5},
    rightSide: {
        justifyContent: 'center',
        alignContent: 'center',
        width: window.innerWidth*0.5
    }
}
export default Login;
