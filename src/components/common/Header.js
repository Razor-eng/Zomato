import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='max-width header'>
            <img src="/zomato.png" alt="Zomato" className='header_logo' />
            <div className="header_right">
                <div className="header_right_search">
                    <div className="location_wrapper">
                        <div className="location_icon_name">
                            <i className="fi fi-rs-marker absolute-center location_icon"></i>
                            <div>Location</div>
                        </div>
                        <i className="fi fi-rr-caret-down absolute-center"></i>
                    </div>
                    <div className='location_separator'></div>
                    <div className='header_searchBar'>
                        <i className="fi fi-rr-search absolute-center search-icon"></i>
                        <input placeholder='Search for restaurant, cuisine or a dish' className='search_input' />
                    </div>
                </div>
                <div className='profile_wrapper'>
                    <img src={"https://i.pinimg.com/originals/62/3a/a8/623aa8f9933ee9a286871bf6e0782538.jpg"} alt="" className='header_profile_image' />
                    <span className='header_profile_name'>{'RazorEng'}</span>
                    <i className="fi fi-rr-angle-small-down absolute-center profile_options_icon"></i>
                </div>
            </div>
        </div>
    )
}

export default Header