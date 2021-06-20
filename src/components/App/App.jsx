import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import AvailableDevelopers from '../AvailableDevelopers/AvailableDevelopers';


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

      setSearchText = (event) => {
          this.setState({searchText:event.target.value});
      }

    render() {
        return(
            <div>
                <Header headTitle = {this.state.headerText}/>
                <SearchBox onInputChange = {this.setSearchText}/>
                <AvailableDevelopers developers = {this.state.developers}/>
            </div>
        );
    }
}

export default App;