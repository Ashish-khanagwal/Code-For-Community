import React from 'react';
import channel from '../media/channel.png'; 

const Channel = () => {
    return (
        <>
        <div className='channel'>
        <h1 className='heading'>Our <span className='gradient-text'>Channel</span></h1>
        <div className='div-channel'>
                <div className='channel-image'>
                    <img src={channel} alt="openSource"></img>
                </div>
                <div className='channel-div'>
                    <div className= 'channel-para'>
                          "There is no gatekeeping in Open Source, this fosters a real sense of collaboration, communication and career development"
                    </div>
                    <a href='https://www.youtube.com/@iashishkhanagwal'>
                        <button type='button' className='channel-button'>Visit Channel</button>
                    </a>
                </div>
        </div>
        </div>
        </>
    )
}

export default Channel;