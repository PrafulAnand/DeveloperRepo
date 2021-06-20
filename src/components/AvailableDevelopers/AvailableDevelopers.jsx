import React from 'react'
import DevIndividualResult from '../DevIndividualResult/DevIndividualResult';
import './AvailableDevelopers.css'


const AvailableDevelopers = ({ developers, searchInput }) => {

    const availableDevelopers = developers.filter((devprofileData) => {
       if ( devprofileData.id.toLowerCase().includes(searchInput.toLowerCase())){
            return devprofileData;
        }
        return devprofileData;
    }).map((devprofileData) => {
        return <DevIndividualResult key={devprofileData.id} githubId={devprofileData.id} avatarUrl={devprofileData.avatar_url}></DevIndividualResult>
    });
    return (
        <div>
            <div className="developers-container">{availableDevelopers}</div>
            <hr className="horizontal-line-developers"></hr>
        </div>
    )
}

export default AvailableDevelopers;