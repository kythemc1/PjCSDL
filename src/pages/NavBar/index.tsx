import React,{useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import ModalMarket from "../../components/ModalMarket";


function NavBar () {
    const [bgColorTextLinkHome,setBgColorTextLinkHome]=useState('black');
    const [bgColorTextLinkMan,setBgColorTextLinkMan]=useState('black');
    const [bgColorTextLinkWoman,setBgColorTextLinkWoman]=useState('black');
    const [bgColorTextLinkChil,setBgColorTextLinkChil]=useState('black');
    const [bgColorTextLinkColect,setBgColorTextLinkColect]=useState('black');
    const [bgColorTextLinkLS,setBgColorTextLinkLS]=useState('black');
    const [bgColorTextLinkAbout,setBgColorTextLinkAbout]=useState('black');
    const [visible,setVisible]=useState(false);

    const onClickMarket=()=>{
        setVisible(!visible);
    }

    const handleChange = () => {
        setVisible(false);
    }

    return (
        <div style={{marginLeft:40,marginTop: 20,display : 'flex'}}>
            <div style={{display : 'flex',justifyContent :"space-between",width : window.innerWidth*0.4 ,marginTop: 10}}>
                <a >
                    <Link style={{textDecoration :"none" ,color:bgColorTextLinkHome}}  to="/" onMouseOver={()=>{setBgColorTextLinkHome('red')}} onMouseLeave={()=>{setBgColorTextLinkHome('black')}}>Home</Link>
                </a>
                <a>
                    <Link style={{textDecoration :"none" ,color:bgColorTextLinkMan}} to="/Man" onMouseOver={()=>{setBgColorTextLinkMan('red')}} onMouseLeave={()=>{setBgColorTextLinkMan('black')}}>Man</Link>
                </a>
                <a>
                    <Link style={{textDecoration :"none" ,color:bgColorTextLinkWoman}} to="/Woman" onMouseOver={()=>{setBgColorTextLinkWoman('red')}} onMouseLeave={()=>{setBgColorTextLinkWoman('black')}}>Woman</Link>
                </a>
                <a>
                    <Link style={{textDecoration :"none" ,color:bgColorTextLinkChil}} to="/Children" onMouseOver={()=>{setBgColorTextLinkChil('red')}} onMouseLeave={()=>{setBgColorTextLinkChil('black')}}>Children</Link>
                </a>
                <a>
                    <Link style={{textDecoration :"none" ,color:bgColorTextLinkColect}} to="/Man" onMouseOver={()=>{setBgColorTextLinkColect('red')}} onMouseLeave={()=>{setBgColorTextLinkColect('black')}}>Bộ Sưu Tập</Link>
                </a><a>
                    <Link style={{textDecoration :"none" ,color:bgColorTextLinkLS}} to="/Man" onMouseOver={()=>{setBgColorTextLinkLS('red')}} onMouseLeave={()=>{setBgColorTextLinkLS('black')}}>Life Style</Link>
                </a><a>
                    <Link style={{textDecoration :"none" ,color:bgColorTextLinkAbout}} to="/Man" onMouseOver={()=>{setBgColorTextLinkAbout('red')}} onMouseLeave={()=>{setBgColorTextLinkAbout('black')}}>Về chúng tôi</Link>
                </a>

            </div>

            <img src={require('../../assets/logo.png')} style={styles.imgIvy}/>

                 <input style={styles.find} type={"text"} onChange={handleChange}>
             </input>
             {/* <img style={styles.iconFind} src={require('../../assets/shopping.png')}></img> */}
            <div style={styles.listIcon}>
                <a onClick={()=>{onClickMarket()}}>
                    <img style={styles.icon} src={require('../../assets/shopping.png')}></img>
                    <div>
                        <ModalMarket  closeModal={()=>setVisible(false)} visible={visible} />
                    </div>
                </a>
                <Link to={'/SignIn'}>
                    <img style={styles.icon} src={require('../../assets/user.png')} ></img>
                </Link>
            </div>

        </div>

    );
}
const styles={
    imgIvy: { width: '130px', height: '45px',marginLeft : 100 },
    find : {
        width: '200px',
        height: '30px',
        padding: '5px',
        border: '1px solid black',
        borderRadius: '4px',
        fontSize: '16px',
        marginLeft : 30
      },
    icon:{
        height : "20px",
        with: "20px",
        marginLeft: 10,
        zIndex: 1,
        // position: 'absolute'
    },
    iconFind:{ position: 'absolute', },
    listIcon:{
        display: 'flex',
        marginLeft : 30,
        // marginTop :10
    }
}
export default NavBar;
