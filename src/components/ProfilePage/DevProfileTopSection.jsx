import React from 'react'
import DevProfileLinks from './DevProfileLinks';
import LocationIcon from '../resources/Icons/location_on-24px.svg';
import CompanyIcon from '../resources/Icons/business-24px.svg';
import BlogIcon from '../resources/Icons/insert_link-24px.svg';


const DevProfileTopSection = ({ defaultAvatar, devName, bio, github, linkedin, codechef, twitter, medium, hackerrank, email, location, company, blog }) => {
    return (
        <section className="dev-info-container">
            <span className="dev-info-profile-avatar">
                <img
                    src={defaultAvatar}
                    height="400px"
                    width="400px"
                    alt="dev avatar"
                />
            </span>
            <span>
                <div className="developer-basic-info">
                    <div className="developer-name">{devName ? devName : github}</div>
                    <div className="developer-bio">{bio}</div>
                    <DevProfileLinks
                        github={github}
                        linkedin={linkedin}
                        codechef={codechef}
                        twitter={twitter}
                        medium={medium}
                        hackerrank={hackerrank}
                        email={email}
                    />
                    <div className="developer-other-info">
                        <div className="align-info-sec">
                            {location && (
                                <>
                                    <img src={LocationIcon} height="16px" width="16px" alt="location icon" className="loc-icon" />
                                    <span className="loc-info">{location}</span>
                                </>
                            )}
                            {company && (
                                <>
                                    <img src={CompanyIcon} height="16px" width="16px" alt="company icon" className="loc-icon" />
                                    <span className="loc-info">{company}</span>
                                </>
                            )}
                        </div>
                        <div className="align-info-sec blog-link">
                            {blog && (
                                <>
                                    <img src={BlogIcon} height="16px" width="16px" alt="blog icon" className="loc-icon" />
                                    <a href={blog} target="_blank" rel="noreferrer" className="loc-info">
                                        {blog}
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
          </span>
          </section>
    );
}

export default DevProfileTopSection