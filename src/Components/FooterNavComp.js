import React, { Component } from 'react'
import { BiMessageRoundedDetail, BiCompass, BiPlusCircle, BiBell, BiMenu } from "react-icons/bi";

export class FooterNavComp extends Component {
  render() {
    return (
      <footer className='fixed-bottom mb-3' style={{zIndex:999}}>
        <div className='container'>
            <div className='rounded-pill d-flex border-1 border-dark border justify-content-between p-2' style={{backgroundColor: "#F8F0F0"}}>
                <BiMessageRoundedDetail size='1.8em'/>
                <BiCompass size='1.8em'/>
                <BiPlusCircle size='1.8em'/>
                <BiBell size='1.8em'/>
                <BiMenu size='1.8em'/>
            </div>
        </div>
      </footer>
    )
  }
}

export default FooterNavComp