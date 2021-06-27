import React from 'react';
import './DevInfoFormFields.css';


const DevInfoFormFields = ({src,label,name,onChange}) => {
return(
    <div className="profile-item">
    <div className="logo-label-outer">
      <img src={src} height="30px" width="30px" alt="logo" className="logo-img" />
      <span className="logo-label-inner">{label}</span>
    </div>
    <input name={name} onChange={onChange} className="profile-item-input" autoComplete ="off" />
  </div>
);
}

export default DevInfoFormFields;