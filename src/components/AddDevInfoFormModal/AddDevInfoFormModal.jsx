import React from 'react';
import './AddDevInfoFormModal.css';
import GithubLogo from '../resources/ProfileIcons/iconfinder_github_317712.png';
import LinkedinLogo from '../resources/ProfileIcons/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import CodechefLogo from '../resources/ProfileIcons/codechef-1324440139527402917_32.png';
import HackerrankLogo from '../resources/ProfileIcons/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import TwitterLogo from '../resources/ProfileIcons/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import MediumLogo from '../resources/ProfileIcons/iconfinder_Circled_Medium_svg5_5279113.png';
import DevInfoFormFields from './DevInfoFormFields';


class AddDevInfoFormModal extends React.Component {

  state = {
    githubId: '',
    linkedinId: '',
    codechefId: '',
    hackerrankId: '',
    twitterId: '',
    mediumId: '',
    errorMessage: null,
  }

  postAddDeveInfo = () => {
    fetch(`/api/developers`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        github_id: this.state.githubId,
        linkedin_id: this.state.linkedinId,
        codechef_id: this.state.codechefId,
        hackerrank_id: this.state.hackerrankId,
        twitter_id: this.state.twitterId,
        medium_id: this.state.mediumId,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          this.props.fetchAllDevelopers();
          this.closeAddDevInfoModal();
        } else if (res.status === 400) {
          throw new Error('Invalid GitHub user ID. Try again.');
        } else {
          throw new Error('Unexpected Error - Please try again later.');
        }
      })
      .catch((e) => {
        this.setState({ errorMessage: e.message });
      });
  };

  setDifferentDevProfileIds = (event) => {
    this.setState({ [event.target.name]: event.target.value, errorMessage: null });
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.githubId.trim() === '') {
      this.setState({ errorMessage: 'GitHub user ID is mandatory.' });
    } else {
      this.postAddDeveInfo();
    }
  };

  closeAddDevInfoModal = () => {
    this.setState({
      githubId: '',
      linkedinId: '',
      codechefId: '',
      hackerrankId: '',
      twitterId: '',
      mediumId: '',
      errorMessage: null,
    });
    this.props.onModalButtonClick(false);
  };


  render() {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                this.props.onModalButtonClick(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Add Developer profile</h1>
          </div>
          <div className="body">
            <hr className="hrule-modal" />
            <form onSubmit={this.submitHandler}>
                <DevInfoFormFields src={GithubLogo} label="Github*" name="githubId" onChange={this.setDifferentDevProfileIds} />
                <DevInfoFormFields src={LinkedinLogo} label="Linkedin" name="linkedinId" onChange={this.setDifferentDevProfileIds} />
                <DevInfoFormFields src={CodechefLogo} label="Codechef" name="codechefId" onChange={this.setDifferentDevProfileIds} />
                <DevInfoFormFields src={HackerrankLogo} label="Hackerrank" name="hackerrankId" onChange={this.setDifferentDevProfileIds} />
                <DevInfoFormFields src={TwitterLogo} label="Twitter" name="twitterId" onChange={this.setDifferentDevProfileIds} />
                <DevInfoFormFields src={MediumLogo} label="Medium" name="mediumId" onChange={this.setDifferentDevProfileIds} />
              <div className="error-div">{this.state.errorMessage}</div>
              <hr className="hrule-modal" />
              <div className="footer-form">
                <button onClick={ this.closeAddDevInfoModal } className="cancel-Btn">Cancel</button>
                <button className="submit-Btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );

  }
}

// const AddDevInfoFormModal = ({ onModalButtonClick }) => {

// }

export default AddDevInfoFormModal;