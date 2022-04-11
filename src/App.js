import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import Navbar from './components/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Contact from './components/pages/Contact';



function App() {
  return (
    <React.Fragment>

    <Router>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pages/Contact" exact component={Contact} />
      </Switch>

    </Router>

    </React.Fragment>
  );
}

export default App;
