export default function Gallery () {
    return(
        <div>
            <p style={{textAlign: 'center',fontSize: 40}}>
                GALLERY
            </p>
            <div style={{justifyContent: 'space-between',display: 'flex',width: window.innerWidth*0.8,marginLeft:window.innerWidth*0.1}}>
                <a>
                    <img src={require('../../../assets/Gallery.jpg')} style={{height:160,width:160}}/>
                </a>
                <a>
                    <img src={require('../../../assets/Gallery.jpg')} style={{height:160,width:160}}/>
                </a>
                <a>
                    <img src={require('../../../assets/Gallery.jpg')} style={{height:160,width:160}}/>
                </a>
                <a>
                    <img src={require('../../../assets/Gallery.jpg')} style={{height:160,width:160}}/>
                </a>
                <a>
                    <img src={require('../../../assets/Gallery.jpg')} style={{height:160,width:160}}/>
                </a>
            </div>

        </div>
    )
}
