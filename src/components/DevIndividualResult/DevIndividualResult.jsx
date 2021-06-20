import React from 'react'
import defaultAvatar from '../resources/Icons/account_circle-24px.svg';
import './DevIndividualResult.css';

const DevIndividualResult = ({githubId,avatarUrl}) => {
    return (
        <div className="individual-dev">
          <img
            src={avatarUrl !== '' ? avatarUrl : defaultAvatar}
            alt="user avatar"
          />
          <a href={`/profile/${githubId}`} target="_blank" rel="noreferrer" className="individual-dev-profile-link">
         <span className="developer-avatar-name">{githubId}</span>
          <span className="developer-avatar-arrow">&#8599;</span>
      </a>
      </div>
    );
}

export default DevIndividualResult;