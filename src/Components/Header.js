import React from 'react'
// import { call_icon } from './images/call_icon.png'
function Header() {
    return (
        <div className='header-container'>
            <img className='logo' src="Images/unified_icon.png" alt='unified Logo' />
            <div>
                <img src='Images/call_icon.png' alt='Phone' /><span>02034440000</span>
            </div>
        </div>
    )
}

export default Header