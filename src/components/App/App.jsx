import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import AvailableDevelopers from '../AvailableDevelopers/AvailableDevelopers';
import AddDeveloperModal from '../AddDeveloperModal/AddDeveloperModal';
import Footer from '../Footer/Footer';



class App extends React.Component{
    
    state = {
        headerText: "The Developer Repository",
        developers: [],
        searchText: ''
    }

    componentDidMount() {
        this.fetchAllDevelopers();
      }
    
      fetchAllDevelopers = () => {
        fetch(`/api/developers`)
          .then((response) => response.json())
          .then((data) => {
            this.setState({ developers: data });
          });
      };

      setSearchText = (inputValue) => {
          this.setState({
              searchText:inputValue
        });
      }

    render() {
        return(
            <div>
                <Header headTitle = {this.state.headerText}/>
                <SearchBox onInputChange = {this.setSearchText}/>
                <AvailableDevelopers developers = {this.state.developers} searchInput = {this.state.searchText}/>
                <AddDeveloperModal />
                <Footer />
            </div>
        );
    }
}

export default App;