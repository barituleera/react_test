import React from 'react'
// import chat1 from "./chat1.png";


export default function RecieveComp({img, name, text, image, isOnline}) {
  return (
    <div className='receive-chat-wrap'>
        
        <div className='d-flex p-1'>
        <img src={img} style={style.img}/>
                <div className='d-flex justify-content-between w-100' >
                    <div style={style.chatContent}>
                        <h4  style={style.chatName}>{name}</h4>
                        <p  style={style.chatText}>{text}</p>
                    </div>
                    <div className='pl-3 pr-5 d-flex flex-column justify-content-between'>
                        <div style={isOnline}></div>
                        <p style={{fontSize:'12px'}}>08:17</p>
                    </div>
                </div>
            </div>
            {image ? <img style={style.image} src={image} /> : ''}
    </div>
  )
}


const style = {
    img:{
        width: '40px',
        height: '40px',
    },
    chatName: {
        fontSize: '16px',
        fontWeight: 'bolder',
        lineHeight: '18px'
    },

    chatContent: {
        marginLeft: '10px'
    },

    chatText:{
        fontSize: '12px',
        lineHeight: '20px'
    },

    isOnline: {
        width: '16px',
        height: '16px',
        backgroundColor: 'green',
        borderRadius: '16px',
    },

    isOffline: {
        width: '16px',
        height: '16px',
        backgroundColor: 'black',
        borderRadius: '16px', 
    },

    chatStatusGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'red',

    }


}