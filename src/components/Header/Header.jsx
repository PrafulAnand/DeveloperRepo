import React from 'react';
import './Header.css';
import headerImage from '../resources/Icons/undraw_dev_productivity_umsq 1.png'

const Header = ({headTitle}) => {
    return (
        <div className = "devprofile-header-container">
            <h1 className = "devprofile-headertext">{headTitle}</h1>
            <img src = {headerImage} className = "devprofile-headerimg" alt = "headerImage"></img>
        </div>
    );
};

export default Header;