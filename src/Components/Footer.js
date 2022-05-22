import React from 'react'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-logo'>
                <img src='Images/unified_icon.png' alt='unified-logo' />
            </div>
            <p>2020 UnifiedRing. All rights reserved</p>
            <div className='footer-social'>
                <img className='social' src='Images/Group 22857.png' alt='facebook' />
                <img className='social' src='Images/Group 22856.png' alt='Twitter' />
                <img className='social' src='Images/Group 22847.png' alt='Play' />
                <img className='social' src='Images/Group 23379.png' alt='Instagram' />
                <img className='social' src='Images/Group 23378.png' alt='LinkedIn' />
                <img className='chat-icon' src='Images/message.png' alt='chatIcon' />
            </div>

        </div>
    )
}

export default Footer