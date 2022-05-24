import React from 'react'

function Main() {
    return (
        <div className='main-container'>
            <div className='top'>
                <img src='Images/Mask Group 88@2x.png' alt='profile' />
                <div className='top-content'>
                    <h1>Best VoIP Phone Systems for Small Businesses</h1>
                    <div className='btns'>
                        <button className='trial'><span>14-day Free Trial</span></button>
                        <button className='plan-btn'><span>Plan Purchase</span></button>
                    </div>
                </div>

            </div>
            <div className='bottom'>
                <div className='heading-bottom'>
                    <h1>Unlimited business benefits with UnifiedRing</h1>
                    <p>Manage virtual teams with maximum efficiency.</p>
                </div>
                
                <div className='grid-content'>
                    <div className='grid'>
                        <img src='Images/mask95.png' alt='staff.png' />
                        <h3>No installation, no activation fee, and no set-up fee.</h3>
                    </div>
                    <div className='grid'>
                        <img src='Images/Mask Group 94.png' alt='staff.png' />
                        <h3>No installation, no activation fee, and no set-up fee.</h3>
                    </div>
                    <div className='grid'>
                        <img src='Images/Mask Group 93.png' alt='staff.png' />
                        <h3>No installation, no activation fee, and no set-up fee.</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main;

