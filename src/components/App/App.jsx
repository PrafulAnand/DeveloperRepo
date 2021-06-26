import '../App/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfilePage from '../ProfilePage/ProfilePage';
import DevProfileHomePage from '../DevProfileHomePage/DevProfileHomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DevProfileHomePage} />
        <Route exact path="/profile/:id" component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;