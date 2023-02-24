import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {  
    return (
        <nav className="navbar">
            <div className="display_flex container">
                <div className='navbar_logo_menu'>
                    <div className="company_logo">
                        <img src="images/Logo.png" alt="" />
                        </div>
                    <ul className='menu'>
                        <li><Link to="/">Stake</Link></li>
                        <li><Link to="/claim">Claim</Link></li>
                        <li><Link to="/lock">Lock</Link></li>
                        <li><Link to="/docs">Docs</Link></li>
                        <li><Link to="/governance">Governance</Link></li>
                        <li><Link to="/bribe">Bribe</Link></li>
                        <li><Link to="/referral">Referral</Link></li>
                        <button className='navbar_btn'><img src="images/shield.png" alt="" /><span>Audited</span></button>
                    </ul>
                </div>
                <div className="language_converter_and_mode">
                    <p>EN</p>
                    <div className="">
                    <button className='btn btn_radius'>
                        <span>Choose</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    </div>
                    <div className="moon mode">
                    <img src="images/moon.png" alt="" />
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar