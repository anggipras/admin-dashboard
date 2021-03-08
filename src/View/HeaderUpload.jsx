import React from 'react';
import './style.css'

const HeaderUpload = () => {

    return (
        <div className='header'>
            <div className="section">
                <div className="logoside">
                    <div className="hamburger"><span><i className="fas fa-bars"></i></span></div>
                    <div className="thelogo">
                        <div className="insidelogo">
                            <img width='100%' height='100%' alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="loginside">
                    <div className="welcome hidewelcome"><span className='blockname'>Nama</span></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderUpload;