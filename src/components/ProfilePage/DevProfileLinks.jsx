import React from 'react';
import GithubLogo from '../resources/ProfileIcons/iconfinder_github_317712.png';
import LinkedinLogo from '../resources/ProfileIcons/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import CodechefLogo from '../resources/ProfileIcons/codechef-1324440139527402917_32.png';
import HackerrankLogo from '../resources/ProfileIcons/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import TwitterLogo from '../resources/ProfileIcons/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import MediumLogo from '../resources/ProfileIcons/iconfinder_Circled_Medium_svg5_5279113.png';
import EmailLogo from '../resources/ProfileIcons/email-24px.svg';


const DevProfileLinks = ({ github, linkedin, codechef, twitter, medium, hackerrank, email }) => {

    return (
        <div className="dev-profile-links">
            {github &&
                <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer" className="dev-profile-individual-link">
                    <img src={GithubLogo} height="30px" width="30px" alt="user avatar" />
                </a>
            }
            {hackerrank &&
                <a href={`https://www.hackerrank.com/${hackerrank}`} target="_blank" rel="noreferrer" className="dev-profile-individual-link">
                    <img src={HackerrankLogo} height="30px" width="30px" alt="user avatar" />
                </a>
            }
            {codechef &&
                <a href={`https://www.codechef.com/users/${codechef}`} target="_blank" rel="noreferrer" className="dev-profile-individual-link">
                    <img src={CodechefLogo} height="30px" width="30px" alt="user avatar" />
                </a>
            }
            {linkedin &&
                <a href={`https://www.linkedin.com/in/${linkedin}`} target="_blank" rel="noreferrer" className="dev-profile-individual-link">
                    <img src={LinkedinLogo} height="30px" width="30px" alt="user avatar" />
                </a>
            }
            {medium &&
                <a href={`https://medium.com/@${medium}`} target="_blank" rel="noreferrer" className="dev-profile-individual-link">
                    <img src={MediumLogo} height="30px" width="30px" alt="user avatar" />
                </a>
            }
            {twitter &&
                <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer" className="dev-profile-individual-link">
                    <img src={TwitterLogo} height="30px" width="30px" alt="user avatar" />
                </a>
            }

            {email &&
                <a href={`mailto:${email}`} target="_blank" rel="noreferrer" className="dev-profile-individual-link">
                    <img src={EmailLogo} height="30px" width="30px" alt="user avatar" />
                </a>
            }
        </div>

    );

};

export default DevProfileLinks