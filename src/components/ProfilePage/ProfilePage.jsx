import React from 'react';
import './ProfilePage.css';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import ProfilePageNavHeader from './ProfilePageNavHeader';
import defaultAvatar from '../resources/Icons/account_circle-24px.svg';
import Footer from '../Footer/Footer';
import DevProfileTopSection from './DevProfileTopSection';
import DevProfileRepoSection from './DevProfileRepoSection';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class ProfilePage extends React.Component {

    state = {
        developersData: [],
        loader: true
    }



    fetchDevelopersData(id) {
        fetch(`/api/developers/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ developersData: data[0] , loader:false});
            })
    }

    componentDidMount() {
        this.fetchDevelopersData(this.props.match.params.id);
    }

    render() {
        // const { developersData } = this.state;
        console.log("rendering",this.state.developersData);
        return (
            <>
                <ProfilePageNavHeader />
                <DevProfileTopSection
                    defaultAvatar={this.state.developersData.avatar_url !== '' ? this.state.developersData.avatar_url : defaultAvatar}
                    devName={this.state.developersData.name}
                    bio = {this.state.developersData.bio}
                    github={this.state.developersData.github_id}
                    linkedin={this.state.developersData.linkedin_id}
                    codechef={this.state.developersData.codechef_id}
                    twitter={this.state.developersData.twitter_id}
                    medium={this.state.developersData.medium_id}
                    hackerrank={this.state.developersData.hackerrank_id}
                    email={this.state.developersData.email}
                    location = {this.state.developersData.location}
                    company = {this.state.developersData.company}
                    blog = {this.state.developersData.blog}
                />
                {this.state.loader && <ClipLoader size = {150} css={override} />}
                {this.state.developersData.repos && <DevProfileRepoSection repos = {this.state.developersData.repos}/>}
                <Footer />
            </>
        )
    }
}
export default ProfilePage;