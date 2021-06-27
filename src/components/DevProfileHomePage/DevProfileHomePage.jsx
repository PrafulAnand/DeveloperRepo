import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import AvailableDevelopers from '../AvailableDevelopers/AvailableDevelopers';
import AddDeveloperInfoButton from '../AddDeveloperInfoButton/AddDeveloperInfoButton';
import AddDevInfoFormModal from '../AddDevInfoFormModal/AddDevInfoFormModal';
import Footer from '../Footer/Footer';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class DevProfileHomePage extends React.Component{
    
    state = {
        headerText: "The Developer Repository",
        developers: [],
        searchText: '',
        showModal: false,
        loader: true
    }

    componentDidMount() {
        this.fetchAllDevelopers();
      }
    
      fetchAllDevelopers = () => {
        fetch(`/api/developers`)
          .then((response) => response.json())
          .then((data) => {
            this.setState({ developers: data,loader:false });
          }).catch((error) => {
              console.error(error);
          });
      };

      setSearchText = (inputValue) => {
          this.setState({
              searchText:inputValue
        });
      }

      setShowModal = (value) => {
          this.setState({
              showModal:value
          })
      }

    render() {
        return(
            <div className = "App">
                <Header headTitle = {this.state.headerText}/>
                <SearchBox onInputChange = {this.setSearchText}/>
                {(this.state.loader && this.state.developers.length>0) ? <ClipLoader size = {150} css= {override}/> :                
                this.state.developers.length>0 && <AvailableDevelopers developers = {this.state.developers} searchInput = {this.state.searchText}/>}
                <AddDeveloperInfoButton onButtonClick = {this.setShowModal}/>
                {this.state.showModal && <AddDevInfoFormModal onModalButtonClick = {this.setShowModal} fetchAllDevelopers = {this.fetchAllDevelopers} />}
                <Footer />
            </div>
        );
    }
}

export default DevProfileHomePage;