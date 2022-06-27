import React from 'react'
import { BiArrowBack, BiToggleRight, BiDotsVerticalRounded, BiBluetooth } from "react-icons/bi";
import { IconContext } from 'react-icons';
import './../index.css';

export default function NavComp() {
  return (
    <IconContext.Provider value={{size: '2em'}}>
    <>
        <div className='container mt-5 '>
            <div className='d-flex justify-content-between'>
                <div>
                    <BiArrowBack/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '98px'}}>
                    <BiToggleRight  className='mr-5' />
                    <BiDotsVerticalRounded  className='ml-5'/>
                </div>
            </div>

            <div className='mt-3 below-nav'>
                <div className='below-nav-inner' style={style.bgNavLeft}>
                    <h4 className='nav-title'>My Space</h4>
                </div>
                <div className='below-nav-inner' style={style.bgNavRight}>
                    <h4 className='nav-title'>Chat</h4>
                </div>
            </div>
        </div>
    </>
    </IconContext.Provider>
  )
}
const style = {
    bgNavLeft: {
        backgroundColor : '#27377A',
        color: 'white',
        // fontSize:'16px'
    },

    bgNavRight: {
        backgroundColor : '#FFFFFF',
        color: 'black'

    }
}