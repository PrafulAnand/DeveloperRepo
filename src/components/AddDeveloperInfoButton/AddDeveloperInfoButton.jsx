import React from 'react';
import './AddDeveloperInfoButton.css';

const AddDeveloperInfoButton = ({onButtonClick}) => {
    return (
        <div className="question-add-dev-container">
            <h4 className="question-add-dev">Could not find what you were looking for?</h4>
            <button className="add-dev-btn"
                onClick={() => {
                    onButtonClick(true);
                }}
            >Add Developer Info</button>
        </div>
    )
}

export default AddDeveloperInfoButton;