import React from 'react'
import './SearchBox.css'
import searchlogo from '../resources/Icons/search-24px.svg'


const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <div className="explore-dev-profiles">
                Explore Developer Profiles</div>
                <hr className = "horizontal-line"></hr>
                <div className = "search-bar">
                <input
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="Search for username" className="search-input" />
            <img src ={searchlogo} alt ='search logo' className = 'search-logo'></img>
                </div>
        </div>
    );
};
export default SearchBox;
