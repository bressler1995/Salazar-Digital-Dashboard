
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import SideNav from './components/partials/SideNav';
import Contacts from './components/pages/Contacts';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <Router>
      <SideNav/>
      <main className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contacts}/>
      </main>
    </Router>
  );
}

export default App;
